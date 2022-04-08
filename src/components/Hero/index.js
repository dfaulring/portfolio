import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
  }
`;

export default function Hero() {
  return (
    <StyledContainer>
      <h1>Hero</h1>
      <Tilt>
        <div>
          <img src='https://picsum.photos/400' alt='Me' width='400' height='400' />
        </div>
      </Tilt>
    </StyledContainer>
  );
}
