import React from 'react';
import { PropTypes } from 'prop-types';

import TempChart from './tempChart';
import HumidityChart from './humidityChart';
import WindChart from './windChart';

function Tab({ weatherData }) {
  return (
    <div className="my-5">
      <ul className="nav nav-pills d-inline-flex mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-temp-tab" data-bs-toggle="pill" data-bs-target="#pills-temp" type="button" role="tab" aria-controls="pills-temp" aria-selected="true">Temprature</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-humidity-tab" data-bs-toggle="pill" data-bs-target="#pills-humidity" type="button" role="tab" aria-controls="pills-humidity" aria-selected="false">Humidity</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-wind-tab" data-bs-toggle="pill" data-bs-target="#pills-wind" type="button" role="tab" aria-controls="pills-wind" aria-selected="false">Wind</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-temp" role="tabpanel" aria-labelledby="pills-temp-tab">
          <TempChart weatherData={weatherData} />
        </div>
        <div className="tab-pane fade" id="pills-humidity" role="tabpanel" aria-labelledby="pills-humidity-tab">
          <HumidityChart weatherData={weatherData} />
        </div>
        <div className="tab-pane fade" id="pills-wind" role="tabpanel" aria-labelledby="pills-wind-tab">
          <WindChart weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}
Tab.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weatherData: PropTypes.array,
};
Tab.defaultProps = {
  weatherData: [],
};
export default Tab;
