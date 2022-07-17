/* eslint-disable import/no-anonymous-default-export */
import { downloadingBlogs,  setBlogs } from "../simple-action"
import { downloadBlogs } from "../../../helper";

export default () => async (dispatch, getState) => {
  try {
    dispatch(downloadingBlogs(true));
    const { token } = getState().auth;
    
    const response = await downloadBlogs(token);
    if (response) {
      dispatch(setBlogs(response));
    }
  }
  finally {
    dispatch(downloadingBlogs(false));
  }
};
