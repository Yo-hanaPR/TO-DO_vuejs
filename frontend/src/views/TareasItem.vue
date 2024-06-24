<template>
    <div class="container">
      
      <router-link to="/create">
        <button>Crear nueva tarea</button></router-link>
      
        <div :class="{
          completada: item.completada,
          pendiente: !item.completada,
          tarea: true }" v-for="item in items" :key="item.id">
          
          <h1>{{ item.titulo }}</h1>
          <h3>{{ item.descripcion }}</h3>
          <router-link :to="`/edit/${item._id}`"><button>Edit</button></router-link>
          <button @click="deleteItem(item._id)">Delete</button>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted , watch } from 'vue';
  //import { useStore } from 'vuex'; // Usa Pinia si prefieres.. No estamos usando VUEX, estamos usando PINIA, asì que la siguiente lìnea usa la tienda de PINIA 
  import { useItemStore } from '../stores/itemStore';
  
  //const store = useStore(); Como no estamos usando VUEX entonces èsta lìnea no sirve. 
  const store = useItemStore();
  const items = ref([]);
  
  onMounted( async () => {
    await store.fetchItems(); //Se hace la peticion cuando el componente se monta. 
    items.value = store.items;
  });
  const deleteItem = async (id) => {
    await store.deleteItem(id);
    items.value = store.items;
  };

  watch(() => store.items, (newItems) => {
  items.value = newItems; // Reacciona a los cambios en `store.items`
});
  </script>

  <style scoped>
@import "@/styles/main.scss";

  </style>