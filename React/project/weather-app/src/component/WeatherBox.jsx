import React from 'react'
import styled from 'styled-components'

// weather 정보만 가져오기 위해 Destructuring
const WeatherBox = ({ weather }) => {
  // props.weather
  console.log("weather?", weather)
  return (
    <BorderBox>
      <div>{weather?.name}</div>
      <div>{weather?.main.temp} / {weather?.main.temp*1.8+32}</div>
      <div>{weather?.weather[0].description}</div>
    </BorderBox>
  )
}

export default WeatherBox

const BorderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  border: 3px solid white;
  border-radius: 30px;
  padding: 50px
`;
