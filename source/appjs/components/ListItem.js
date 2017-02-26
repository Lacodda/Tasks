import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Button, ButtonGroup, UncontrolledTooltip } from 'reactstrap'

import { deleteTask } from "../actions/tasks";
import Status from "./Status";
import Priority from "./Priority";
import Tags from "./Tags";

class ListItem extends Component {

	onDeleteTaskClick(task){
		if(!confirm('Вы уверены, что хотите удалить задачу?')) return;
		console.log('onDeleteTaskClick', task);
		let index=this.props.tasks.indexOf(task);
		this.props.onDeleteTask(task, index);
	}

	render(){
		let task = this.props.task;

		return(
			<tr>
				<td scope="row">
					<Link to={`/${task.id}`}>
						<Status
							name={task.name}
							status={task.status}
							line={true}
						/>
					</Link>
				</td>
				<td>
					<Priority priority={task.priority} />
				</td>
				<td>
					<Tags tags={task.tags} />
				</td>
				<td>
					<ButtonGroup className="pull-right">
						<Link
							to={`/${task.id}`}
							className="btn btn-secondary"
							id={'tooltipShow_' + task.id}>
							<i className="fa fa-eye" aria-hidden="true"></i>
						</Link>
						<Link
							to={`/${task.id}/edit`}
							className="btn btn-secondary"
							id={'tooltipUpdate_' + task.id}>
							<i className="fa fa-pencil" aria-hidden="true"></i>
						</Link>
						<Button
							onClick={() => this.onDeleteTaskClick(task)}
							id={'tooltipDelete_' + task.id}>
							<i className="fa fa-times" aria-hidden="true"></i>
						</Button>
					</ButtonGroup>
					<UncontrolledTooltip
						target={'tooltipShow_' + task.id}
						placement="top"
					>
						Просмотр
					</UncontrolledTooltip>
					<UncontrolledTooltip
						target={'tooltipUpdate_' + task.id}
						placement="top"
					>
						Редактировать
					</UncontrolledTooltip>
					<UncontrolledTooltip
						target={'tooltipDelete_' + task.id}
						placement="top"
					>
						Удалить
					</UncontrolledTooltip>
				</td>
			</tr>
		);
	}
}

export default connect(
	(state, ownProps) => ({
		tasks: state.tasks.all,
			   ownProps
	}),
	dispatch => ({
		onDeleteTask: (track, index) => {
			dispatch(deleteTask(track, index));
		}
	})
)(ListItem);