import React, { useEffect, useState } from 'react';
import styles from './DevisesItem.module.scss';
import io from 'socket.io-client';
import { socket } from '../../../socketIOClient';

interface TProps {
  title: string;
  icon: any;
  serverEventHandler: string;
}

// const serverUrl = 'http://localhost:3001';
// const socket = io(serverUrl, {
//   auth: {
//     token: localStorage.getItem('token'),
//   },
// });

export const DevisesItem = ({ title, icon, serverEventHandler }: TProps) => {
  const [enable, setEnable] = useState<boolean>(false);
  const evReq = 'data/' + serverEventHandler;
  const evRes = 'data';

  useEffect(() => {
    // socket.connect();

    // Обработчик события от сервера
    socket.on(evReq, ({ state }) => {
      console.log('Получено сообщение от сервера из мк свет:', state);
      setEnable(state);
    });

    return () => {
      socket.close();
    };
  }, []);


  const clickButtonEnable = () => {
    setEnable(!enable);
    const data: any = {
      type: serverEventHandler,
      data: { state: enable },
    };
    console.log(data);

    socket.emit(evRes, { action: data } as any);
  };

  const colorButton = enable ? '#036203' : '#6c6c6c';

  return (
    <div className={styles.device_item}>
      <div className={styles.content}>
        <img src={icon} alt='' />
        <p>{title}</p>
        <button onClick={clickButtonEnable} style={{ background: colorButton }}>
          {enable ? 'Выключить' : 'Включить'}
        </button>
      </div>
    </div>
  );
};
