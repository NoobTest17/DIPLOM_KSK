import React from 'react';
import styles from './Contacts.module.scss';
import { YandexMap } from './YandexMap';

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts_wrap}>
        <div className={styles.title}>
          Контакты
        </div>
        <div className={styles.wrap_one}>

            <div className={styles.content_wrap}>
              <div className={styles.content_wrap}>
                <div className={styles.list_one}>
                  <ul>
                    <li>+7 999-999-99-99</li>
                    <li>+7 333-333-33-33</li>
                    <li>(111) 111-1111</li>
                    <li>password@yandex.ru</li>
                  </ul>
                </div>
                <div className={styles.list_two}>
                  <ul>
                    <li>Номер офиса</li>
                    <li>Номер технической поддержки</li>
                    <li>Номер офиса</li>
                    <li>Почтовый ящик</li>
                  </ul>
                </div>
              </div>
            </div>

          <div className={styles.map}>
            <YandexMap />
          </div>
        </div>
      </div>
    </div>
  );
};
