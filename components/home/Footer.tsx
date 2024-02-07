import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import LocaleSwitcher from './LocaleSwicher'

const Footer = () => {
  const t = useTranslations()

  return (
    <footer>
      <div className='items-center max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full justify-between flex flex-col gap-4 text-center sm:flex-row'>
        <Link href={"/"}>
          {t('HomeLink.footer')}
        </Link>
          <LocaleSwitcher />
      </div>
    </footer>
  )
}

export default Footer