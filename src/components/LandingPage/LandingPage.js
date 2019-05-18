import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './LandingPage.css';
import {actionClickTab} from '../../actions/menuActions.js';
import {LANDINGP_MENU, HOME_PATH} from '../constants.js';
import {actionClickLang} from '../../actions/languageAction.js';

//Global variables for typing function
const texts = ['I', 'am', 'a', 'web', 'developer.', 'Welcome', 'to', 'my', 'web', 'portfolia', 'page.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let sentence = '';

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
		this.timerID = setInterval(
      () => this.type(), 400
    );
	}

	//switches current language
	type = () => {
			if (count === texts.length) {
				count = 0;
			}

			currentText = texts[count];
			letter = currentText.slice(0, ++index);
			//let newSentence = sentence + ' ' + letter;
			//sentence = newSentence;
			//this.updateContent(sentence);

			if (letter.length === currentText.length) {
				count++;
				index = 0;
			}
			//setTimeout(type, 400);
	}

	componentWillUnmount() {
    clearInterval(this.timerID);
  }

	render() {
		const {currentLanguage} = this.props.currentLanguage;
		const { content } = this.state;

		return (
			<div className="innerWrap LandingPage">

					<div className="circle">

							<div className="text">
									<h2>Hi, my name is Sara.</h2>
									<p className="typer">{content}</p>

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
