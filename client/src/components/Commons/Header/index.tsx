import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';

export const Header = () => {
  return (
    <header className={styles.header_wrap}>
      <div className={styles.header}>
        <div className={styles.logo}>SmartHome</div>
        <div className={styles.menu_wrap}>
          <div className={styles.menu}>
            <nav>
              <ul>
                <li><Link to={routes.MAIN}>Главная</Link></li>
                <li><Link to={routes.DEVICES}>Устройства</Link></li>
                <li><Link to={routes.SETTINGS}>Настройки</Link></li>
                <li><Link to={routes.CONTACTS}>Контакты</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
