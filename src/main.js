import { createApp } from 'vue';
import App from './App.vue';

//import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createRouter, createWebHistory } from 'vue-router'; // Importar funciones de Vue Router

import HomePage from "./modules/pages/views/HomePage.vue";
import ForosPage from "./modules/pages/views/ForosPage.vue";
import PasantiasPage from "./modules/pages/views/PasantiasPage.vue";
import GraduadosPage from "./modules/pages/views/GraduadosPage.vue";
import LoginPage from "./modules/authentication/views/LoginPage.vue";
import RegistroPage from "./modules/authentication/views/RegistroPage.vue";

// Configuración de rutas
const router = createRouter({
    history: createWebHistory(), // Historial basado en navegador
    routes: [
        { path: "/", component: HomePage },
        { path: "/login", component: LoginPage },
        { path: "/registro", component: RegistroPage },
        { path: "/foros", component: ForosPage },
        { path: "/pasantias", component: PasantiasPage },
        { path: "/graduados", component: GraduadosPage },
    ],
});

// Crear instancia de la app y agregar el router
createApp(App)
    .use(router) // Asegúrate de usar el router
    .mount('#app');
