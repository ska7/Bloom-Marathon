import React from 'react'
import firstPlan from '../img/888plan.png'
import secondPlan from '../img/1990plan.png'
import thirdPlan from '../img/3990plan.png'
import fourthPlan from '../img/10000plan.png'


export default function Prices() {
    return (
        <div className='prices-section'>
            <div className='header'>
                <h1>Тарифы</h1>
            </div>
            <div className='prices-wrapper'>
                <div className='price-card'>
                    <img src={firstPlan}></img>
                    <button>Хочу!</button>
                </div>
                <div className='price-card'>
                    <img src={secondPlan}></img>
                    <button>Хочу!</button>
                </div>
                <div className='price-card cardthree'>
                    <img src={thirdPlan}></img>
                    <button>Хочу!</button>
                </div>
                <div className='price-card cardfour'>
                    <img src={fourthPlan}></img>
                    <button>Хочу!</button>
                </div>
            </div>
            
        </div>
    )
}
