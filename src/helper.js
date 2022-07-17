import { REST_BASE_URL, REST_URL_LOGIN, REST_URL_REGISTER, COLLECTION_NAME_BLOG } from "./constant";
import { collection, getDocs, doc, setDoc, query, where } from "firebase/firestore";
import firebase from './Firebase';

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
  if (responseText && response.status === 200) {
    return JSON.parse(responseText);
  }
  let err = '';
  try {
    err = JSON.parse(responseText);
  } catch {
    throw new Error(responseText);
  }
  throw new Error(err ? err.error : err);
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

  const result = await sendPostRequest(REST_URL_LOGIN, body);
  return result;
}

export const register = async (email, password) => {
  const body = {
    email,
    password,
  }

  const result = await sendPostRequest(REST_URL_REGISTER, body);
  return result;
}

export const downloadBlogs = async () => {
  const result = await getDocs(query(collection(firebase, COLLECTION_NAME_BLOG), where("visibility", "==", true)));
  let items = [];
  result.forEach((doc) => items = [...items, doc.data()])
  return items;
}

export const addEditBlog = async (body) => {
  console.log('body: ', body)
  await setDoc(doc(firebase, COLLECTION_NAME_BLOG, body.id), body);
}

