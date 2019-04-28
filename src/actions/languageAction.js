import {LANG_CLICKED} from './constants.js';
//click event for tabs

export const actionClickLang = (language) => dispatch => {
      dispatch({
        type: LANG_CLICKED,
        payload: language
      });
};
