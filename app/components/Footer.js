import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo_f} alt='' className='w-36 mx-auto mb-2' />

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6' />
                fanny.olengabinene@laposte.net
            </div>
        </div>
    </div>
  )
}

export default Footer
