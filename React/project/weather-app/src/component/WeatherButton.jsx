import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const WeatherButton = () => {
  return (
    <div>
      <Button variant="outline-primary">강릉</Button>
      <Button variant="outline-danger">고성</Button>
      <Button variant="outline-success">동해</Button>
      <Button variant="outline-warning">삼척</Button>
      <Button variant="outline-info">속초</Button>
      <Button variant="outline-secondary">양양</Button>
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
