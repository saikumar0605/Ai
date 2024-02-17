import React from 'react'
import image from "../../assets/image.png";

function Projects() {
  return (
    <div className='flex-1'>
      <h1 className='text-center text-4xl font-bold py-4'>Take a look at My Projects!</h1>
      <div className='text-black flex flex-wrap justify-center p-1'>

        <div className='flex flex-col md:flex-row p-9'>
          <div className='md:w-2/4'>
            <img src={image} className='w-auto rounded-md' />
          </div>
          <div className=' md:w-3/4 md:pl-10'>
            <h1 className='text-xl pb-6'>Title of the Project</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tenetur maiores architecto,
              molestias quasi illum, mollitia illo facilis delectus ad natus consequuntur vero, animi laudantium
              culpa exercitationem voluptatum? Nihil? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tenetur maiores architecto,
              molestias quasi illum, mollitia illo facilis delectus ad natus consequuntur vero, animi laudantium
              culpa exercitationem voluptatum? Nihil?
            </p>
            <div className='flex flex-row-reverse'>
              <a href='#' className=' my-4'>
                <button className='bg-stone-800 p-3 rounded-md text-stone-200'>View Project</button>
              </a>
            </div>
          </div>
        </div>

         <div className='flex flex-col md:flex-row-reverse p-9 text-right'>
          <div className='md:w-2/4'>
            <img src={image} className='w-auto rounded-md' />
          </div>
          <div className=' md:w-3/4 md:pr-10'>
            <h1 className='text-xl pb-6 '>Title of the Project</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tenetur maiores architecto,
              molestias quasi illum, mollitia illo facilis delectus ad natus consequuntur vero, animi laudantium
              culpa exercitationem voluptatum? Nihil? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tenetur maiores architecto,
              molestias quasi illum, mollitia illo facilis delectus ad natus consequuntur vero, animi laudantium
              culpa exercitationem voluptatum? Nihil?
            </p>
            <div className='flex flex-row'>
              <a href='#' className=' my-4'>
                <button className='bg-stone-800 p-3 rounded-md text-stone-200'>View Project</button>
              </a>
            </div>
          </div>
        </div>

      </div>

      <h1 className='text-center text-4xl font-bold py-4'>Upcoming Projects!</h1>
      <div className='text-black flex flex-wrap justify-center p-1'>




          <div className='flex flex-col md:flex-row p-9'>
          <div className='md:w-2/4'>
            <img src={image} className='w-auto rounded-md' />
          </div>
          <div className=' md:w-3/4 md:pl-10'>
            <h1 className='text-xl pb-6'>Title of the Project</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tenetur maiores architecto,
              molestias quasi illum, mollitia illo facilis delectus ad natus consequuntur vero, animi laudantium
              culpa exercitationem voluptatum? Nihil? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tenetur maiores architecto,
              molestias quasi illum, mollitia illo facilis delectus ad natus consequuntur vero, animi laudantium
              culpa exercitationem voluptatum? Nihil?
            </p>
            <div className='flex flex-row-reverse'>
              <a href='#' className=' my-4'>
                <button className='bg-stone-800 p-3 rounded-md text-stone-200'>View Project</button>
              </a>
            </div>
          </div>
        </div>

         <div className='flex flex-col md:flex-row-reverse p-9 text-right'>
          <div className='md:w-2/4'>
            <img src={image} className='w-auto rounded-md' />
          </div>
          <div className=' md:w-3/4 md:pr-10'>
            <h1 className='text-xl pb-6 '>Title of the Project</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tenetur maiores architecto,
              molestias quasi illum, mollitia illo facilis delectus ad natus consequuntur vero, animi laudantium
              culpa exercitationem voluptatum? Nihil? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tenetur maiores architecto,
              molestias quasi illum, mollitia illo facilis delectus ad natus consequuntur vero, animi laudantium
              culpa exercitationem voluptatum? Nihil?
            </p>
            <div className='flex flex-row'>
              <a href='#' className=' my-4'>
                <button className='bg-stone-800 p-3 rounded-md text-stone-200'>View Project</button>
              </a>
            </div>
          </div>
        </div>


        
      </div>

    </div>

  )
}

export default Projects