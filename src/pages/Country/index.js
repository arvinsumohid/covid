import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Body from "../../components/Body"
import Holder from "../../components/Holder"
import Row2Column from "../../components/Row2Column"
import Heading from "../../components/Heading"

import LineGraph from "../../components/LineGraph"

import allActions from '../../store/actions';

const Country = (props) => {
    const dispatch = useDispatch()
    const {country} = props.match.params
    const {selectedCountry,loading, error} = useSelector(state => state)
    const [staticData, setStaticData] = useState(null)
    const [graphData, setGraphData] = useState([])

    useEffect(() => {
        dispatch(allActions.country(`${country}`))

    }, [dispatch, country])

    useEffect(() => {
        if( selectedCountry ) {
        const month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT", "NOV", "DEC"]
            let graph = [
                            ['Month', 'Death', 'Recovered', 'Active']
                        ]
            Object.values(selectedCountry).forEach((statistic, index, selectedCountry) => {
                const cur_month = new Date(statistic.Date).getMonth()
                const prev_month = index > 0 ? new Date(selectedCountry[index-1].Date).getMonth() : null
                const cur_data = selectedCountry[index]
                const prev_data = selectedCountry[index-1]
                const countCountry = selectedCountry.length
                
    
                if(prev_month !== null && prev_month !== cur_month) {
                    graph.push([month[prev_month], prev_data.Deaths, prev_data.Recovered, prev_data.Active])
                } else if( (index+1) === countCountry) {
                    graph.push([month[cur_month], cur_data.Deaths, cur_data.Recovered, cur_data.Active])
                }

                if((index+1) === countCountry) {
                    const petsa = new Date(statistic.Date)
                    setStaticData({
                        heading : [
                                    statistic.Country,
                                    `${month[cur_month]} ${petsa.getDate()}, ${petsa.getFullYear()}`
                                ],
                        row : [
                            { title: 'Confirmed', value : statistic.Confirmed},
                            { title: 'Active', value : statistic.Active},
                            { title: 'Recovered', value : statistic.Recovered},
                            { title: 'Deaths', value : statistic.Deaths},
                        ]
                    })
                }
    
            })
    
            setGraphData( graph )
    
        }
    }, [selectedCountry])

    function headingFunc() {
        if( staticData ) {
            return (
                    staticData.heading.map((title, index) => {
                        return <Heading key={index} text={title} />
                    })
                )
        }
    }

    function rowFunc() {
        if( staticData ) {
            return (
                staticData.row.map((item, index) => {
                    return <Row2Column key={index} title={item.title} value={item.value} />
                })
            )
        }
    }

    const success = () => {
        return (
            <Body>
                <Holder className="text-center holder large-10 space-top-5">
                    <Holder className="large-10 space-bottom-3">
                        {headingFunc()}
                        {rowFunc()}
                        { selectedCountry && <LineGraph data={graphData}/> }
                    </Holder>
                </Holder>
            </Body>
        )
    }

    const process = () => {
        return (
            <Body>
                <Holder className="text-center holder large-10 space-top-5">
                    Loading
                </Holder>
            </Body>
        )
    }

    const errorFunc = () => {
        return (
            <Body>
                <Holder className="text-center holder large-10 space-top-5">
                    {error}
                </Holder>
            </Body>
        )
    }
    
    if( loading )
        return process()
    else if ( error)
        return errorFunc()
    else
        return success()
}

export default Country
