import styled from 'styled-components';

export default styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 150px;
  padding: 10px 0;
  background: #e7e7e7;
  word-break: break-word;

  font-size: 1.3rem;

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }

  p {
    font-size: inherit;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;

    h1 {
      font-size: 1.6rem;
    }
  }  
`