import React from 'react'
import TestCard from './TestCard'

export default function Test() {
    const firstQuestion = 'У тебя хорошие взаимоотношения с близкими/родственниками/любимым?';
    const secondQuestion = 'Ты испытываешь радость, глядя на себя в зеркало?';
    const thirdQuestion = 'Ты легко добиваешься поставленных целей?';
    const fourthQuestion = 'Ты знаешь чего хочешь от жизни и куда тебе следует двигаться?';
    const fifthQuestion = 'Ты понимаешь, что тебе нужен "пинок" или знак свыше, чтобы начать трансформацию?'
    const questions = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion]
    return (
        <div className='test-section'>
            {questions.map(question => {
                return (
                    <TestCard question={question} />
                )
            } )}
        </div>
    )
}
