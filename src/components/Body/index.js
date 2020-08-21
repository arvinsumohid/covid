import React from 'react'

import Header from '../Header'

const Body = ({children}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Body
