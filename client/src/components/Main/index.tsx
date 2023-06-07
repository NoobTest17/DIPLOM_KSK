import React from 'react';
import styles from './MainPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';


export const Main = () => {
  const navigate = useNavigate();

  const clickButton = () => {
    navigate(routes.CONTACTS);
  };

  return (
    <div className={styles.MainPage}>
      <div className={styles.MainPage_content}>
        <div className={styles.content_title}>
          <h2>Добро пожаловать в нашу систему умного дома</h2>
          <p>Мы предоставляем современные технологические решения для управления вашим домом в удобном и безопасном
            режиме.</p>
          <button onClick={clickButton}>Узнать больше</button>
        </div>
        <div className={styles.content_services}>
          <h2>Наши услуги</h2>
          <div className={styles.list}>
            <ul>
              <li>- Удаленное управление устройствами дома</li>
              <li>- Мониторинг систем безопасности</li>
              <li>- Автоматизация освещения и климата</li>
              <li>- Умные энергосистемы</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
