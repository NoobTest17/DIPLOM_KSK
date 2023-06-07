import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <p>&copy; 2023 Инфо коммуникационная система умного дома. Все права защищены.</p>
        <ul className={styles.footer_menu}>
          <li><Link to={routes.MAIN}>О нас</Link></li>
          <li><Link to={routes.DEVICES}>Девайсы</Link></li>
          <li><Link to={routes.CONTACTS}>Контакты</Link></li>
        </ul>
      </div>
    </footer>
  )
}
