/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from 'redux';
import auth from './auth';
import uiLoginRegister from './uiLoginRegister';
import blogs from './blogs';
import uiBlog from './uiBlog';

const reducer = combineReducers({
  auth,
  blogs,
  uiBlog,
  uiLoginRegister,
})

export default (state, action) => {
    return reducer(state, action)
}