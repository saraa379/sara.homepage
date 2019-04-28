import {LANG_CLICKED} from '../actions/constants.js';
const initialState = {
	currentLanguage: "swe"
}
let languageReducer = (state = initialState, action) => {
	switch( action.type ) {

		case LANG_CLICKED:
		return {
			...state,
			currentLanguage: action.payload
		};

		default:
			return state;
	}
}

export default languageReducer;
