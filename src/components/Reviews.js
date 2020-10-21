import React from 'react'
import ReviewCard from './ReviewCard'
import morgen from '../img/morgen-pic.jpg'
import mitro from '../img/mitro-pic.jpg'

export default function Reviews() {
    const reviews = [morgen, mitro]
    return (
        <div className='reviews-section'>
            <div className='reviews-header'>
                <h1>Отзывы</h1>
            </div>
            <div className='reviews-list'>
                <ReviewCard reviews={reviews}/>
            </div>
        </div>
    )
}
