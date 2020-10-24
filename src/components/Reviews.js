import React from 'react'
import ReviewCard from './ReviewCard'
import zeroReview from '../img/review.png'
import firstReview from '../img/Reviews/firstReview.jpg'
import secondReview from '../img/Reviews/secondReview.jpg'
import fourthReview from '../img/Reviews/fourthReview.jpg'



export default function Reviews() {
    const reviews = [zeroReview, firstReview, secondReview, zeroReview, fourthReview ]
    return (
        <div id="reviews" className='reviews-section'>
            <div className='header'>
                <h1>Отзывы</h1>
            </div>
            <div className='reviews-list'>
                <ReviewCard reviews={reviews}/>
            </div>
        </div>
    )
}
