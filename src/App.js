import { useEffect } from 'react';
import kwesforms from 'kwesforms';

export default function App() {
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <div>
      <h1>Hello :)</h1>

      <form
        class='kwes-form'
        action='https://kwesforms.com/api/foreign/forms/FtnHRlO2SOtFcajvIiHr'
        no-reload
      >
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea name='message' cols='30' rows='10' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
