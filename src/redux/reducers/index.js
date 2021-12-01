import {LINK_VALUE, SAVE_TOKEN} from '../actions/types';

const initialState = {
  linkValue: '',
  token: ''
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LINK_VALUE:
      return {
        ...state,
        linkValue: action.payload,
      };
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default RootReducer;
