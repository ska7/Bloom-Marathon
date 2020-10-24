import React from 'react'
import test from '../img/icons/test.png'
import calendar from '../img/icons/calendar.png'
import question from '../img/icons/question.png'
import price from '../img/icons/price.png'
import { Link } from "react-scroll";
import { Link as Take } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav-bar">
            <div className='icon-wrapper'>
                <Take to="/test">
                <div className="icon">
                    <img alt='test' src={test}></img>
                </div>
                </Take>
                <p>Тест</p> 
            </div>
            <div className='icon-wrapper'>
                <Link className='icon' to="program" activeClass="active" smooth={true} duration={1000} >
                    <img alt='calendar' src={calendar}></img>
                </Link>
                <p>Программа</p>    
            </div>
            <div className='icon-wrapper'>
                <Link className='icon' to="prices" activeClass="active" smooth={true} duration={1000} >
                    <img alt='price' src={price}></img>
                </Link>  
                <p>Тарифы</p>    
            </div>
            <div className='icon-wrapper'>
                <Link className='icon' to="reviews" activeClass="active" smooth={true} duration={1000} >
                    <img alt='question' src={question}></img>
                </Link>
                <p>Отзывы</p>
            </div>
        </div>
    )
}
