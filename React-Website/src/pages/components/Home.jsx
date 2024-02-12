import React from 'react'
import './animatedtext.css';
import image from '../../assets/image.png';

function Home() {
  return (
    <div className='flex-1'>

      <div className=" min-h-lvh bg-stone-200 flex justify-center items-center p-12 set-background">
        <h1 className=" text-stone-600 text-5xl font-bold fallingText">
          Hi, I am
          <h1 className='text-7xl text-stone-800'>SaiKumar Reddy</h1>
          [data Scientist]
        </h1>
      </div>

      <div className=' items-center text-center p-7'>
        <h1 className='font-bold text-xl'>Lets Colaborate for work</h1>
        <div className='flex flex-warp justify-around pt-6'>
          <div className=''>
            the image of upwork
          </div>
          <div>
            the image of fiverr
          </div>
          <div>
            the image of linkedin
          </div>
          <div>
            the image of contact
          </div>
        </div>
      </div>

      <div>

      </div>

      <div>

      </div>

    </div>
  )
};



export default Home