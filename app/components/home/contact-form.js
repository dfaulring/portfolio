import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactForm() {
  let { t } = useTranslation()
  const [submitting, setSubmitting] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    const formData = new FormData(event.target)

    formData.append('access_key', '31b082aa-9a13-450e-bd2e-bff8338d82c0')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    })
    const result = await response.json()

    if (result.success) {
      setSubmitting(false)
      setName('')
      setEmail('')
      setMessage('')
      setShowSuccessMessage(true)
    } else {
      setSubmitting(false)
      setShowFailureMessage(true)
    }
  }

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 1500)
    }
  }, [showSuccessMessage])

  useEffect(() => {
    if (showFailureMessage) {
      setTimeout(() => {
        setShowFailureMessage(false)
      }, 1500)
    }
  }, [showFailureMessage])

  return (
    <>
      <form onSubmit={handleSubmit} className='relative flex flex-col'>
        <div className='flex flex-col'>
          <label className='sr-only' htmlFor='name'>
            Name
          </label>
          <input
            className='outline-none border-b border-black bg-none h-12 pl-2 font-roboto-mono bg-[rgba(0,_0,_0,_0)] focus:bg-[rgba(0,_0,_0,_.05)]'
            type='text'
            id='name'
            name='name'
            placeholder={t('input_name')}
            autoComplete='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col mt-6'>
          <label className='sr-only' htmlFor='email'>
            Email
          </label>
          <input
            className='outline-none border-b border-black bg-none pl-2 h-12 font-roboto-mono bg-[rgba(0,_0,_0,_0)] focus:bg-[rgba(0,_0,_0,_.05)]'
            type='email'
            id='email'
            name='email'
            placeholder={t('input_email')}
            autoComplete='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col mt-6'>
          <label className='sr-only' htmlFor='message'>
            Message
          </label>
          <textarea
            className='outline-none border-b border-black bg-none p-2 resize-none h-48 font-roboto-mono bg-[rgba(0,_0,_0,_0)] focus:bg-[rgba(0,_0,_0,_.05)]'
            id='message'
            name='message'
            placeholder={t('input_message')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        {showSuccessMessage && (
          <div className='absolute font-roboto-mono inset-0 w-full h-full flex items-center justify-center bg-light-yellow bg-opacity-90 transition-opacity duration-500'>
            Success!
          </div>
        )}
        {showFailureMessage && (
          <div className='absolute font-roboto-mono inset-0 w-full h-full flex items-center justify-center bg-light-yellow bg-opacity-90 transition-opacity duration-500'>
            Failed to send message
          </div>
        )}
        {submitting ? (
          <button
            className='mt-4 bg-black text-light-yellow rounded-md h-12 uppercase font-roboto-mono flex justify-center items-center cursor-not-allowed'
            type='button'
            disabled
          >
            <svg
              className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          </button>
        ) : (
          <button
            className='group relative mt-4 bg-black text-light-yellow rounded-md h-12 uppercase font-roboto-mono overflow-hidden lg:after:transition-all lg:after:duration-200 lg:after:absolute lg:after:inset-0 lg:after:flex lg:after:items-center lg:after:justify-center lg:after:content-["Submit"] lg:after:translate-y-[125%] lg:hover:after:translate-y-0'
            type='submit'
          >
            <span className='inline-block lg:transition-all lg:duration-200 lg:group-hover:-translate-y-[125%]'>
              {t('submit')}
            </span>
          </button>
        )}
      </form>
    </>
  )
}
