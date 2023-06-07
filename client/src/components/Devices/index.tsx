import React from 'react';
import { DevisesItem } from './DevisesItem';
import style from './Devices.module.scss';
import lightBulb from '../../assets/icons/lightbulb.svg';
import blinds from '../../assets/icons/blinds.svg';
import water from '../../assets/icons/water.svg';
import music from '../../assets/icons/music.svg';
import television from '../../assets/icons/television.svg';
import wood from '../../assets/icons/wood.svg';

interface IItem {
  title: string;
  icon: any;
  serverEventHandler: string;
}

interface IArrayItem {
  items: IItem[];
}

export const Devices = () => {
  const items: IArrayItem = {
    items: [
      { title: 'Свет в комнате номер 1', icon: lightBulb, serverEventHandler: 'light' },
      { title: 'Аудиосистема в комнате 2', icon: music, serverEventHandler: 'music' },
      { title: 'Жалюзи в комнате номер 3', icon: blinds, serverEventHandler: 'blinds' },
      { title: 'Телевизор', icon: television, serverEventHandler: 'television' },
      { title: 'Датчик воды', icon: water, serverEventHandler: 'water' },
      { title: 'Датчик дыма', icon: wood, serverEventHandler: 'wood' },
    ],
  };

  return (
    <div className={style.device}>
      <div className={style.device_content}>
        <div className={style.item}>
          {
            items.items.map((item, index) => (<DevisesItem
                title={item.title}
                icon={item.icon}
                key={index}
                serverEventHandler={item.serverEventHandler}
              />),
            )
          }
        </div>
      </div>
    </div>
  );
};
