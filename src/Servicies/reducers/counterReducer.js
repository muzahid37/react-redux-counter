import { DECRIMENT, INCRIMENT, RESET } from "../constants/counterConstant";

const initialCounter = { count: 0 };
const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCRIMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECRIMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
     
    default:
      return state;
  }
};
export default counterReducer;
