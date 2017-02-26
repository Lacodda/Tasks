import React from "react"
import { Link } from "react-router"

export default class Header extends React.Component {
	render(){
		return (
			<div className="header clearfix">
				<nav>
					<ul className="nav nav-pills float-right">
						<li className="nav-item">
							<Link className="nav-link" to={`/`}><i className="fa fa-list" aria-hidden="true"></i> Список</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={`/add`}><i className="fa fa-plus" aria-hidden="true"></i> Добавить</Link>
						</li>
					</ul>
				</nav>
				<h3 className="text-muted">{this.props.appName}</h3>
			</div>
		);
	}
}