import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router';
import { Button, ButtonGroup, Form } from 'reactstrap';

import { storeTask } from '../actions/tasks';
import { fieldInput, fieldSelect, fieldToggle, fieldTags } from '../fields/index';
import { validate, warn } from '../fields/validators';

import PageTitle from './PageTitle'

class Add extends Component {

	static contextTypes={
		router: PropTypes.object
	};

	onSubmit(props){
		this.props.storeTask(props);
		this.context.router.push( '/' );
	}

	render(){
		const { handleSubmit, pristine, reset, submitting } = this.props;

		return(
			<div>
				<PageTitle pageTitle='Новая задача' />
				<Form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
					<Field name="name" type="text" component={ fieldInput } label="Название"/>
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

Add = reduxForm(
	{
		form: 'AddTaskForm',
		validate,
		warn
	}
)(Add);

function mapStateToProps(state){
	return { tasks: state.tasks.all };
}

export default connect(
	mapStateToProps,
	{
		storeTask
	}
)(Add);