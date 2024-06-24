import { defineStore } from 'pinia';
import apiClient from '../services/api'; /**
 * En el archivo donde se hacen todas éstas peticiones es donde vas a importar el archivo que se está conectando a tu DB.. 
* Es decir, en la tienda importamos el codigo que conecta con nuestro backend. 
 */

export const useItemStore = defineStore('itemStore', {
  state: () => ({
    items: []
  }),
  actions: {
    async fetchItems() {
      try {
        const response = await apiClient.get('/api/tarea');
        this.items = response.data;
        console.log(this.items)
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    async createItem(item) {
     /*
     NO HACE PETICION A apiClient para hacer peticion al back
     item.id = Date.now().toString();
      this.items.push(item);*/

      try { //Este codigo si PIDE AL BACKEND
        const response = await apiClient.post('/api/crearTarea', item);
        this.items.push(response.data); // Agrega el nuevo item a la lista localmente
      } catch (error) {
        console.error('Error creating item:', error);
      }
    },
    async editItem(updatedItem) {

        /*alert(JSON.stringify(updatedItem)) ESTE CODIGO NO HACE PETICION AL BACKEND
      const index = this.items.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        this.items[index] = updatedItem;
      }*/
     try {// ESTE CODIGO SI HACE PETICION AL BACK
      console.log(updatedItem)
        const response = await apiClient.put(`/editarTarea/${updatedItem.id}`, {
          titulo: updatedItem.titulo,
          descripcion: updatedItem.descripcion,
        });
        // Actualiza el item localmente con el item actualizado desde el servidor
        const index = this.items.findIndex(item => item.id === updatedItem.id);
        if (index !== -1) {
          this.items[index] = response.data;
        }
      } catch (error) {
        console.error('Error editing item:', error);
      }
    },
    async deleteItem(id) {
      console.log("ID DE TAREA A ELIMINAR "+id)
      /*
      ESTO NO HACE PETICION AL BACK
      this.items = this.items.filter(item => item.id !== id);*/
      try { //Esto si hace peticion al back
        const respuesta= await apiClient.delete(`/api/eliminarTarea/${id}`);
        console.log("RESPUETA DEL SERVIDOR: "+respuesta)
        this.items = this.items.filter(item => {
          console.log(item._id+"=="+id)
          return item._id != id
        });
        console.log("ACTUALIZADOOO "+this.items)
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }

    /**
     * CREAR FUNCION DE COMPLETAR TAREA. Ya la de traer los datos sirve
     * 
     */
  }
});
