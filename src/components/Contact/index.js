import styled from 'styled-components';
import ContactForm from './ContactForm';

const StyledSection = styled.section``;

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 5.6rem;
`;

export default function Contact() {
  return (
    <StyledSection>
      <StyledTitle>Contact</StyledTitle>
      <ContactForm />
    </StyledSection>
  );
}
