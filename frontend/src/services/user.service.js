import {useIsAuthenticated} from '../useAuth.js'

export const userService = {
    login,
    logout,
    register
};


async function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    const response =  await fetch(`http://localhost:8081/api/login`, requestOptions);
    const result =await response.json();
    const {isAuthenticated, toggle} = useIsAuthenticated();
    console.log(result)
    if(result)
      toggle();
    return result;
}


async function register(username, password, email) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email })
  };

  const response =  await fetch(`http://localhost:8081/api/register`, requestOptions);
  const result =await response.json();
  console.log(result)
  return result;

}

function logout() {
    // remove user from local storage to log user out
    const {isAuthenticated, toggle} = useIsAuthenticated();

    toggle();
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}