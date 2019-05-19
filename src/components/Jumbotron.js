import React from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import jumImage from '../assets/mgsv.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${jumImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 480px;
    position: relative;
    rotate: left;
    z-index: -2;
  }

  .overlay {
    background-color: #0097e6;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome to my Legacy</h1>
        <p>Get to know me from here</p>
      </Container>
    </Jumbo>
  </Styles>
)
