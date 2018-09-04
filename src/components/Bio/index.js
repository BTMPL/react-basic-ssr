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
    {children ? children : (
      <React.Fragment>
        <p>
          Hej - nazywam się <b>Bartosz Szczeciński</b> i od wielu lat jestem związany z&nbsp;technologiami webowymi, głównie w&nbsp;obszarze frontendu.
        </p>
        <p>
          Jestem zafascynowany <b>Reactem</b> i jego wpływem na tworzenie aplikacji w&nbsp;przeglądarkach. Poza codzienną pracą z tą technologią chętnie dzielę się swoją wiedzą z innymi na blogu, szkoleniach czy platformach on-line dla społeczności!
        </p>
      </React.Fragment>
    )}
  </BioElement>
)