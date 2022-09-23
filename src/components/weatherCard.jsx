import React from 'react';
import { PropTypes } from 'prop-types';

import unixToDatetime from '../utils';

function WeatherCard({ weatherData }) {
  const imgUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="row row-cols-12">
      {weatherData.slice(0, 8).map(
        (obj) => obj.weather.map((sub) => (
          <div className="col" key={sub.id}>
            <div className="card m-1 border-light" style={{ width: '8rem' }}>
              <div className="card-header bg-transparent">
                {unixToDatetime(obj.dt).datetime.toLocaleString('en-US', { weekday: 'long' })}
                <br />
                {unixToDatetime(obj.dt).datetime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' })}
              </div>
              <img className="card-img-top" style={{ background: '#c8ecec' }} src={imgUrl(sub.icon)} alt="Card cap" />
              <div className="card-body">
                <p className="card-text" style={{ fontSize: '14px' }}>{sub.description}</p>
              </div>
            </div>
          </div>
        )),
      )}
    </div>

  );
}
WeatherCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weatherData: PropTypes.array,
};
WeatherCard.defaultProps = {
  weatherData: [],
};

export default WeatherCard;
