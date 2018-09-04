import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
  display: inline-block;
  width: 45px;
  height: 45px;
  border: 2px solid #d3d3d3;
  border-radius: 50%;
  overflow: hidden;
`;

const BioElement = styled.div`
  font-size: 0.875rem;
`;

export default ({
  children
}) => (
  <BioElement>
    <Avatar src="https://github.com/btmpl.png" alt="Bartosz Szczeciński" />
    {children ? children : <p>
      Zarówno ilość developerów, jak i ofert pracy dla developerów React rośnie praktycznie nieprzerwanie od 2013 roku 1. Pojawiają się kolejne dziedziny w, w których React ma zastosowanie - React Native (Android, iOS, Windows Mobile), React Native for Windows, ReactVR czy Xbox (przy użyciu Universal Windows Platform).
    </p>}
  </BioElement>
)