import { createRouter, createWebHistory } from 'vue-router';
import LoginRegister from './components/LoginRegister.vue'; // Import your login/register component
import MainPage from './components/MainPage.vue'; // Import your MainPage component

const routes = [
  { path: '/', name: 'login', component: LoginRegister }, // The login/register route
  { path: '/main', name: 'main', component: MainPage },    // The main page route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
