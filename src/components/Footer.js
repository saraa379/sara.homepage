/*
		Header section
*/
import React, {Component} from 'react';
import './Footer.css';
import {connect} from 'react-redux';

class Footer extends Component {
	constructor(props) {
			super(props);
			this.state = {
									 };
	}//end of constructor


	render() {
		const {currentLanguage} = this.props.currentLanguage;
		//console.log("Current language is: " + currentLang);
		const {currentTab} = this.props.currentTab;
		//console.log("Current page is: " + currentTab);

		return (
			<footer className={(currentTab !== "landingpage") ? "Footer" : "displayNone"}>
						<p>paragraph</p>
						<p>paragraph</p>
			</footer>
		)
	}

} //end of component

const mapStateToProps = state => ({
		currentTab: state.currentTab,
		currentLanguage: state.currentLanguage
});

export default connect(mapStateToProps,{}) (Footer);


//
