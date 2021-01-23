import React, { useEffect, useState, Fragment } from 'react'
import Button from './Button'
import { Multiple, GapFilling, Pairing } from './QuestionTypes'
import { questions } from '../questions'

const questionTypes = {
    multiple: Multiple,
    'gap-filling': GapFilling,
    pairing: Pairing,
}

const QuestionContainer = () => {
    const [quizz, setQuizz] = useState(questions)
    const [answer, setAnswer] = useState(null)
    // const [active, setActive] = useState(0)
    const [isLocked, setLocked] = useState(false)

    // const lastItem = quizz.length - 1
    // const isLastItem = active === lastItem

    // const handleNext = () => {
    //     if (answer) {
    //         const clone = [...quizz]
    //         clone[active].answer = answer
    //         setQuizz(clone)

    //         if (active < lastItem) {
    //             setTimeout(() => {
    //                 setActive(active + 1)
    //             }, 1000)
    //         }
    //     }
    //     setAnswer(null)
    //     setLocked(true)
    // }

    useEffect(() => {
        if (answer) {
            setLocked(true)
        }
    }, [answer])

    return (
        <div className="question-container">
            <div className="question-container__content">
                {quizz.map((q, i) => {
                    const Question = questionTypes[q.type]
                    return (
                        <Question
                            key={i}
                            {...q}
                            setAnswer={setAnswer}
                            isLocked={isLocked}
                            answer={answer}
                        />
                    )
                })}
            </div>
            {/* <div className="question-container__footer">
                <Button
                    text={isLastItem ? 'Bitir' : 'İleri'}
                    variant="primary"
                    disabled={!answer}
                    onClick={handleNext}
                />
            </div> */}
        </div>
    )
}
export default QuestionContainer
