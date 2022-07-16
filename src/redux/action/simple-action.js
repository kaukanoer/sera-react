const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = makeActionCreator(SET_TOKEN, 'token');
