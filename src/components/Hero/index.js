import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  background: inherit;
  position: relative;

  h2 {
    text-align: center;
    font-size: 2rem;
    text-align: center;
    padding: 0 1.6rem;
  }

  h1 {
    font-size: 3.4rem;
    text-align: center;
    max-width: 43rem;
    margin-top: 0.8rem;
    padding: 0 1.6rem;
  }

  @media (min-width: 540px) {
    h2 {
      font-size: 2.4rem;
    }

    h1 {
      font-size: 4.8rem;
      max-width: 60rem;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.8rem;
    }

    h1 {
      font-size: 6.4rem;
      max-width: 70rem;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 3.2rem;
    }

    h1 {
      font-size: 8rem;
      max-width: 83rem;
    }
  }
`;

export default function Hero() {
  return (
    <StyledContainer>
      <h2>Hi! My name is Dominic Faulring</h2>
      <h1>I’m a full-stack developer living in Seattle, WA</h1>
    </StyledContainer>
  );
}
