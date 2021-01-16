import React, { useState } from 'react'
import Button from './Button'
import { Multiple } from './QuestionTypes'
import { questions } from '../questions'
import cx from 'classnames'

const questionTypes = {
    multiple: Multiple,
}

const QuestionContainer = () => {
    const [quizz, setQuizz] = useState(questions)
    const [answer, setAnswer] = useState(null)
    const [active, setActive] = useState(0)

    const lastItem = quizz.length - 1
    const isLastItem = active === lastItem

    const handleNext = () => {
        if (answer) {
            const clone = [...quizz]
            clone[active].answer = answer
            setQuizz(clone)

            if (active < lastItem) {
                setTimeout(() => {
                    setActive(active + 1)
                }, 1000)
            }
        }
        setAnswer(null)
    }

    return (
        <div className="question-container">
            <div className="question-container__content">
                {quizz.map((q, i) => {
                    const Question = questionTypes[q.type]
                    return (
                        <>
                            {active === i && (
                                <Question {...q} setAnswer={setAnswer} />
                            )}
                        </>
                    )
                })}
            </div>
            <div className="question-container__footer">
                <Button
                    text={isLastItem ? 'Bitir' : 'İleri'}
                    variant="primary"
                    disabled={!answer}
                    onClick={handleNext}
                />
            </div>
        </div>
    )
}
export default QuestionContainer
