import React from 'react'
import cx from 'classnames'

const Button = ({ text, variant, ...rest }) => {
    return (
        <button
            className={cx('btn', { [`btn-${variant}`]: variant })}
            {...rest}
        >
            {text}
        </button>
    )
}
export default Button
