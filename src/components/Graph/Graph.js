
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

const Graph = ({chart_id, mode}) => {
    const [labels, setLabels] = useState([])
    const [costs, setCosts] = useState([])
    const [header, setHeader] = useState("")
    const [currency, setCurrency] = useState("")
    useEffect(() => {
      axios({
        method: 'GET',
        url: `/api/${chart_id}_${mode}`
      }).then(chart_data => {
        console.log(chart_data.data);
        setLabels(chart_data.data.labels)
        setCosts(chart_data.data.costs)
        setHeader(chart_data.data.symbol)
        setCurrency(chart_data.data.currency)
      })
    }, [mode])
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: header,
          },
        },
        // maintainAspectRatio: false
        aspectRatio: 1.5
      };
    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Jankownfbowpknfbopwknbuary', 'Februpkfnvowfnbwonfbwary', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July', 'Jankownfbowpknfbopwknbuary', 'Februpkfnvowfnbwonfbwary', 'March', 'April', 'May', 'June'];
    const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: currency,
            data: costs,//labels.map(() => Math.floor(Math.random()*1000)),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            pointRadius: 1,
            borderWidth: 2
          },
        ],
      };
      console.log(data)
    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}

export default Graph