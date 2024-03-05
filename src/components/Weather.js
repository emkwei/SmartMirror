import React from 'react';
import styled from 'styled-components';
import { Cloud } from '@styled-icons/bootstrap/Cloud'; // Using styled-icons for weather icons

const WeatherContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #fff;
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Temperature = styled.p`
  font-size: 2rem;
  margin: 10px 0;
`;

const WeatherDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const WeatherIcon = styled(Cloud)`
  color: #fff;
  width: 50px;
  height: 50px;
`;

function Weather() {
  const weatherData = {
    city: 'Chicago',
    temperature: '18°C',
    description: 'Cloudy',
  };

  return (
    <WeatherContainer>
      <div>
        <h2>Weather in {weatherData.city}</h2>
        <Temperature>{weatherData.temperature}</Temperature>
      </div>
      <div>
        <WeatherDescription>{weatherData.description}</WeatherDescription>
        <WeatherIcon />
      </div>
    </WeatherContainer>
  );
}

export default Weather;
