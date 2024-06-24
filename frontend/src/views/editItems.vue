<template>
    <div>
      <h1>Edit Item</h1>
      <form @submit.prevent="editItem">
        <div>
          <input v-model="titulo" placeholder="Item Name" />
        </div>
        <div>
          <textarea v-model="descripcion"></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  //import { useStore } from 'vuex'; // Usa Pinia si prefieres
  import { useItemStore } from '../stores/itemStore';
  import { useRouter, useRoute } from 'vue-router';
  
  const store = useItemStore();
  const router = useRouter();
  const route = useRoute();
  const titulo = ref('');
  const descripcion = ref('');
  const id = route.params.id;
  
  onMounted(() => {
    //se ejecuta cuando se llama a ESTE componente.
    console.log(id)
    const item = store.items.find(item => item._id === id);
    if (item) {
      console.log("se encontro")
      titulo.value = item.titulo;
      descripcion.value = item.descripcion;
    }
  });
  
  const editItem = () => {
    store.editItem({ id, titulo: titulo.value, descripcion: descripcion.value });
    router.push('/');
  };
  </script>
  