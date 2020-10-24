import React from 'react'

export default function TestCard({ question }) {
    return (
        <div className="test-card">
        <h1 className='test-question'>{question}</h1>
            <div className='test-buttons'>
                <button className='test-yes-button'>Да</button>
                <button className='test-no-button'>Нет</button>
            </div>
        </div>
    )
}
