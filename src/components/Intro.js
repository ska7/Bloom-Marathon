import React from "react";
import Avatar from "../img/bloom-intro.png";



export default function Intro() {



  return (
      <React.Fragment>
        <div className='pop-up'>
          <img src={Avatar} alt="avatar"></img>
          <button className='change-life-button'>Я УЖЕ ГОТОВА ИЗМЕНИТЬ ЖИЗНЬ</button>
          <p className='or-text'>или</p>
          <button className='test-button'>СНАЧАЛА Я ХОЧУ ПРОЙТИ ТЕСТ</button>
          <p className='if-you-text'>Если ты:</p>
          <div className='types-section'>
            <span className='type'>Ссоришься с родителями</span>
            <span className='type'>Стесняешься зеркала</span>
            <span className='type'>Не чувствуешь себя свободно с друзьями</span>
            <span className='type'>Считаешь что все вокруг лучше тебя</span>
            <span className='type'>Боишься выделяться</span>
          </div>
          <div className='its-for-you-text'>
            <span><b>Тогда мой курс именно для ТЕБЯ!</b></span>
          </div>
        </div>
      </React.Fragment>
  )
}