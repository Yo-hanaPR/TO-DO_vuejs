/*
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
*/


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
//import store from './store'; // O usa Pinia si prefieres
import { createPinia } from 'pinia';

const pinia = createPinia();
createApp(App)
  .use(router)
  //.use(store) // Si estás usando Pinia, esto cambia a .use(createPinia())
  .use(pinia)
  .mount('#app');