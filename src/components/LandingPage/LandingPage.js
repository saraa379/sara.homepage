import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './LandingPage.css';
import {actionClickTab} from '../../actions/menuActions.js';
import {LANDINGP_MENU, HOME_PATH} from '../constants.js';
import {actionClickLang} from '../../actions/languageAction.js';
import Typist from 'react-typist-updated';


class LandingPage extends Component {
	constructor(props) {
			super(props);
			this.state = {cursorP1: false
									 };
	}//end of constructor
	//functions that update states
	updateCursorP1 = (cursorP1) => {
		this.setState({cursorP1});
	}

	componentDidMount(){
		this.props.actionClickTab(LANDINGP_MENU);
	}

	langClick = (lang) => {
		this.props.actionClickLang(lang);
	}


	render() {
		const {currentLanguage} = this.props.currentLanguage;
		const { cursorP1 } = this.state;



		return (
			<div className="innerWrap LandingPage">

					<div className="circle">

							<div className="text">


										<h2 className="typer">
											<Typist className="typer" avgTypingSpeed={0}
											        cursor={{ show: false, hideWhenDone: true, element: '_' }}>
													Hi, my name is Sara.
											</Typist>
										</h2>

						        <div className="parag typer p1">
												<Typist className="typer" avgTypingSpeed={0}
												        cursor={{ show: false, element: '_', hideWhenDone: true }}>
													<Typist.Delay ms={2700} />
													  I am a web developer. Welcome
								      	</Typist>
										</div>
										<div className="parag typer p2">
												<Typist className="typer" avgTypingSpeed={0}
												        cursor={{ show: false, element: '_', hideWhenDone: true }}>
													<Typist.Delay ms={4900} />
														to my portfolia page!
								      	</Typist>
										</div>

									<div className="Language">
										  <Link to={HOME_PATH}>
													<div className="BtnLang"
													     onClick={() => this.langClick("swe")}>
															 english
												  </div>
											</Link>
											<Link to={HOME_PATH}>
													<div className="BtnLang"
													     onClick={() => this.langClick("eng")}>
															 swedish
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
