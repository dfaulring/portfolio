import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function ContactForm() {
  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch('https://formspree.io/f/moqkgpoz', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(await res.json())

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          name='email'
          {...register('email', { required: true })}
        />
      </div>
      <div>
        <label htmlFor='message'>Message</label>
        <textarea name='message' {...register('message', { required: true })} />
      </div>
      <button type='submit'>Submit</button>
    </StyledForm>
  );
}
