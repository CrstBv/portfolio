import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='flex-center max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex-between flex flex-col gap-4 text-center sm:flex-row'>
        <Link href={"/"}>
          Ir al inicio de la pagina
        </Link>
      </div>
    </footer>
  )
}

export default Footer