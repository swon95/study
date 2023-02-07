import React from "react";
import { Button } from "react-bootstrap";
// import styled from "styled-components";

const WeatherButton = ({ citise, setCity }) => {
  console.log("citise?", citise);

  return (
    <div>
      <Button variant="outline-primary">현재 위치</Button>

      {citise.map((item, index) => (
        <Button
          variant="outline-primary"
          key={index}
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;

// const BoxContainer = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
