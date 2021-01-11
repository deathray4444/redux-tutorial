import { ADD_VIEW } from "./types";

const initialState = {
  count: 0,
};

const viewsReducer = (state = initialState, aciton) => {
  switch (aciton.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + aciton.payload,
      };
    default:
      return state;
  }
};

export default viewsReducer;
