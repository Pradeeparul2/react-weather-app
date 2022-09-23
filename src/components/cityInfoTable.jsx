import React from 'react';
import { PropTypes } from 'prop-types';

import unixToDatetime from '../utils';

function CityInfoTable({ cityDetails }) {
  return (
    <div className="my-5 px-5">
      <table className="table table-striped-columns table-bordered">
        <tbody>
          <tr>
            <td>City</td>
            <td><b>{cityDetails.name}</b></td>
            <td>Sunrise</td>
            <td><b>{unixToDatetime(cityDetails.sunrise).time}</b></td>
          </tr>
          <tr>
            <td>Country</td>
            <td><b>{cityDetails.country}</b></td>
            <td>Sunset</td>
            <td><b>{unixToDatetime(cityDetails.sunset).time}</b></td>
          </tr>
          <tr>
            <td>Population</td>
            <td><b>{cityDetails.population.toLocaleString('en-US')}</b></td>
            <td>Timezone</td>
            <td><b>{cityDetails.timezone }</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

CityInfoTable.propTypes = {
  cityDetails: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    population: PropTypes.number,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
    timezone: PropTypes.number,
  }).isRequired,
};
export default CityInfoTable;
