/* eslint-disable import/no-anonymous-default-export */
import { downloadingBlogs,  setBlogs } from "../simple-action"
import { downloadBlogs } from "../../../helper";

export default () => async (dispatch) => {
  try {
    dispatch(downloadingBlogs(true));
    const response = await downloadBlogs();
    if (response) {
      dispatch(setBlogs(response));
    }
  }
  finally {
    dispatch(downloadingBlogs(false));
  }
};
