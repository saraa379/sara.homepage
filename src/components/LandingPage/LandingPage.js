import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './LandingPage.css';
import {actionClickTab} from '../../actions/menuActions.js';
import {LANDINGP_MENU, HOME_PATH} from '../constants.js';
import {actionClickLang} from '../../actions/languageAction.js';
import Typist from 'react-typist';


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
	}


	render() {
		const {currentLanguage} = this.props.currentLanguage;
		const { content } = this.state;



		return (
			<div className="innerWrap LandingPage">

					<div className="circle">

							<div className="text">


										<h2 className="typer">
											<Typist className="typer" cursor={{ show: true, hideWhenDone: true, element: '_' }}>
													Hi, my name is Sara.
											</Typist>
										</h2>

						        <p className="typer p1">
												<Typist className="typer" cursor={{ show: true, element: '_', hideWhenDone: true }}>
													<Typist.Delay ms={2900} />
													I am a web developer. Welcome to my
								      	</Typist>
										</p>
										<p className="typer p2">
												<Typist className="typer" cursor={{ show: true, element: '_', hideWhenDone: true }}>
													<Typist.Delay ms={6200} />
														portfolia page! Here you can check out my
								      	</Typist>
										</p>
										<p className="typer p3">
												<Typist className="typer" cursor={{ show: true, element: '_' }}>
													<Typist.Delay ms={10000} />
														skills, education and experience.
								      	</Typist>
										</p>

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
