/* eslint-disable import/no-anonymous-default-export */
import {
  ADDING_EDITING_BLOG, DOWNLOADING_BLOGS, SET_SELECTED_BLOG,
  SHOW_BLOG_DETAIL_DIALOG_VISIBILITY, DELETING_BLOG,
 } from "../action";

const initialState = {
  downloading: false,
  addingEditing: false,
  detailDialogVisibility: false,
  deleting: false,
  selectedBlog: null,
};

export default(state = initialState, action) => {
  switch(action.type) {
    case DOWNLOADING_BLOGS:
      return { ...state, downloading: action.status}
    case SET_SELECTED_BLOG:
      return { ...state, selectedBlog: action.blog}
    case ADDING_EDITING_BLOG:
      return { ...state, addingEditing: action.status}
    case SHOW_BLOG_DETAIL_DIALOG_VISIBILITY:
      return { ...state, detailDialogVisibility: action.status}
    case DELETING_BLOG:
      return { ...state, deleting: action.status}
    default: return state
  }
}