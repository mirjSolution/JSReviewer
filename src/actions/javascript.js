import { GET_JAVASCRIPT_CATEGORY } from '../constants/javascript';

export const getJavascriptCategoryId = (category) => (dispatch) => {
  dispatch({
    type: GET_JAVASCRIPT_CATEGORY,
    payload: category,
  });
};
