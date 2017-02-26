import React from "react";

export default class Flash extends React.Component {
	render(){
		let component = this,
			flash = component.props.flashHash,
			flashMessages = Object.keys(flash).map(
			function(messageType){
				let messages=flash[messageType];
				return (
					messages.map(
						function(messageContent, messageIndex){
							let messageParams={
								messageType:  messageType,
								messageIndex: messageIndex
							};
							let messageId=messageType+"-"+messageIndex;
							return (
								<div key={messageId} className={"alert alert-"+messageType+" alert-dismissible"} role="alert">
									<button type="button" className="close" data-dismiss="alert" aria-label="Close">
											<span aria-hidden="true" onClick={component.props.removeFromFlash.bind(null, messageParams)}>
											  &times;
											</span>
									</button>
									{messageContent}
								</div>
							);
						}
					)
				)
			}
		);
		return (
			<div className="flash-messages">
				{flashMessages}
			</div>
		);
	}
}