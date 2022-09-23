import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { PropTypes } from 'prop-types';
import unixToDatetime from '../utils';

function TempChart({ weatherData }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Temprature (°C)',
      },
    },
  };

  const labels = weatherData.slice(0, 8).map((obj) => unixToDatetime(obj.dt).datetime.toLocaleString('en-US'));
  const data = {
    labels,
    datasets: [
      {
        label: 'Temp',
        data: weatherData.map((obj) => obj.main.temp),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Min-Temp',
        data: weatherData.map((obj) => obj.main.temp_min),
        borderColor: 'rgb(37, 150, 190)',
        backgroundColor: 'rgba(102, 153, 255, 0.5)',
      },
      {
        label: 'Max-Temp',
        data: weatherData.map((obj) => obj.main.temp_max),
        borderColor: 'rgb(102, 0, 51)',
        backgroundColor: 'rgb(223, 159, 159)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}
TempChart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weatherData: PropTypes.array,
};
TempChart.defaultProps = {
  weatherData: [],
};

export default TempChart;
