import React from "react";
import { Badge } from 'reactstrap'

export default class Status extends React.Component {
	render(){
		if(this.props.line) {

			if(this.props.status==0) {
				statusClass = 'line-through';
			}

			return <span className={ statusClass }>{ this.props.name }</span>;
		}

		let statusLabel = '', statusClass = '';

		switch(this.props.status) {
			case 0:
				statusLabel = 'завершена';
				statusClass = 'danger';
				break;
			case 1:
				statusLabel = 'в работе';
				statusClass = 'success';
				break;
		}

		return <Badge color={ statusClass }>{ statusLabel }</Badge>;
	}
}