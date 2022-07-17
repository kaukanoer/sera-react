/* eslint-disable import/no-anonymous-default-export */
import { ROUTE_NAME_MAIN_PAGE } from "../../../constant";
import { register } from "../../../helper";
import { registering, setToken } from "../simple-action"

export default (email, password, navigate) => async (dispatch) => {
  try {
    dispatch(registering(true));
    const response = await register(email, password);
    if (response) {
      dispatch(setToken(response.token));
      navigate(`..${ROUTE_NAME_MAIN_PAGE}`, { replace: true });
    }
  }
  finally {
    dispatch(registering(false));
  }
};
