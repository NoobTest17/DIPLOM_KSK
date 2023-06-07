import React, { useState } from 'react'; // Импорт React и функции useState из пакета 'react'
import { useLocation, useNavigate } from 'react-router-dom'; // Импорт функции useNavigate из пакета 'react-router-dom'
import axios from 'axios'; // Импорт axios для выполнения HTTP-запросов
import styles from './LoginForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState(''); // Создание состояния для хранения значения username
  const [password, setPassword] = useState(''); // Создание состояния для хранения значения password
  const [error, setError] = useState(''); // Создание состояния для хранения значения error
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Получение функции для навигации между страницами

  const location = useLocation();
  const currentPath = location.pathname;

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value); // Обновление значения username при изменении поля ввода
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value); // Обновление значения password при изменении поля ввода
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращение перезагрузки страницы при отправке формы

    try {
      const response = await axios.post('http://localhost:3001/api/login', { username, password }); // Выполнение POST-запроса на сервер для авторизации
      console.log('окей');
      const { token } = response.data; // Извлечение токена из ответа сервера
      console.log(response);
      // Сохранение токена в localStorage или в контексте состояния, если требуется
      localStorage.setItem('token', token);
      navigate('/'); // Переход на главную страницу после успешной авторизации
      window.location.reload();
    } catch (error) {
      setError('Неправильный логин или пароль'); // Установка сообщения об ошибке при неверном имени пользователя или пароле
      console.error('Login error:', error); // Вывод ошибки в консоль
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.loginForm}>
        <h2>Авторизация пользователя</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor='username'>Пользователь</label>
            <input
              type='text'
              placeholder='Пользователь'
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className={styles.input}>
            <div className={styles.passwordInput}>
              <label htmlFor='password'>Пароль</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='Пароль'
                onChange={handlePasswordChange}
              />
              <button type='button' onClick={togglePasswordVisibility} className={styles.toggleButton}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className={styles.icon} />
              </button>
            </div>
          </div>
          <div className={styles.button}>
            <button type='submit'>Авторизация</button>
          </div>
          <p className={styles.error}>{error}</p>
        </form>
      </div>
    </div>
  );
};
