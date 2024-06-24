import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000', // Cambia esto por la URL de tu backend
  headers: {
    'Content-Type': 'application/json'
    // Aquí podrías agregar otros headers si los necesitas
  }
});

export default apiClient;
