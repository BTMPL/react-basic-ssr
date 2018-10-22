import styled from 'styled-components';

export default styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 150px;
  background: #e7e7e7;

  font-size: 1.3rem;

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }
`