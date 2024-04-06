import { useEffect, useState } from 'react';
import image from "../../assets/projectDefault.png";


function Projects() {
  const [projects, setProjects] = useState([]);
  const [upProjects,setUpProjects] = useState([]);

  useEffect(() => {
   projectsFetch();
   upProjectsFetch();

  }, []);

  function projectsFetch(){
    fetch('/projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        console.log(data); // Correct place to log the videos after they are set
      })
      .catch(error => console.error("Fetching data failed", error));
  }

  function upProjectsFetch(){
    fetch('/upProjects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUpProjects(data);
        console.log(data); // Correct place to log the videos after they are set
      })
      .catch(error => console.error("Fetching data failed", error));
  }

  return (
    <div className='flex-1'>
      <h1 className='text-center text-4xl font-bold py-4'>Take a look at My Projects!</h1>
      <div className='text-black flex flex-wrap justify-center p-4'>

        {projects.map((projectData, index) => (

          (index % 2 == 0) ? (
            <div className='flex flex-col md:flex-row p-9 shadow-xl bg-stone-300  border-stone-200 rounded-md m-4 min-w-full md:text-left text-center'>
              <div className='md:w-1/4  flex justify-center'>
                <img src={projectData.thumbnail || image} className='w-auto rounded-md max-h-72' />
              </div>
              <div className=' md:w-3/4 md:pl-10'>
                <h1 className='text-xl pb-2'>{projectData.title}</h1>
                <h3 className=" text-lg pb-6">{projectData.subHeadingDesc}</h3>
                <p>{projectData.description}</p>
                <div className='flex flex-row-reverse'>
                  <a href={projectData.ghLink} className=' my-4'>
                    <button className='bg-stone-800 p-3 rounded-md text-stone-200'>View Project</button>
                  </a>
                </div>
              </div>
            </div>

          ) : (

            <div className='flex flex-col md:flex-row-reverse p-9 md:text-right  shadow-xl bg-stone-300  border-stone-200 rounded-md m-4 min-w-full  text-center'>
              <div className='md:w-1/4  flex justify-center'>
                <img src={projectData.thumbnail || image} className='w-auto rounded-md max-h-72' />
              </div>
              <div className=' md:w-3/4 md:pr-10'>
                <h1 className='text-xl pb-6 '>{projectData.title}</h1>
                <h3 className=" text-lg pb-6">{projectData.subHeadingDesc}</h3>
                <p>{projectData.description}</p>
                <div className='flex flex-row'>
                  <a href={projectData.ghLink} className=' my-4'>
                    <button className='bg-stone-800 p-3 rounded-md text-stone-200'>View Project</button>
                  </a>
                </div>
              </div>
            </div>
          )

        ))}


      </div>
      
      {/*----------------------------------------------------------------------------------------------- */}

      <h1 className='text-center text-4xl font-bold py-4'>Upcoming Projects!</h1>
      <div className='text-black flex flex-wrap justify-center p-4'>

        {upProjects.map((projectData, index) => (

          (index % 2 == 0) ? (
            <div className='flex flex-col md:flex-row p-9 shadow-xl bg-stone-300  border-stone-200 rounded-md m-4 min-w-full md:text-left text-center'>
              <div className='md:w-1/4 flex justify-center'>
                <img src={projectData.thumbnail || image} className='w-auto rounded-md max-h-72' />
              </div>
              <div className=' md:w-3/4 md:pl-10'>
                <h1 className='text-xl pb-2'>{projectData.title}</h1>
                <h3 className=" text-lg pb-6">{projectData.subHeadingDesc}</h3>
                <p>{projectData.description}</p>
                <div className='flex flex-row-reverse'>
                  <a href={projectData.ghLink} className=' my-4'>
                    <button className='bg-stone-800 p-3 rounded-md text-stone-200'>View Project</button>
                  </a>
                </div>
              </div>
            </div>

          ) : (

            <div className='flex flex-col md:flex-row-reverse p-9 md:text-right  shadow-xl bg-stone-300  border-stone-200 rounded-md m-4 min-w-full text-center'>
              <div className='md:w-1/4  flex justify-center'>
                <img src={projectData.thumbnail || image} className='w-auto rounded-md max-h-72' />
              </div>
              <div className=' md:w-3/4 md:pr-10'>
                <h1 className='text-xl pb-6 '>{projectData.title}</h1>
                <h3 className=" text-lg pb-6">{projectData.subHeadingDesc}</h3>
                <p>{projectData.description}</p>
                <div className='flex flex-row'>
                  <a href={projectData.ghLink} className=' my-4'>
                    <button className='bg-stone-800 p-3 rounded-md text-stone-200'>View Project</button>
                  </a>
                </div>
              </div>
            </div>
          )

        ))}

      </div>

    </div>

  )
}

export default Projects