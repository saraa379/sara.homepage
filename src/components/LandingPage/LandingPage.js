import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './LandingPage.css';
import {actionClickTab} from '../../actions/menuActions.js';
import {LANDINGP_MENU, HOME_PATH} from '../constants.js';
import {actionClickLang} from '../../actions/languageAction.js';
import Typist from 'react-typist';

//Global variables for typing function
var i = 0;
var txt = "I am a web developer. Welcome to my portfolia page! Here you can check out my skills, education and experience.";
var speed = 5000;
var temp = "";

//var typed = new Typed(".element", options);

class LandingPage extends Component {
	constructor(props) {
			super(props);
			this.state = {content: ""
									 };
	}//end of constructor
	//functions that update states
	updateContent = (content) => {
		this.setState({content});
	}

	componentDidMount(){
		this.props.actionClickTab(LANDINGP_MENU);
		/*
		for (var i = 0; i < txt.length; i++) {
			setTimeout(this.type(i), speed);
		}*/
	}

	//switches current language
	type = (index) => {
			temp = temp + txt.charAt(index);
			console.log("content: " + temp);
			this.updateContent(temp);
	}


	render() {
		const {currentLanguage} = this.props.currentLanguage;
		const { content } = this.state;



		return (
			<div className="innerWrap LandingPage">

					<div className="circle">

							<div className="text">

									<Typist className="typer">
										<h2>Hi, my name is Sara.</h2>
										<Typist.Delay ms={500} />
						        <p className="typer">I am a web developer. Welcome to my portfolia page! Here you can check out my skills, education and experience.</p>
						      </Typist>

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
