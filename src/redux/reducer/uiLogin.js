/* eslint-disable import/no-anonymous-default-export */
import { LOGGING_IN } from "../action";

const initialState = {
  loggingIn: false,
}

export default (state = initialState, action) => { 
  switch (action.type) {
    case LOGGING_IN:
      return {...state, loggingIn: action.status}
    default: return state;
  }
};