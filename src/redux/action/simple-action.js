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
