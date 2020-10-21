import React from 'react'
import test from '../img/icons/test.png'
import calendar from '../img/icons/calendar.png'
import question from '../img/icons/question.png'
import price from '../img/icons/price.png'

export default function Nav() {
    return (
        <div className="nav-bar">
            <div className='icon-wrapper'>
                <div className='icon'>
                    <img alt='test' src={test}></img>
                </div>
                <p>Тест</p>    
            </div>
            <div className='icon-wrapper'>
                <div className='icon'>
                    <img alt='calendar' src={calendar}></img>
                </div>
                <p>Программа</p>    
            </div>
            <div className='icon-wrapper'>
                <div className='icon'>
                    <img alt='price' src={price}></img>
                </div>
                <p>Тарифы</p>    
            </div>
            <div className='icon-wrapper'>
                <div className='icon'>
                    <img alt='question' src={question}></img>
                </div>
                <p>Вопросы</p>
            </div>
        </div>
    )
}
