import React from 'react'
import ReviewCard from './ReviewCard'
import review from '../img/review.png'

export default function Reviews() {
    const reviews = [review, review]
    return (
        <div className='reviews-section'>
            <div className='header'>
                <h1>Отзывы</h1>
            </div>
            <div className='reviews-list'>
                <ReviewCard reviews={reviews}/>
            </div>
        </div>
    )
}
