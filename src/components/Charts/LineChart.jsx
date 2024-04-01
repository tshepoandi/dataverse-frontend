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
        console.log(`${key}: ${value}`);
    });

    const state = {
        labels: data.map(item => item[xAxis]),
        datasets: [
          {
            label: 'Revenue',
            backgroundColor: [
              'Indigo',
              'Purple',
              'Yellow',
              'Teal',
              'Red',
              'Navy',
              'Brown',
            ],
            fill: false,
            lineTension: 0.5,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: data.map(item => item[yAxis])
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