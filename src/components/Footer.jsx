import React from 'react'
import { assets } from '../assets/assets'
import cozy from '../assets/cozy.png'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-[145px] text-sm'>
        <div>
            {/* <img src={assets.logo} className='mb-5 w-32' alt="" /> */}
            <img src={cozy} className='mb-5 w-[155px] h-[53px]' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nunc nisl eget nunc.
            </p>
        </div>
        <div className='mt-[3.2px]'>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About US</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='mt-[3.2px]'>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-95955-85535</li>
                <li>contact@cozystudio.com</li>
            </ul>
        </div>
      </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>© 2026 Cozy Studio. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
