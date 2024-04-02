import { LineChart,Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const LineChartRechart = ({data,xAxis,yAxis}) => {
  return (
    <div>
        <LineChart width={800} height={800} data={data}>
            <Line type="monotone" dataKey={yAxis} stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey={xAxis} />
            <YAxis dataKey={yAxis} />
            <Tooltip/>
        </LineChart>
    </div>
  )
}

export default LineChartRechart