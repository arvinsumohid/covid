import React from 'react'
import { useSelector } from 'react-redux';

import Holder from "../../components/Holder"
import Row2Column from "../../components/Row2Column"
import Heading from "../../components/Heading"

const Homepage = () => {
    const {summary, Date} = useSelector(state => state.summary)

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

    if( !summary )
        return <div></div>
    else
        return (
            <Holder className="text-center holder large-10 space-top-5">
                {summary.map((item, index) => {
                    return itemFunc(item, index)
                })}
            </Holder>
        )

    return(<div></div>)
}

export default Homepage