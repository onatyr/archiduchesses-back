import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios"; // Import the router

const app = createApp(App);

const baseUrl = "http://localhost:3000/";
export const axiosInstance =  axios.create({
    baseURL: baseUrl,
})

const token = localStorage.getItem('token')
if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

app.use(router);
app.mount("#app");
