import { useTranslation } from 'react-i18next'

export default function Footer() {
  let { t } = useTranslation()

  return (
    <footer className='px-6 md:px-12 py-12'>
      <div className='flex justify-between items-center'>
        <p>© {t('full_name')} 2024</p>
      </div>
    </footer>
  )
}
