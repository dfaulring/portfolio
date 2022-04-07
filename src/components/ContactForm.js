import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 48px;
    padding-left: 8px;
  }

  textarea {
    resize: none;
    height: 160px;
  }

  .error-message {
    color: red;
  }
`;

const StyledButton = styled.button`
  height: 48px;
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
