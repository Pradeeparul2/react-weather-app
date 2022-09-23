import React, { useState } from 'react';
import './App.css';

import InputFrom from './components/inputForm';
import CityInfoTable from './components/cityInfoTable';
import WeatherCard from './components/weatherCard';
import Tab from './components/tab';

function App() {
  const [cityDetails, setCityDetails] = useState({});
  const [weatherData, setWeatherData] = useState([]);

  return (
    <div className="App">
      <h1 className="py-3">Weather App</h1>
      <h4 className="pb-3">A simple weather details app using open weather API and react js</h4>
      <div className="container">
        <div className="row">
          <InputFrom
            setCityDetails={setCityDetails}
            setWeatherData={setWeatherData}
          />
          {Object.keys(cityDetails).length > 0 && (
            <>
              <CityInfoTable
                cityDetails={cityDetails}
              />
              <div className="col-12">
                <WeatherCard weatherData={weatherData} />
              </div>
              <div className="col-12">
                <Tab weatherData={weatherData} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
