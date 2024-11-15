import { createRoot } from 'react-dom/client'; // Named import

import App from './App';
import axios, { AxiosInstance } from 'axios';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(__dirname, '../../../.env'),
});

// Define base URL for Axios
const baseUrl: string | undefined = process.env.API_BASE_URL;

// Create an Axios instance with TypeScript type
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl ?? "http://127.0.0.1:3000/",
});

// Set up the token from localStorage if it exists
const token: string | null = localStorage.getItem('token');
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Render the React application with Router support
const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
