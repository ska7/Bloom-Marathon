import React from 'react'
import GoToPricing from './GoToPricing'
import instaFrame from '../img/instagram-frame.png'  

export default function Benefits() {
    return (
        <div className='benefits'>
            <div className='benefits-header'>
                <h1>После марафона ты :</h1>
            </div>
            <div className='benefits-list'>
                 <span className='benefit'><b> • Выработаешь высокую самооценку ✨</b></span>
                 <span className='benefit'><b> • Примешь и полюбишь свою внешность 🥰</b></span>
                 <span className='benefit'><b> • Наладишь отношения с родными и друзьями 👨‍👩‍👧‍👦</b></span>
                 <span className='benefit'><b> • Осознаешь чего ты хочешь от жизни 💡</b></span>
                 <span className='benefit'><b> • Станешь уравновешеной 😌</b></span>
                 <span className='benefit'><b> • Научишься медитировать 🧘</b></span>
            </div>
            {/* <img src={instaFrame} className='insta-frame'></img> */}
            <GoToPricing />
        </div>
    )
}
