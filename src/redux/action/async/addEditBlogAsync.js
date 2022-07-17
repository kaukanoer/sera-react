/* eslint-disable import/no-anonymous-default-export */
import { addingEditingBlog, setSelectedBlog } from "../simple-action"
import { addEditBlog } from "../../../helper";
import { v4 as uuid } from 'uuid';
import { ROUTE_NAME_MAIN_PAGE } from "../../../constant";

export default (title, description, navigate) => async (dispatch, getState) => {
  try {
    dispatch(addingEditingBlog(true));
    const { selectedBlog } = getState().uiBlog;
    const body = {
      id: selectedBlog?.id || uuid(),
      title, 
      description,
      visibility: true,
    }

    await addEditBlog(body);
    dispatch(setSelectedBlog(null))
    navigate(`..${ROUTE_NAME_MAIN_PAGE}`, { replace: true });
  }
  finally {
    dispatch(addingEditingBlog(false));
  }
};
