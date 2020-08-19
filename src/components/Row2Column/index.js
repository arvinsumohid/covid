import React from 'react'

import Row from "../../components/Row"
import Column from "../../components/Column"

import './index.scss'

const Row2Column = (props) => {
    const { title, value } = props

    return (
        <Row className="align-center">
            <Column className="large-12">
                <h3>{title}</h3>
            </Column>
            <Column className="large-12">
                <p>{value}</p>
            </Column>
        </Row>
    )
}

export default Row2Column
