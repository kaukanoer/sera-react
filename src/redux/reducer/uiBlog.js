/* eslint-disable import/no-anonymous-default-export */
import { DOWNLOADING_BLOGS } from "../action";

const initialState = {
  downloading: false,
};

export default(state = initialState, action) => {
  switch(action.type) {
    case DOWNLOADING_BLOGS:
      return { ...state, downloading: action.status}
    default: return state
  }
}