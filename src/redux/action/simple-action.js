const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = makeActionCreator(SET_TOKEN, 'token');

export const LOGGING_IN = 'LOGGING_IN';
export const logginIn = makeActionCreator(LOGGING_IN, 'status')

export const REGISTERING = 'REGISTERING';
export const registering = makeActionCreator(REGISTERING, 'status')

export const DISPLAY_ERROR_MESSAGE = 'DISPLAY_ERROR_MESSAGE';
export const displayErrorMessage = makeActionCreator(DISPLAY_ERROR_MESSAGE, 'msg')

export const DOWNLOADING_BLOGS = 'DOWNLOADING_BLOGS';
export const downloadingBlogs = makeActionCreator(DOWNLOADING_BLOGS, 'status')

export const SET_BLOGS = 'SET_BLOGS';
export const setBlogs = makeActionCreator(SET_BLOGS, 'data');

export const SET_SELECTED_BLOG = 'SET_SELECTED_BLOG';
export const setSelectedBlog = makeActionCreator(SET_SELECTED_BLOG, 'blog')

export const ADDING_EDITING_BLOG = 'ADDING_EDITING_BLOG';
export const addingEditingBlog = makeActionCreator(ADDING_EDITING_BLOG, 'status');

export const DELETING_BLOG = 'DELETING_BLOG';
export const deletingBlog = makeActionCreator(DELETING_BLOG, 'status');

export const SHOW_BLOG_DETAIL_DIALOG_VISIBILITY = 'SHOW_BLOG_DETAIL_DIALOG_VISIBILITY';
export const showBlogDetailDialogVisibility = makeActionCreator(SHOW_BLOG_DETAIL_DIALOG_VISIBILITY, 'status')

