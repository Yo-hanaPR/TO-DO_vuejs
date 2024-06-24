<template>
    <div>
      <h1>Crear nuevo artículo</h1>
      <form @submit.prevent="createItem">
        <div>
          <input v-model="titulo" placeholder="Tarea" />
        </div>
        <div>
          <textarea v-model="descripcion" placeholder="Descripcion de la tarea" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>


  </template>
  
  <script setup>
  
  import { ref } from 'vue';
  //import { useStore } from 'vuex'; // Usa Pinia si prefieres. Pinia es mas actualizado, mas rapido y mas fácil. 
  
  import { useItemStore } from '../stores/itemStore';
  import { useRouter } from 'vue-router';
  
  const store = useItemStore();
  const router = useRouter();
  const titulo = ref('');
  const descripcion = ref('');
  
  const createItem = () => {
    //store.commit('createItem', { name: name.value }); asì hace el commit en VUEX, pero como no estoy usando VUEX sino PINIA, se hace como sigue...

    store.createItem({ 
      titulo: titulo.value,
      descripcion: descripcion.value  
    });
    router.push('/');//esto es como una redireccion
  };
  </script>
  