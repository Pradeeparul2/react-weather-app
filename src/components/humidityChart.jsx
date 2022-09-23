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

function HumidityChart({ weatherData }) {
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
        text: 'Humidity (%)',
      },
    },
  };

  const labels = weatherData.slice(0, 8).map((obj) => unixToDatetime(obj.dt).datetime.toLocaleString('en-US'));
  const data = {
    labels,
    datasets: [
      {
        label: 'Humidity',
        data: weatherData.map((obj) => obj.main.humidity),
        borderColor: 'rgb(128,57,30)',
        backgroundColor: 'rgba(128,57,30, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}
HumidityChart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weatherData: PropTypes.array,
};
HumidityChart.defaultProps = {
  weatherData: [],
};

export default HumidityChart;
