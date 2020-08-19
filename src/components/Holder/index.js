import React, { Children } from 'react'

import './index.scss'

const Holder = ({className='', children, ...rest}) => {

    return (
        <div className={`container ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Holder