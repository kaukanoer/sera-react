/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from 'redux';
import auth from './auth';
import uiLoginRegister from './uiLoginRegister';

const reducer = combineReducers({
  auth,
  uiLoginRegister,
})

export default (state, action) => {
    return reducer(state, action)
}