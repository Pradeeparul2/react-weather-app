import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';

function InputFrom({ setCityDetails, setWeatherData }) {
  const [errorEncountered, setErrorEncountered] = useState(false);
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherData = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=45b01a7f6a9893cc9370a6fd91f105fb&units=metric`)
      .then((response) => {
        setCityDetails(response.data.city);
        setWeatherData(response.data.list);
      })
      .catch(() => {
        setCityDetails({});
        setWeatherData({});
        setErrorEncountered(true);
      });
  };
  return (
    <div className="col-12 ">
      <form className="d-flex justify-content-center">
        <div className="col-auto px-3">
          <label className="visually-hidden" htmlFor="city">Password</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="Enter city name"
            onChange={handleChange}
            value={city}
            required
          />
          {errorEncountered && (
          <p className="text-danger ">
            <small>
              Please provide a valid city.
            </small>
          </p>

          )}
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary" onClick={() => getWeatherData()}>Get Details</button>
        </div>
      </form>
    </div>
  );
}
InputFrom.propTypes = {
  setCityDetails: PropTypes.func.isRequired,
  setWeatherData: PropTypes.func.isRequired,
};

export default InputFrom;
