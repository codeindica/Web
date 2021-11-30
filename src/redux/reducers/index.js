import {LINK_VALUE} from '../actions/types';

const initialState = {
  linkValue: '',
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LINK_VALUE:
      return {
        ...state,
        linkValue: action.payload,
      };

    default:
      return state;
  }
};

export default RootReducer;
