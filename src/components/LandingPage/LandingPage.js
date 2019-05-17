import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './LandingPage.css';
import {actionClickTab} from '../../actions/menuActions.js';
import {LANDINGP_MENU, HOME_PATH} from '../constants.js';
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

					<div className="circle">

							<div className="text">
									<h2>Hi, my name is Sara.</h2>
									<p>I am a web developer. Welcome to my web portfolia page!</p>

									<div className="Language">
										  <Link to={HOME_PATH}>
													<div className={(currentLanguage === "swe") ? "Swedish SweCurrent" : "Swedish"}
													     onClick={() => this.langClick("swe")}>
												  </div>
											</Link>
											<Link to={HOME_PATH}>
													<div className={(currentLanguage === "eng") ? "English EngCurrent" : "English"}
													     onClick={() => this.langClick("eng")}>
													</div>
											</Link>
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
