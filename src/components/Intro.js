import React from "react";
import Avatar from "../img/bloom-intro.png";
import frame from '../img/frame.png'
import { Link } from "react-scroll";
import { Link as Take} from 'react-router-dom';


export default function Intro() {

  return (
    <div className='intro'>
        <p className="marathon-logo">Авторский марафон любви к себе от девушки, которая прошла этот путь полностью 🕊</p>
        <div className='bloom-logo'>
          <img src={Avatar} alt="avatar"></img>
        </div>
          <button className='change-life-button'>
            <Link style={ {textDecoration: 'none', color: '#f0f0f0'} } className='icon' to="prices" activeClass="active" smooth={true} duration={1000} >
            Я УЖЕ ГОТОВА ИЗМЕНИТЬ ЖИЗНЬ
            </Link>
          </button>
          <p className='or-text'>или</p>
          <Take to="/test">
            <button className='test-button'>СНАЧАЛА Я ХОЧУ ПРОЙТИ ТЕСТ</button>
          </Take>  
          <div className='if-you-container'>
            <p>Если ты:</p>
            <div className='types-section'>
              <span className='type'>Понимаешь, что твоя самооценка нестабильна</span>
              <span className='type'>Не любишь смотреть в зеркало, избегаешь собственного отражения в нем</span>
              <span className='type'>Сложно сходишься с людьми, испытываешь затруднения в общении</span>
              <span className='type'>Чувствуешь себя одинокой</span>
              <span className='type'>Хочешь безопасно пройти путь к новой себе</span>
            </div>
          </div>
          <div className='its-for-you-text'>
            <span><b>Тогда мой курс именно для ТЕБЯ!</b></span>
            <img className='emoji-frame' src={frame}></img>
          </div>
      </div>
  )
}