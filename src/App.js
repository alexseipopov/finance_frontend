import './App.css';
import React, { useEffect, useState } from 'react';
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random()*1000)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function App() {
  // const [data_, setData] = useState({})
  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: 'https://twelve-data1.p.rapidapi.com/time_series',
  //     params: {symbol: 'AMZN', interval: '1day', outputsize: '30', format: 'json'},
  //     headers: {
  //       'X-RapidAPI-Key': 'c6765ef7bdmshd46d2e708c00bd0p19438cjsn9c995aed6ff3',
  //       'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
  //     }
  //   }).then((d) => {
  //     setData(d.data)
  //     console.log(d.data);
  //   })
  // }, [])
  
  return <Line options={options} data={data} />;
}


export default App;
