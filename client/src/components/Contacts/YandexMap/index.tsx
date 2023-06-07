import React from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';

interface MapState {
  center: [number, number];
  zoom: number;
}

interface PlacemarkProperties {
  hintContent?: string;
  balloonContent?: string;
}

export const YandexMap = () => {
  const mapState: MapState = {
    center: [55.751574, 37.573856],
    zoom: 10,
  };

  const placemarkGeometry = [55.751574, 37.573856];
  const placemarkProperties: PlacemarkProperties = {
    hintContent: 'Москва',
    balloonContent: 'Столица России',
  };

  return (
    <YMaps>
      <div style={{ width: '100%', height: '400px' }}>
        <Map state={mapState} width={'100%'} height={'100%'}>
          <Placemark geometry={placemarkGeometry} properties={placemarkProperties} />
        </Map>
      </div>
    </YMaps>
  );
};
