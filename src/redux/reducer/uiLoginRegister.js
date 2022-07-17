/* eslint-disable import/no-anonymous-default-export */
import { LOGGING_IN, REGISTERING, DISPLAY_ERROR_MESSAGE } from "../action";

const initialState = {
  loggingIn: false,
  registering: false,
  errorMessage: '',
}

export default (state = initialState, action) => { 
  switch (action.type) {
    case LOGGING_IN:
      return {...state, loggingIn: action.status}
    case REGISTERING:
      return {...state, registering: action.status}
    case DISPLAY_ERROR_MESSAGE:
      return {...state, errorMessage: action.msg}
    default: return state;
  }
};