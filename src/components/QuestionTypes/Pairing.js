import React, { useState, useEffect } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { shuffle } from '../../utils/shuffle'
import Button from '../Button'
import cx from 'classnames'

const Pairing = ({ question, list1, list2 }) => {
    const [items, setItems] = useState([])
    const [sortedList, setSortedList] = useState(
        new Array(list2.length).fill(null)
    )

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex))
    }

    const SortableItem = SortableElement(({ value, idx }) => {
        return (
            <span
                className={cx(
                    'sorting-element',
                    { correct: sortedList[idx] },
                    { wrong: sortedList[idx] === false }
                )}
                style={{
                    height:
                        document.querySelectorAll('.not-sortable span')[idx]
                            .clientHeight + 1.5,
                }}
            >
                {value}
            </span>
        )
    })

    const SortableList = SortableContainer(({ items }) => {
        return (
            <div className="pairing__list sortable">
                {items.map((value, index) => (
                    <SortableItem
                        key={`item-${value}`}
                        index={index}
                        value={value}
                        idx={index}
                        disabled={sortedList.every((item) => item !== null)}
                    />
                ))}
            </div>
        )
    })
    const handleCheck = () => {
        const clone = [...sortedList]
        list2.forEach((item, i) => {
            if (item === items[i]) clone[i] = true
            else clone[i] = false
        })
        setSortedList(clone)
    }

    useEffect(() => {
        const shuffledList = shuffle([...list2])
        setItems(shuffledList)
    }, [])

    return (
        <div className="pairing">
            <div className="pairing__question">{question}</div>
            <div className="pairing__wrapper">
                <div className="pairing__list not-sortable">
                    {list1.map((item, i) => {
                        return <span key={i}>{item}</span>
                    })}
                </div>
                <SortableList
                    items={items}
                    onSortEnd={onSortEnd}
                    axis="y"
                    lockAxis="y"
                />
            </div>
            <div className="pairing__footer">
                <Button
                    text={'Bitir'}
                    variant="primary"
                    onClick={handleCheck}
                />
            </div>
        </div>
    )
}
export default Pairing
