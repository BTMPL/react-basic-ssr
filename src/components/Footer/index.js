import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '../Layout';

const Component = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 150px;
  background: #e7e7e7;

  font-size: 1.5rem;

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }
`

export default () => (
  <Component>
    <Row full>
      <Col>??</Col>
    </Row>
  </Component>
)