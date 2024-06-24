<template>
    <div class="container">
        <h1>Cálculo de presupuesto por hora de trabajo</h1>

        <div class="form-grid">
            <h1 for="nombre">Costo por hora:</h1>
            <input type="text" id="precio_hora" v-model="costoPorHora" name="precio_hora" placeholder="En dólares">
            </div>

        <!-- Botón para agregar nueva tarea -->
    <button @click="agregarTarea" class="btn-agregar">Agregar Tarea</button>

    <!-- Formulario dinámico para agregar tareas -->
    <div class="form-grid tarea tareaContainer" v-for="(tarea, index) in tareas" :key="index">
        <div>
            <label for="nombre">Nombre de la tarea:</label>
            <input type="text" v-model="tarea.nombre" placeholder="Nombre de la tarea">
        </div>
        <div>
            <label for="horas">Número de horas:</label>
            <input type="number" v-model="tarea.horas" v-on:change="calcularPrecioPorHora(index)" placeholder="Número de horas">
            
        </div>
        <div>
            <button @click="eliminarTarea(index)" class="btn-eliminar">Eliminar</button>
        </div>
        <!-- Botón para eliminar esta tarea específica -->
    </div>
    <div style="display: flex; align-items: center; justify-content: center;">
        <h2>Costo total del presupuesto: </h2>
        <span v-text="total"></span> <span>$</span>
    </div>
    </div>
</template>

<script>

export default {
  name: 'servicesComponent',
  data(){
    return {
        costoPorHora:'',
        tareas:[],
        total:''
    }
  },
  methods: {
    agregarTarea() {
      this.tareas.push({ nombre: '', horas: '', costoTotal: undefined });
    },
    eliminarTarea(index) {
        const costoEliminado = this.tareas[index].costoTotal;
      this.tareas.splice(index, 1);
      this.total -= costoEliminado;
    },
    calcularPrecioPorHora(index){
        const costoPorHoraNum = parseFloat(this.costoPorHora);
        const horasNum = parseFloat(this.tareas[index].horas);
        if (!isNaN(costoPorHoraNum) && !isNaN(horasNum)) {
            this.tareas[index].costoTotal = costoPorHoraNum * horasNum;
            console.log(this.tareas[index].costoTotal);
      } else {
        this.tareas[index].costoTotal = undefined;
      }
      this.sumar();
    },
    sumar(){
        this.total = this.tareas.reduce((accumulator, tarea) => accumulator + tarea.costoTotal, 0);
    },
    goBack() {
      this.$router.go(-1); // Vue Router irá a la página anterior en el historial de navegación
    }
  }
};

</script>

<style scoped>
    /* Estilos generales */
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    span{
        font-size: 33px;
        font-weight: bold;
        margin-left:15px;
    }
    /* Contenedor principal del formulario */
    .form-container {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 80%;
      max-width: 600px;
    }
    /** TAREA */

    .tareaContainer{
        display:flex;
        align-items: center;
        justify-content: center;
    }
    /* Grilla para etiquetas y campos */
    .form-grid {
      display: grid;
      grid-template-columns: 1.5fr 1.5fr 1.5fr; /* Columnas: 1 parte para etiqueta, 2 partes para campo */
      gap: 0px; /* Espacio entre filas y columnas */
    }

    /* Estilos para etiquetas */
    label {
      font-weight: bold;
    }

    /* Estilos para campos de entrada */
    input, textarea {
      width: 50%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      box-sizing: border-box; /* Ajusta el tamaño del padding y borde al ancho total */
    }

    /* Estilos para botones */
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }

    button:hover {
      background-color: #0056b3;
    }

    </style>