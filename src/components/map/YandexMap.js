import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import data from '../../data.json';

// инфу о точке пробрасывайте через newInfo
// например <YandexMap newInfo={geoMark}/>
// где geoMark = { coordinates: [53.902496, 27.561481],
//                 iconContent: 'место рождения',
//                 balloonContent: 'здесь родился великий писатель'}

class YandexMap extends Component {
  render() {
    return (
      <YMaps>
        <Map
          defaultState={{
            center:
              data[this.props.lang].autors[this.props.autorName].geoMark
                .coordinates,
            zoom: 11,
            controls: ['zoomControl', 'fullscreenControl']
          }}
          width="100%"
          height="500px"
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark
            modules={['geoObject.addon.balloon']}
            defaultGeometry={
              data[this.props.lang].autors[this.props.autorName].geoMark
                .coordinates
            }
            properties={{
              iconContent:
                data[this.props.lang].autors[this.props.autorName].geoMark
                  .iconContent,
              balloonContentBody:
                data[this.props.lang].autors[this.props.autorName].geoMark
                  .ballonContent
            }}
            options={{
              preset: 'islands#blackStretchyIcon'
            }}
          />
        </Map>
      </YMaps>
    );
  }
}

export default YandexMap;
