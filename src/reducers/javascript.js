import { GET_JAVASCRIPT_CATEGORY_ID } from '../constants/javascript';

export const getJavascriptCategoryId = (
  state = {
    javascriptCategoryId: '',
  },
  action
) => {
  switch (action.type) {
    case GET_JAVASCRIPT_CATEGORY_ID:
      return {
        javascriptCategoryId: action.payload,
      };
    default:
      return state;
  }
};
