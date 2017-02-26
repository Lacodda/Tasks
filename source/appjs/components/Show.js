import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchTask } from "../actions/tasks";
import { Link } from "react-router";
import { Table, Badge } from 'reactstrap'

import PageTitle from './PageTitle'
import Status from "./Status";
import Priority from "./Priority";
import Tags from "./Tags";

class Show extends Component {

	static contextTypes={
		router: PropTypes.object
	};

	componentWillMount(){
		this.props.fetchTask(this.props.params.id);
	}

	render(){

		let task = this.props.task;

		if(!task){
			return <div>Загрузка...</div>;
		}

		return (
			<div>
				<PageTitle pageTitle={`Задача: ${task.name}`} />
				<Table striped>
					<tbody>
						<tr>
							<th>Название:</th>
							<td>{ task.name }</td>
						</tr>
						<tr>
							<th>Статус:</th>
							<td>
								<Status
									name={task.name}
									status={task.status}
								/>
							</td>
						</tr>
						<tr>
							<th>Приоритет:</th>
							<td>
								<Priority priority={task.priority} />
							</td>
						</tr>
						<tr>
							<th>Теги:</th>
							<td>
								<Tags tags={task.tags} />
							</td>
						</tr>
					</tbody>
				</Table>
				<Link className="btn btn-info" to="/">
					<i className="fa fa-chevron-left" aria-hidden="true"></i> Назад
				</Link>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {task: state.tasks.task};
}

export default connect(
	mapStateToProps,
	{
		fetchTask
	}
)(Show);