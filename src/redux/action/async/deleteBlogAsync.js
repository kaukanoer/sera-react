/* eslint-disable import/no-anonymous-default-export */
import { deletingBlog, displayErrorMessage, setSelectedBlog, showBlogDetailDialogVisibility } from "../simple-action"
import { addEditBlog } from "../../../helper";
import downloadBlogsAsync from "./downloadBlogsAsync";

export default () => async (dispatch, getState) => {
  try {
    dispatch(deletingBlog(true));
    const { selectedBlog } = getState().uiBlog;
    const { token } = getState().auth;

    const body = {
      id: selectedBlog.id,
      title: selectedBlog.title,
      description:  selectedBlog.description,
      visibility: false,
    }
    
    await addEditBlog(body, token);
    dispatch(setSelectedBlog(null))
    dispatch(showBlogDetailDialogVisibility(false));

    dispatch(downloadBlogsAsync())
      .catch((err) => dispatch(displayErrorMessage(err.message)))
  }
  finally {
    dispatch(deletingBlog(false));
  }
};
