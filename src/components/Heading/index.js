import React from 'react'

import './index.scss'

const Heading = ({classname="", text}) => {
    return (
        <div className={`heading ${classname}`}>
            <h2>{text}</h2>
        </div>
    )
}

export default Heading
