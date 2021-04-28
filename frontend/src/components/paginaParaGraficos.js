import React, { Component } from 'react'
import { render } from "react-dom";
import { Chart } from "react-google-charts";

export default class paginaParaGraficos extends Component {
    render() {
        return (
            <div className="div">
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Year', 'Sales', 'Expenses'],
                        ['2013', 1000, 400],
                        ['2014', 1170, 460],
                        ['2015', 660, 1120],
                        ['2016', 1030, 540],
                    ]}
                    options={{
                        isStacked: true,
                        height: 300,
                        legend: { position: 'top', maxLines: 3 },
                        vAxis: { minValue: 0 },
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />


                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Work', 11],
                        ['Eat', 2],
                        ['Commute', 2],
                        ['Watch TV', 2],
                        ['Sleep', 7],
                    ]}
                    options={{
                        title: 'My Daily Activities',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />

                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['x', 'dogs'],
                        [0, 0],
                        [1, 10],
                        [2, 23],
                        [3, 17],
                        [4, 18],
                        [5, 9],
                        [6, 11],
                        [7, 27],
                        [8, 33],
                        [9, 40],
                        [10, 32],
                        [11, 35],
                    ]}
                    options={{
                        hAxis: {
                            title: 'Time',
                        },
                        vAxis: {
                            title: 'Popularity',
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>



        );
    }
}
