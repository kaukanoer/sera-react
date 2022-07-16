import { REST_BASE_URL, REST_URL_LOGIN } from "./constant";

const getHttpHeaders = (authenticationToken) => {
  let headers = {
    'Content-Type': 'application/json',
  };
  
  if (authenticationToken) {
    headers = { ...headers, Authorization: authenticationToken };
  }
  
  return headers;
};

const handleResponse = async (response) => {
  const responseText = await response.text();
  if (response.status === 200) {
    if (responseText) {
      return JSON.parse(responseText);
    }
    throw new Error(responseText);
  }
};
  
export const sendGetRequest = async (apiPath, authenticationToken) => {
    const url = `${REST_BASE_URL}${apiPath}`;
    const method = 'GET';
    const headers = getHttpHeaders(authenticationToken);
    const response = await fetch(url, { method, headers });
    return handleResponse(response);
};

export const sendPostRequest = async (apiPath, body, authenticationToken) => {
    const bodyStr = JSON.stringify(body);
    const url = encodeURI(`${REST_BASE_URL}${apiPath}`);
    const method = 'POST';
    const headers = getHttpHeaders(authenticationToken);
    const response = await fetch(url, { method, headers, body: bodyStr });
    return handleResponse(response);
};
  
export const login = async (email, password) => {
    const body = {
      email,
      password,
    }
    const DUMMY_RESPONSE = {
      token: 'abc123'
    }
    // const result = await sendPostRequest(REST_URL_LOGIN, body);
    return DUMMY_RESPONSE;
}