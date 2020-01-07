import validator from "validator";

/**
 *
 * @param {RequestInfo} url
 * @param {RequestInit} options
 */
export function get(input, options) {
  options.method = "GET";
  mustJSON(options.body);
  options.body = JSON.stringify(options.body);
  return fetch(input, {
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    ...options
  })
    .then(resp => {
      if (resp.ok) return resp;
      throw new Error(resp.status, resp.statusText);
    })
    .catch(err => {
      console.log(err);
    });
}

/**
 *
 * @param {RequestInfo} url
 * @param {RequestInit} options
 */
export function post(input, options) {
  options.method = "POST";
  mustJSON(options.body);
  options.body = JSON.stringify(options.body);
  return fetch(input, {
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    ...options
  })
    .then(resp => {
      if (resp.ok) return resp;
      throw new Error(resp.status, resp.statusText);
    })
    .catch(err => {
      console.log(err);
    });
}

/**
 *
 * @param {RequestInfo} url
 * @param {RequestInit} options
 */
export function del(input, options) {
  options.method = "DELETE";
  mustJSON(options.body);
  options.body = JSON.stringify(options.body);
  return fetch(input, {
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    ...options
  })
    .then(resp => {
      if (resp.ok) return resp;
      throw new Error(resp.status, resp.statusText);
    })
    .catch(err => {
      console.log(err);
    });
}

/**
 *
 * @param {RequestInfo} url
 * @param {RequestInit} options
 */
export function put(input, options) {
  options.method = "PUT";
  mustJSON(options.body);
  options.body = JSON.stringify(options.body);
  return fetch(input, {
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    ...options
  }).then(resp => {
    if (resp.ok) return resp;
    throw new Error(resp.status, resp.statusText);
  });
}

export default {
  get,
  post,
  del,
  put
};

function mustJSON(body) {
  const isJSON =
    body instanceof String
      ? validator.isJSON(body)
      : validator.isJSON(JSON.stringify(body));
  if (!isJSON) {
    throw new Error("Must be type of JSON");
  }
  return isJSON;
}
