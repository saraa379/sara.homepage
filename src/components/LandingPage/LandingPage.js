import React, {Component} from 'react';
import {connect} from 'react-redux';
import './LandingPage.css';
import {actionClickTab} from '../../actions/menuActions.js';
import {LANDINGP_MENU} from '../constants.js';
import {actionClickLang} from '../../actions/languageAction.js';


class LandingPage extends Component {
	componentDidMount(){
		this.props.actionClickTab(LANDINGP_MENU);
	}

	//switches current language
	langClick = (language) => {
		this.props.actionClickLang(language);
	}

	render() {
		const {currentLanguage} = this.props.currentLanguage;
		//console.log("Current language un home: " + currentLanguage);

		return (
			<div className="innerWrap LandingPage">

					<div id='stars'></div>
					<div id='stars2'></div>
					<div id='stars3'></div>

					<div className="circle">

							<div className="text">
									<h1>Sarantsetseg Hedenfalk</h1>
									<p>Welcome to my homepage!</p>

									<div className="Language">
										<div className={(currentLanguage === "swe") ? "Swedish SweCurrent" : "Swedish"}
												 onClick={() => this.langClick("swe")}></div>
										<div className={(currentLanguage === "eng") ? "English EngCurrent" : "English"}
										     onClick={() => this.langClick("eng")}></div>
								  </div>
							</div>



					</div>

			</div>
		)
	}

} //end of component
const mapStateToProps = state => ({
	currentLanguage: state.currentLanguage
});

export default connect(mapStateToProps,{actionClickTab, actionClickLang})(LandingPage);


//
