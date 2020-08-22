import React from 'react'
import Chart from "react-google-charts";

const LineGraph = ({data, options}) => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
                hAxis: {
                title: 'Month',
                },
                vAxis: {
                title: 'Numbers',
                },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    )
}


// [
//     ['Month', 'Death', 'Recovered'],
//     [0, 0, 10],
//     [1, 10, 6],
//     [2, 23, 46],
//     [3, 17, 34],
//     [4, 18, 7],
//     [5, 9, 24],
//     [6, 11, 18],
//     [7, 27, 6],
//     [8, 33, 34],
//     [9, 40, 3],
//     [10, 32, 1],
//     [11, 35, 0],
// ]

export default LineGraph
