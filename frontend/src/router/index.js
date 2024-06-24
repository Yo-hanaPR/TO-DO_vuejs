import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/homeItems.vue';
import Create from '../views/CreateItems.vue';
import Edit from '../views/editItems.vue';
import ServicesComponent from '../views/ServicesComponent.vue';
import TareasItem from '../views/TareasItem.vue';

const routes = [
  {
    path: '/',
    name: 'homeItems',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  },
  /********************* */
  
  {
    path: '/presupuesto',
    name: 'presupuesto',
    component: ServicesComponent
  },
  {
    path: '/tareas',
    name: 'tareasItem',
    component: TareasItem
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes //matriz de rutas que se configuró anteriormente
});

export default router;
