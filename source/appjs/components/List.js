import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTasks } from "../actions/tasks";
import { Table } from 'reactstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ListItem from './ListItem'
import PageTitle from './PageTitle'

class List extends Component {

	componentWillMount(){
		this.props.onFetchTasks();
	}

	Tasks(){
		return this.props.tasks.map((task, index) => {
			return (
				<ListItem
					key={task.id}
					task={task}
				/>
			)
		});
	}

	render(){
		return (
			<div>
				<PageTitle pageTitle='Список задач' />
				<Table>
					<thead>
						<tr>
							<th>Название</th>
							<th>Приоритет</th>
							<th>Теги</th>
							<th></th>
						</tr>
					</thead>
					<ReactCSSTransitionGroup
						component="tbody"
						transitionName="documents-list"
						transitionEnterTimeout={0}
						transitionLeaveTimeout={0}
					>
						{this.Tasks()}
					</ReactCSSTransitionGroup>
				</Table>
			</div>
		);
	}
}

export default connect(
	(state, ownProps) => ({
		tasks: state.tasks.all,
		ownProps
	}),
	dispatch => ({
		onFetchTasks: () => {
			dispatch(fetchTasks());
		}
	})
)(List);