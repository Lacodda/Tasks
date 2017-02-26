import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router';
import { Button, ButtonGroup, Form } from 'reactstrap';

import { fetchTask, updateTask, deleteTask } from '../actions/tasks';
import { fieldSelect, fieldToggle, fieldTags } from '../fields/index';
import { validate, warn } from '../fields/validators';

import PageTitle from './PageTitle'

class Edit extends Component {

	static contextTypes={
		router: PropTypes.object
	};

	componentWillMount(){

		this.props.fetchTask(this.props.params.id);
// 		this.props.initialize();
	}

	onDeleteClick(){
		this.props.deleteTask(this.props.params.id).then(
			() =>{
				this.context.router.push('/');
			}
		);
	}

	onDeleteTaskClick(task){
		if(!confirm('Вы уверены, что хотите удалить задачу?')) return;
		console.log('onDeleteTaskClick', task);
		let index=this.props.tasks.indexOf(task);
		this.props.onDeleteTask(task, index);
	}

	onSubmit(props){
		this.props.updateTask(props);
		this.context.router.push( '/' );
	}

	render(){
		let task = this.props.task;

		if(!task){
			return <div>Загрузка...</div>;
		}

		if(this.props.initialValues.tags){
			this.props.initialValues.tags = this.props.initialValues.tags.map((tag) => {
				return tag.name;
			});
		}

		const { handleSubmit, pristine, reset, submitting } = this.props;

		return(
			<div>
				<PageTitle pageTitle={`Задача: ${task.name}`} />
				<Form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
					<Field name="status" type="checkbox" component={ fieldToggle } label="Статус"/>
					<Field name="tags" type="checkbox" component={ fieldTags } label="Теги"/>
					<Field name="priority" type="select" component={ fieldSelect } label="Приоритет">
						<option>Выбирите приоритет</option>
						<option value={1}>Низкий</option>
						<option value={2}>Средний</option>
						<option value={3}>Высокий</option>
					</Field>
					<Link className="btn btn-info" to="/">
						<i className="fa fa-chevron-left" aria-hidden="true"></i> Назад
					</Link>
					<ButtonGroup className="pull-right">
						<Button color="success" type="submit" disabled={ submitting }>
							<i className="fa fa-check" aria-hidden="true"></i> Отправить
						</Button>
						<Button color="danger" type="button" disabled={ pristine||submitting } onClick={ reset }>
							<i className="fa fa-times" aria-hidden="true"></i> Очистить
						</Button>
					</ButtonGroup>
				</Form>
			</div>
		)
	}
}

Edit = reduxForm(
	{
		form: 'EditTaskForm',
		enableReinitialize: true,
		validate,
		warn
	}
)(Edit);

function mapStateToProps(state, ownProps){
	return {
		task: state.tasks.task,
		initialValues: state.tasks.task,
		tasks: state.tasks.all,
		ownProps
	};
}

export default connect(
	mapStateToProps,
	{
		fetchTask,
		updateTask,
		deleteTask
	}
)(Edit);