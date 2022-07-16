/* eslint-disable import/no-anonymous-default-export */
import { login } from "../../../helper";
import { logginIn, setToken } from "../simple-action"

export default function () {
  return async (dispatch) => {
    try {
      dispatch(logginIn(true));
      const response = await login('eve.holt@reqres.in', 'cityslicka');
      if (response) {
        dispatch(setToken(response.token));
      }
    }
    finally {
      dispatch(logginIn(false));
    }
  };
}
