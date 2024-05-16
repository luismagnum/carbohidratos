import React from 'react';
import alien from "../assets/images/alienware.svg"
const Navbar = () => {
  return (
    <div>
        <div className='fixed w-full'>
      <div>
        <div className='flex flex-row justify-between p-2 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                    <img src={alien} alt='alien' width={35} className='bg-[#00ff08] rounded-full'/>
                </span>
                <h1 className='text-xl font-semibold ml-6'>Luis Daniel Diaz</h1>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar