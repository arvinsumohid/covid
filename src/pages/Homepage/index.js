import React from 'react'
import { useSelector } from 'react-redux';

import Body from "../../components/Body"
import Holder from "../../components/Holder"
import Row2Column from "../../components/Row2Column"
import Heading from "../../components/Heading"

const Homepage = () => {
    const {summary} = useSelector(state => state.summary)
    const {error} = useSelector(state => state)

    function itemFunc(item, index) {
        
        return (<Holder key={index} className="large-6 space-bottom-3">
            <Heading text={item.heading} />
            {item.data.map((row, i) => {
                return rowFunc(row, i)
            })}
        </Holder>)
    }

    function rowFunc(row, index) {
        return <Row2Column key={index} title={row.title} value={row.value} />
    }

    const success = () => {
        return (
            <Body className="p-6">
                <Holder className="text-center holder large-10 space-top-5 p-6">
                    {summary.map((item, index) => {
                        return itemFunc(item, index)
                    })}
                </Holder>
            </Body>
        )
    }

    const process = () => {
        return (
            <Body>
                <Holder className="text-center holder large-10 space-top-5 p-6">
                    Loading
                </Holder>
            </Body>
        )
    }

    const errorFunc = () => {
        return (
            <Body>
                <Holder className="text-center holder large-10 space-top-5 p-6">
                    {error}
                </Holder>
            </Body>
        )
    }
    
    if( !summary )
        return process()
    else if ( error)
        return errorFunc()
    else
        return success()

}

export default Homepage