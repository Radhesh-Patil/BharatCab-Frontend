// Store JWT Token in SessionStorage
export const setToken = (token) => {
    sessionStorage.setItem('jwtToken', token);
}

// Retrieve JWT Token from SessionStorage
export const getToken = () => {
    return sessionStorage.getItem('jwtToken'); // Return the token
}

// Remove JWT Token from SessionStorage
export const removeToken = () => {
    sessionStorage.removeItem('jwtToken');
}
