<template>
  <div id="app">
    <div class="image-container">

      

        <nav class="navbar">
          <div class="container">
            <router-link class="navbar-brand" to="/">
              <img src="./assets/logo.png"></router-link>
            <ul class="navbar-nav">
              <li class="nav-item"><router-link class="nav-link" to="/presupuesto">Presupuestos</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/tareas">Tareas</router-link></li>
            </ul>
          </div>
        </nav>
    </div>
    <router-view></router-view> <!-- Etiqueta especial proporcionada por vue-router. Renderiza dinamicamente un componente definido en la ruta actual. Es decir, cuando cambias de ruta (por ejemplo, de / a /create), Vue Router sustituye el contenido dentro de <router-view> con el componente asociado a esa ruta en router/index.js.-->
  </div>

</template>

<script>

export default {
  name: 'App',
  methods: {
    goBack() {
      this.$router.go(-1); // Vue Router irá a la página anterior en el historial de navegación
    }
  }
};
</script>

<style>
/* Opcional: tus estilos */

</style>
