import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  background-color: black;
  border: 5px solid white;
  color: #61dafb;
  padding: 20px;
  border-radius: 8px;
  max-width: 1000px;
  margin: 40px auto;
  text-align: center;
`;

const Title = styled.h1`
  color: #ffffff;
`;

function Welcome() {
  return (
    <WelcomeContainer>
      <Title>Welcome to the App</Title>
    </WelcomeContainer>
  );
}

export default Welcome;
