import { combineReducers } from 'redux';
import auth from './auth';

const reducer = combineReducers({
  auth,
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    return reducer(state, action)
}