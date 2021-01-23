import React, { useState } from 'react'
import cx from 'classnames'

const initialValue = { index: -1 }

const Multiple = ({
    question,
    choices,
    setAnswer,
    isLocked,
    correct,
    answer,
}) => {
    const [selected, setSelected] = useState(initialValue)

    const alphabet = (n) => {
        if (n <= 25) return String.fromCharCode(65 + n)
        else return null
    }

    const handleClick = (item) => {
        if (!isLocked) {
            setSelected(item)
            setTimeout(() => {
                setAnswer(item)
            }, 700)
        }
    }

    const handleCorrect = (item) => {
        if (answer && correct.toLowerCase() === item.toLowerCase()) {
            return true
        } else return false
    }
    const handleWrong = (item) => {
        if (
            answer &&
            correct.toLowerCase() !== answer.item.toLowerCase() &&
            answer.item.toLowerCase() === item.toLowerCase()
        )
            return true
        else return false
    }

    return (
        <div className="multiple">
            <div className="multiple__question">{question}</div>
            <div className="multiple__choices">
                {choices.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className={cx(
                                'multiple__choices-item',
                                {
                                    active: selected.index === i,
                                },
                                {
                                    correct: handleCorrect(item),
                                },
                                {
                                    wrong: handleWrong(item),
                                }
                            )}
                            onClick={() => handleClick({ item, index: i })}
                        >
                            <span>{alphabet(i)} -) </span>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Multiple
