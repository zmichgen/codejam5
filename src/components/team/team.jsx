import React from 'react';
import "./team.scss";

const devTeam = {
    ru: {
      title: "Команда разработчиков",
      mdgh: "Дарья Мамчиц",
      gaddyya: "Роман Дань",
      zmichgen: "Михаил Зырянов",
      zerovers: "Дмитрий Кравцов",
      renardby: "Андрей Полещук"
    },
    by: {
      title: "Каманда распрацоўнікаў",
      mdgh: "Дар'я Мамчыц",
      gaddyya: "Раман Дань",
      zmichgen: "Miхаiл Зыранау",
      zerovers: "Дзмiтрый Краўцоў",
      renardby: "Андрэй Паляшчук"
    },
    en: {
      title: "Development team",
      mdgh: "Darya Mamchyts",
      gaddyya: "Roman Dan",
      zmichgen: "Mikhail Zyranau",
      zerovers: "Dmitry Kravtsov",
      renardby: "Andrei Poleschuk"
    }
  };

const Team = props => {
    return (
    <section>
      <div class="developers-title">
        <h2>{devTeam[props.lang].title}</h2>
      </div>
      <div class="developers" id='team'>
        <div class='developers-teammate'>
          <div class="teammate-contact noselect">
            <div class="teammate-foto"></div>
            <span>{devTeam[props.lang].mdgh}</span>
            <span>Junior Javascript Developer</span>
            <div>
              <a href="https://github.com/mdgh/" target="_blank"><i class="linked-icon">&#xe802;</i></a>
              <a href="skype:dasha.mamchits?chat" target="_blank"><i class="linked-icon">&#xe804;</i></a>
              <a href="https://t.me/darya_mamchyts" target="_blank"><i class="linked-icon">&#xf1d8;</i></a>
            </div>
          </div>
        </div>
        <div class='developers-teammate'>
          <div class="teammate-contact noselect">
            <div class="teammate-foto"></div>
            <span>{devTeam[props.lang].gaddyya}</span>
            <span>Junior Javascript Developer</span>
            <div>
              <a href="https://github.com/gaddyya/" target="_blank"><i class="linked-icon">&#xe802;</i></a>
              <a href="skype:gaddyya?chat" target="_blank"><i class="linked-icon">&#xe804;</i></a>
              <a href="https://t.me/gaddyya" target="_blank"><i class="linked-icon">&#xf1d8;</i></a>
            </div>
          </div>
        </div>
        <div class='developers-teammate'>
          <div class="teammate-contact noselect">
            <div class="teammate-foto"></div>
            <span>{devTeam[props.lang].zmichgen}</span>
            <span>Junior Javascript Developer</span>
            <div>
              <a href="https://github.com/zmichgen/" target="_blank"><i class="linked-icon">&#xe802;</i></a>
              <a href="skype:zmichgen?chat" target="_blank"><i class="linked-icon">&#xe804;</i></a>
              <a href="https://t.me/zmichgen" target="_blank"><i class="linked-icon">&#xf1d8;</i></a>
            </div>
          </div>
        </div>
        <div class='developers-teammate'>
          <div class="teammate-contact noselect">
            <div class="teammate-foto"></div>
            <span>{devTeam[props.lang].zerovers}</span>
            <span>Junior Javascript Developer</span>
            <div>
              <a href="https://github.com/zerovers/" target="_blank"><i class="linked-icon">&#xe802;</i></a>
              <a href="skype:Zeromon1111?chat" target="_blank"><i class="linked-icon">&#xe804;</i></a>
              <a href="https://t.me/Zerover" target="_blank"><i class="linked-icon">&#xf1d8;</i></a>
            </div>
          </div>
        </div>
        <div class='developers-teammate'>
          <div class="teammate-contact noselect">
            <div class="teammate-foto"></div>
            <span>{devTeam[props.lang].renardby} </span>
            <span>Junior Javascript Developer</span>
            <div>
              <a href="https://github.com/RenardBY/" target="_blank"><i class="linked-icon">&#xe802;</i></a>
              <a href="skype:renardby?chat" target="_blank"><i class="linked-icon">&#xe804;</i></a>
              <a href="https://t.me/foxy_66" target="_blank"><i class="linked-icon">&#xf1d8;</i></a>
            </div>
          </div>
        </div>
       </div>
       <div class="developers-title">
       </div>
      </section>
  );
};

export default Team;
