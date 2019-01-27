import React from 'react';
import './about.scss';

// data about project
const screenData = {
  ru: {
    title: 'Прикосниесь к прекрасному',
    str1: 'На нашем портале Вы можете познакомится с писателями Беларуси',
    str2: 'Классики или современники, стихи или проза',
    str3: 'Сделай выбор...'
  },
  by: {
    title: 'Дакраніцеся да прыгожага',
    str1: 'На нашым партале Вы можаце пазнаёміцца з пісьменнікамі Беларусі',
    str2: 'Класікі ці сучаснікі, вершы ці проза',
    str3: 'Зрабі выбар'
  },
  en: {
    title: 'Touch the beautiful',
    str1: 'On our portal you can get acquainted with the writers of Belarus',
    str2: 'Classics or contemporaries, poems or prose',
    str3: 'Make a choice'
  }
}

const InfoBlock = (props) => {
  return (
    <div className="about">
      <h1>{screenData[props.lang].title}</h1>
      <h2>{screenData[props.lang].str1}</h2>
      <h2>{screenData[props.lang].str2}</h2>
      <h2>{screenData[props.lang].str3}</h2>
    </div>    
  );
}

export default InfoBlock;
