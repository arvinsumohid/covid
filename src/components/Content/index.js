import React from 'react'

import { useSelector } from 'react-redux';

const Content = () => {
    const summary = useSelector(state => state.summary)

    console.log(Object(summary))
    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}

export default Content