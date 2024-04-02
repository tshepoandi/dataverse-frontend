import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)





const LineChart = ({ data,xAxis,yAxis }) => {
    
    const keys = Object.keys(data[0]).map((key) => {
        return key
    }) 
    keys.forEach(key => {
        const value = data[0][key];
    });
    console.log(xAxis)
    const state = {
        labels: data.map(item => item[xAxis]),
        datasets: [
          {
            label: xAxis,
            backgroundColor: [
              'Indigo',
            ],
            fill: false,
            lineTension: 0.7,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: data.map(item => item[yAxis])
          },
          {
            label: 'Blue',
            backgroundColor: [
              'green',
              
            ],
            fill: false,
            lineTension: 0.5,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [10,100,150,1000,]
          },
        ],
      }
    return (
        <div>
          
            <Line
                data={state}
                options={{
                    title: {
                    display: true,
                    text: 'Class Strength',
                    fontSize: 20,
                    },
                    legend: {
                    display: true,
                    position: 'right',
                    },
                }}
                />
        </div>
    )
  }
  
  

export default LineChart