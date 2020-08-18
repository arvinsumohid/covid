import React from 'react'
import { useSelector } from 'react-redux';

import Main from "../../components/Main"
import Content from "../../components/Content"

const Homepage = () => {
    const summary = useSelector(state => state.summary)
    console.log(Object(summary))
    return (
        <Main>

        </Main>
    )
}

export default Homepage