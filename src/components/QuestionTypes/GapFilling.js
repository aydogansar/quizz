import React, { useState } from 'react'
import { gapping } from '../../utils/gapping'
import reactStringReplace from 'react-string-replace'
import Button from '../Button'
import cx from 'classnames'

const GapFilling = ({ sentences, question }) => {
    const initialValues = new Array(sentences.length).fill('')
    const initialStatus = new Array(sentences.length).fill(false)
    const [values, setValues] = useState(initialValues)
    const [status, setStatus] = useState(initialStatus)
    const [click, setClick] = useState(false)

    const words = []

    const handleChange = (e, i) => {
        const clone = [...values]
        clone[i] = e.target.value
        setValues(clone)
    }

    const handleCheck = () => {
        const clone = [...status]
        let isSubmitable = true
        values.forEach((value, i) => {
            if (value === '') isSubmitable = false
            else if (value.toLowerCase() === words[i].toLowerCase())
                clone[i] = true
        })
        if (isSubmitable) {
            setClick(true)
            setStatus(clone)
        }
    }

    return (
        <div className="gap-filling">
            <div className="gap-filling__question">{question}</div>
            <div className="gap-filling__sentences">
                <ol>
                    {sentences.map((item, i) => {
                        const word = gapping(item)
                        words.push(word)

                        return (
                            <li key={i}>
                                {reactStringReplace(
                                    item,
                                    `{{${word}}}`,
                                    (match, idx) => {
                                        return (
                                            <div
                                                key={i}
                                                className="gap-filling__gap"
                                            >
                                                <span
                                                    className={cx(
                                                        'gap-filling__gap--correct',
                                                        {
                                                            visible:
                                                                !status[i] &&
                                                                click,
                                                        }
                                                    )}
                                                >
                                                    {words[i]}
                                                </span>
                                                <input
                                                    type="text"
                                                    className={cx(
                                                        'gap-filling__gap--input',
                                                        {
                                                            wrong:
                                                                !status[i] &&
                                                                click,
                                                        },
                                                        {
                                                            success:
                                                                status[i] &&
                                                                click,
                                                        }
                                                    )}
                                                    onChange={(e) =>
                                                        handleChange(e, i)
                                                    }
                                                    value={values[i]}
                                                    disabled={click}
                                                />
                                            </div>
                                        )
                                    }
                                )}
                            </li>
                        )
                    })}
                </ol>
            </div>
            <div className="gap-filling__footer">
                <Button
                    text={'Bitir'}
                    variant="primary"
                    onClick={handleCheck}
                />
            </div>
        </div>
    )
}
export default GapFilling
