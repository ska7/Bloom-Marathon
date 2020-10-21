import React from 'react'


export default function ReviewCard({ reviews }) {
    return (
        <div className='review-card-wrapper'>
            {reviews.map((review) => {
                return (
                    <div className='review-card'>
                        <img src={review}></img>
                    </div>
                )
            } )}
        </div>
    )
}
