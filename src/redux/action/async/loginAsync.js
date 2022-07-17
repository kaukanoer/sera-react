/* eslint-disable import/no-anonymous-default-export */
import { ROUTE_NAME_MAIN_PAGE } from "../../../constant";
import { login } from "../../../helper";
import { logginIn, setToken } from "../simple-action"

export default (email, password, navigate) => async (dispatch) => {
  try {
    dispatch(logginIn(true));
    const response = await login(email, password);
    if (response) {
      dispatch(setToken(response.token));
      navigate(`..${ROUTE_NAME_MAIN_PAGE}`, { replace: true });
    }
  }
  finally {
    dispatch(logginIn(false));
  }
};

// 'eve.holt@reqres.in', 'cityslicka'