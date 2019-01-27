import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

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
            center: this.props.newInfo.coordinates,
            zoom: 11,
            controls: ['zoomControl', 'fullscreenControl']
          }}
          width='100%'
          height='500px'
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
        <Placemark
          modules={['geoObject.addon.balloon']}
          defaultGeometry={this.props.newInfo.coordinates}
          properties={{
            iconContent: this.props.newInfo.iconContent,
            balloonContentBody: this.props.newInfo.balloonContent
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
