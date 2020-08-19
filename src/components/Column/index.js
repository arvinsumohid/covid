import React from 'react'

import './index.scss';

const Column = ({className='', children, ...rest}) => {
    return (
        <div className={`column ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Column
