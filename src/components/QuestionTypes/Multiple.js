import React, { useState } from 'react'
import cx from 'classnames'

const initialValue = { index: -1 }

const Multiple = ({ question, choices, setAnswer }) => {
    const [selected, setSelected] = useState(initialValue)

    const alphabet = (n) => {
        if (n <= 25) return String.fromCharCode(65 + n)
        else return null
    }

    const handleClick = (item) => {
        setSelected(item)
        setAnswer(item)
    }

    return (
        <div className="multiple">
            <div className="multiple__question">{question}</div>
            <div className="multiple__choices">
                {choices.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className={cx('multiple__choices-item', {
                                active: selected.index === i,
                            })}
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
