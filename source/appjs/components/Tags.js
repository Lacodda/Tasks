import React from "react";
import { Badge } from 'reactstrap'

export default class Tags extends React.Component {
	render(){
		if (!this.props.tags) {
			return (
				<div></div>
			);
		}
		return (
			<div>
				{
					this.props.tags.map(
						function(tag, key){
							return <span key={key}><Badge color="info">{ tag.name }</Badge> </span>;
						}
					)
				}
			</div>
		);
	}
}