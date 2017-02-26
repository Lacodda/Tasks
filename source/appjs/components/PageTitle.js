import React from 'react'

export default class PageTitle extends React.Component {
	render(){
		return (
			<h2 className="page-title">{this.props.pageTitle}</h2>
		);
	}
}