import styled from 'styled-components';

const StyledContainer = styled.section`
  h1 {
    text-align: center;
  }
`;

export default function Hero() {
  return (
    <StyledContainer>
      <h1>Hero</h1>
    </StyledContainer>
  );
}
