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

function WindChart({ weatherData }) {
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
        text: 'Wind Speed (km/h)',
      },
    },
  };

  const labels = weatherData.slice(0, 8).map((obj) => unixToDatetime(obj.dt).datetime.toLocaleString('en-US'));
  const data = {
    labels,
    datasets: [
      {
        label: 'Wind Speed',
        data: weatherData.map((obj) => obj.wind.speed * 3.6),
        borderColor: 'rgb(0, 153, 0)',
        backgroundColor: 'rgba(153, 255, 102, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}
WindChart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weatherData: PropTypes.array,
};
WindChart.defaultProps = {
  weatherData: [],
};

export default WindChart;
