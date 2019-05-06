import React, {Component} from 'react';
import {connect} from 'react-redux';
import './LandingPage.css';
import {actionClickTab} from '../../actions/menuActions.js';
import {LANDINGP_MENU} from '../constants.js';


class LandingPage extends Component {
	componentDidMount(){
		this.props.actionClickTab(LANDINGP_MENU);
	}
	render() {
		const {currentLanguage} = this.props.currentLanguage;
		//console.log("Current language un home: " + currentLanguage);

		return (
			<div className="innerWrap LandingPage">

					<div className="circle">
							<div className="text">
									<h1>Sarantsetseg Hedenfalk</h1>
									<p>Thank you for visiting my website!</p>
							</div>
					</div>

			</div>
		)
	}

} //end of component
const mapStateToProps = state => ({
	currentLanguage: state.currentLanguage
});

export default connect(mapStateToProps,{actionClickTab})(LandingPage);


//
