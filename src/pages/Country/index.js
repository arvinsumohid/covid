import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Body from "../../components/Body"
import Holder from "../../components/Holder"
import Row from "../../components/Row"
import LineGraph from "../../components/LineGraph"

import allActions from '../../store/actions';

const Country = (props) => {
    const dispatch = useDispatch()
    const {country} = props.match.params
    const {selectedCountry,loading, error} = useSelector(state => state)
    const [staticData, setStaticData] = useState({})
    const [graphData, setGraphData] = useState([])

    useEffect(() => {
        dispatch(allActions.country(`${country}`))

    }, [dispatch, country])

    useEffect(() => {
        if( selectedCountry ) {
            // setStaticData({
            //     country_name : {...selectedCountry[0]}.Country,

            // })
            console.log({...selectedCountry[0]}.Country)
        const month = ["January","February","March","April","May","June","July","August","September","October", "November", "December"]
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
    
            })
    
            setGraphData( graph )
    
        }
    }, [selectedCountry])



    const success = () => {
        return (
            <Body>
                <Holder className="text-center holder large-10 space-top-5">
                    {/* <Row>{selectedCountry && selectedCountry[0].Country}</Row> */}
                    { selectedCountry && <LineGraph data={graphData}/>}
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
