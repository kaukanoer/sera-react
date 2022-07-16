import { SET_TOKEN } from "../action";

const initialState = {
  token: '',
  fullName: 'Fathur Rizko',
}

/* eslint-disable import/no-anonymous-default-export */
export default (state = initialState, action) => { 
  switch (action.type) {
    case SET_TOKEN:
      return {...state, token: action.token}
    default: return state;
  }
};