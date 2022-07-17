/* eslint-disable import/no-anonymous-default-export */
import { ADDING_EDITING_BLOG, DOWNLOADING_BLOGS, SET_BLOG_TAPPED_ID } from "../action";

const initialState = {
  downloading: false,
  tappedId: '',
  addingEditing: false,
};

export default(state = initialState, action) => {
  switch(action.type) {
    case DOWNLOADING_BLOGS:
      return { ...state, downloading: action.status}
    case SET_BLOG_TAPPED_ID:
      return { ...state, tappedId: action.id}
    case ADDING_EDITING_BLOG:
      return { ...state, addingEditing: action.status}
    default: return state
  }
}