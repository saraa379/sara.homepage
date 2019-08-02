/*
		Header section
*/
import React, {Component} from 'react';
import './Header.css';
//import {Link} from 'react-router-dom';
import './Menu.css';
import {connect} from 'react-redux';
import {actionClickLang} from '../actions/languageAction.js';

class Header extends Component {
	constructor(props) {
			super(props);
			this.state = {currentLang: "swe"
									 };
	}//end of constructor


	langClick = (currentLang) => {
		this.setState({currentLang});
		this.props.actionClickLang(currentLang);
	}



	render() {
		const { currentLang } = this.state;
		//console.log("Current language is: " + currentLang);
		const {currentTab} = this.props.currentTab;
		//console.log("Current page is: " + currentTab);

		return (
			<header className={(currentTab !== "landingpage") ? "Header" : "displayNone"}>
						<div className="Logo">
								Sarantsetseg Hedenfalk
						</div>
						<div className="LangHeader">
								<div className={(currentLang === "swe") ? "Swedish SweCurrent" : "Swedish"}
										 onClick={() => this.langClick("swe")}></div>
								<div className={(currentLang === "eng") ? "English EngCurrent" : "English"}
								     onClick={() => this.langClick("eng")}></div>
						</div>
			</header>
		)
	}

} //end of component

const mapStateToProps = state => ({
		currentTab: state.currentTab
});

export default connect(mapStateToProps,{actionClickLang}) (Header);


//
