import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { APP_NAME } from '../settings'
import Header from './Header'
import Footer from './Footer'

export default class App extends Component {
	render(){
		return (
			<div className="app">
				<div className="page-wrap">
					<Header appName={ APP_NAME } />
					{/*<Flash flashHash={this.state.flash} removeFromFlash={this.removeFromFlash} />*/}
					<div className="row app_container">
						<div className="col-lg-12">
							<ReactCSSTransitionGroup
								component="div"
								className="app_content"
								transitionName="app_content_page"
								transitionEnterTimeout={0}
								transitionLeaveTimeout={0}>
								{ this.props.children }
							</ReactCSSTransitionGroup>
						</div>
					</div>
				</div>
				<Footer appName={ APP_NAME } />
			</div>
		);
	}
}