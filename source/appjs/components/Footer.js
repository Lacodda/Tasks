import React from "react"

export default class Footer extends React.Component {
	render(){
		return (
			<footer className="footer">
				<div className="container">
					<p>&copy; {this.props.appName} 2017</p>
				</div>
			</footer>
		);
	}
}