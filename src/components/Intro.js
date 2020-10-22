import React from "react";
import Avatar from "../img/bloom-intro.png";
import frame from '../img/frame.png'
import Nav from "./Nav";


export default function Intro() {

  return (
    <div className='intro'>
         <Nav />
        <div className='bloom-logo'>
          <img src={Avatar} alt="avatar"></img>
        </div>
          <button className='change-life-button'>Я УЖЕ ГОТОВА ИЗМЕНИТЬ ЖИЗНЬ</button>
          <p className='or-text'>или</p>
          <button className='test-button'>СНАЧАЛА Я ХОЧУ ПРОЙТИ ТЕСТ</button>
          <div className='if-you-container'>
            <p>Если ты:</p>
            <div className='types-section'>
              <span className='type'>Ссоришься с родителями</span>
              <span className='type'>Стесняешься зеркала</span>
              <span className='type'>Не чувствуешь себя свободно с друзьями</span>
              <span className='type'>Считаешь что все вокруг лучше тебя</span>
              <span className='type'>Боишься выделяться</span>
            </div>
          </div>
          <div className='its-for-you-text'>
            <span><b>Тогда мой курс именно для ТЕБЯ!</b></span>
            <img className='emoji-frame' src={frame}></img>
          </div>
      </div>
  )
}