import React from 'react'

import './index.scss';

const Row = ({className='', children, ...rest}) => {
    return (
        <div className={`row ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Row
