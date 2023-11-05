
import { useEffect } from "react";
import { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

function OrdersChart() {
    const [chartWidth, setChartWidth] = useState(400)
    const handleWidth = () => {
        if (window.screen.width < 768) {
            //small device
            setChartWidth(350)
        }
        else if (window.screen.width < 1024) {
            //medium device
            setChartWidth(480)
        }
        else {
            setChartWidth(680)
        }
    }
    useEffect(() => {
        handleWidth()
    }, [])
    useEffect(() => {
        window.addEventListener('resize', handleWidth);
        return () => window.removeEventListener('resize', handleWidth);
    }, []);

    const data = [
        {
            name: 'Sun',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Mon',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Tues',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Wed',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Thu',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Fri',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Sat',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div>
            <LineChart
                width={chartWidth}
                height={350}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        </div>
    )
}

export default OrdersChart