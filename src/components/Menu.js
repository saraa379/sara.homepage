/*
		Header component. This component shows on the top of every page.
		The component contains menu.
*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';
import {connect} from 'react-redux';
import {actionClickTab} from '../actions/menuActions.js';

class Menu extends Component {

	constructor(props) {
			super(props);
			this.state = {menuChecked: false
									 };
	}//end of constructor


	render() {
		const {currentTab} = this.props.currentTab

			return (
				<div>
								
				</div>
			)//end of return

	}//end of render

} //end of component
const mapStateToProps = state => ({
  currentTab: state.currentTab
});
export default connect(mapStateToProps,{actionClickTab})(Menu);
