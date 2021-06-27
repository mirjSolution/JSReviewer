import { GET_JAVASCRIPT_CATEGORY } from '../constants/javascript';

export const getJavascriptCategory = (
  state = {
    category: {
      categoryId: 0,
      category: '',
    },
  },
  action
) => {
  switch (action.type) {
    case GET_JAVASCRIPT_CATEGORY:
      return {
        category: action.payload,
      };
    default:
      return state;
  }
};
