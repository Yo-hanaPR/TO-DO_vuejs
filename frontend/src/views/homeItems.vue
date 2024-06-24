<template>
    <div class="container-stats">
      <div class="stats">
        
        <div class="icon">
          <i class="fas fa-tasks count"></i> <!-- Icono de tareas, ajusta la clase según el icono que estés utilizando -->
        </div>
        <div class="content">
          <h2>Tareas Programadas</h2>
          <span class="count" style="margin-left:150px;">{{ count }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useItemStore } from '../stores/itemStore';

  const store = useItemStore();
  const count = ref(0);

  onMounted( async () => {
    await store.fetchItems();
    count.value= store.items.length;
  });

import '@fortawesome/fontawesome-free/css/all.css'; // Importa todos los estilos CSS de Font Awesome
  </script>

  <style scoped>
@import "@/styles/main.scss";


  </style>