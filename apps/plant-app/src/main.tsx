import ReactDOM from 'react-dom/client';

import App from './App';
import axios, { AxiosInstance } from 'axios';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

// Define base URL for Axios
const baseUrl: string = 'http://localhost:3000/';

// Create an Axios instance with TypeScript type
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
});

// Set up the token from localStorage if it exists
const token: string | null = localStorage.getItem('token');
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Render the React application with Router support
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
