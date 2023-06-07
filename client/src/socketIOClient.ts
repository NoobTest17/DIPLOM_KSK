import io from 'socket.io-client';

const serverUrl = 'http://localhost:3001';

// Получите токен из localStorage
const token = localStorage.getItem('token');

// Создайте экземпляр socket.io-client и передайте токен в опции аутентификации
export const socket = io(serverUrl, {
  auth: {
    token: token,
  },
});
