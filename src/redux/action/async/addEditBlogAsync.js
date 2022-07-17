/* eslint-disable import/no-anonymous-default-export */
import { addingEditingBlog } from "../simple-action"
import { addBlog, editBlog } from "../../../helper";
import { v4 as uuid } from 'uuid';
import { ROUTE_NAME_MAIN_PAGE } from "../../../constant";

export default (title, description, navigate) => async (dispatch, getState) => {
  try {
    dispatch(addingEditingBlog(true));
    const { tappedId } = getState().uiBlog;

    if (tappedId) {
      const body = {
        id: tappedId,
        title, 
        description,
      }
      await editBlog(body);
    } else {
      const body = {
        id: uuid(),
        title, 
        description,
      }
      await addBlog(body);
      navigate(`..${ROUTE_NAME_MAIN_PAGE}`, { replace: true });
    }

  }
  finally {
    dispatch(addingEditingBlog(false));
  }
};
