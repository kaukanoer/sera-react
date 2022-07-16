// eslint-disable-next-line import/no-anonymous-default-export
import { combineReducers } from 'redux';
import auth from './auth';
import uiLogin from './uiLogin';

const reducer = combineReducers({
  auth,
  uiLogin,
})

export default (state, action) => {
    return reducer(state, action)
}