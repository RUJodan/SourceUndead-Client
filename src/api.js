const apiBase = 'http://localhost:8080';

// handle basic fetch calls to the API
async function CallAPI(route, body) {
  const response = await fetch(`${apiBase}/${route}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response.json();
}

// api call routes here
function createAccount(body) {
  return CallAPI('create-account', body);
}

function login(body) {
  return CallAPI('login', body);
}

export default {
  createAccount,
  login,
};
