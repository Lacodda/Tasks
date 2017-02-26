import React from "react";
import { Badge } from 'reactstrap'

export default class Priority extends React.Component {
	render(){
		let priorityLabel = '', priorityClass = '';

		switch(this.props.priority) {
			case 1:
				priorityLabel = 'Низкий';
				priorityClass = 'success';
				break;
			case 2:
				priorityLabel = 'Средний';
				priorityClass = 'warning';
				break;
			case 3:
				priorityLabel = 'Высокий';
				priorityClass = 'danger';
				break;
			default:
				priorityLabel = 'Низкий';
				priorityClass = 'success';
				break;
		}

		return (
			<Badge color={`${ priorityClass }`}>{ priorityLabel }</Badge>
		);
	}
}