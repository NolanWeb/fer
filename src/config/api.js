const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const API_ENDPOINTS = {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
    products: `${API_BASE_URL}/products`,
    publications: `${API_BASE_URL}/publications`,
    users: `${API_BASE_URL}/users`,
    cart: `${API_BASE_URL}/cart`,
    checkout: `${API_BASE_URL}/checkout`,
};

export default API_BASE_URL;