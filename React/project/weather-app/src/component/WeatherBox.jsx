import React from 'react'
import styled from 'styled-components'

const WeatherBox = () => {
  return (
    <BorderBox>
      무야홍
    </BorderBox>
  )
}

export default WeatherBox

const BorderBox = styled.div`
  border: 3px solid white;
  border-radius: 30px;
  padding: 50px
`;
