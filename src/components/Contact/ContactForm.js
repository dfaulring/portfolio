import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
`;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 1.6rem;
  }

  label {
    margin-bottom: 0.4rem;
  }

  input {
    height: 4.8rem;
    padding-left: 8px;
    border: 1px solid #0d0d0d;
    outline: none;
    border-radius: 0.8rem;
  }

  textarea {
    resize: none;
    height: 160px;
    border: 1px solid #0d0d0d;
    outline: none;
    border-radius: 0.8rem;
    padding: 0.8rem;
  }

  .error-message {
    color: red;
  }
`;

const StyledButton = styled.button`
  height: 4.8rem;
  outline: none;
  border: none;
  border-radius: 0.8rem;
  margin-top: 1.6rem;
  cursor: pointer;
`;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await fetch('https://formspree.io/f/moqkgpoz', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: JSON.stringify(data)
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormGroup>
        <label htmlFor='name'>Name</label>
        <input
          type='name'
          name='name'
          {...register('name', { required: true })}
        />
        {errors.name && (
          <span className='error-message'>This field is required</span>
        )}
      </StyledFormGroup>
      <StyledFormGroup>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          name='email'
          {...register('email', { required: true })}
        />
        {errors.name && (
          <span className='error-message'>This field is required</span>
        )}
      </StyledFormGroup>
      <StyledFormGroup>
        <label htmlFor='message'>Message</label>
        <textarea name='message' {...register('message', { required: true })} />
        {errors.name && (
          <span className='error-message'>This field is required</span>
        )}
      </StyledFormGroup>
      <StyledButton type='submit' disabled={loading}>
        Submit
      </StyledButton>
    </StyledForm>
  );
}
