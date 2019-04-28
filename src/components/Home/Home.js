import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Home.css';
import {actionClickTab} from '../../actions/menuActions.js';
import {HOME_MENU} from '../constants.js';


class Home extends Component {
	componentDidMount(){
		this.props.actionClickTab(HOME_MENU);
	}
	render() {
		const {currentLanguage} = this.props.currentLanguage;
		console.log("Current language un home: " + currentLanguage);

		return (
			<div className="innerWrap">

					<div className={(currentLanguage === "swe") ? "HomeWrap HomeSwe" : "displayNone"}>
							<div className="Hero">
							</div>
					</div>

				 	<div className={(currentLanguage === "eng") ? "HomeWrap HomeEng" : "displayNone"}>
							Home eng
					</div>

			</div>
		)
	}

} //end of component
const mapStateToProps = state => ({
	currentLanguage: state.currentLanguage
});

export default connect(mapStateToProps,{actionClickTab})(Home);


//
