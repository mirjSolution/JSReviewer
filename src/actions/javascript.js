import { GET_JAVASCRIPT_CATEGORY_ID } from '../constants/javascript';

export const getJavascriptCategoryId = (id) => (dispatch) => {
  dispatch({
    type: GET_JAVASCRIPT_CATEGORY_ID,
    payload: id,
  });
};
