import React, { useEffect, useState } from 'react';

function Youtube() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setVideos(data);
        console.log(data); // Correct place to log the videos after they are set
      })
      .catch(error => console.error("Fetching data failed", error));
  }, []);

  return (
    <div className='flex-1'>
      <h1 className='text-center text-4xl font-bold py-4'>Checkout my Youtube Channel</h1>
      <div className='text-black flex flex-wrap justify-center p-1'>
        {videos.map((vidData, index) => (
          <div className='border-2  border-stone-400 rounded flex flex-col justify-center max-w-80 m-1 max-h-fit bg-stone-400 hover:border-4 hover:text-stone-100 ' >
            <a target='_blank' href={vidData.youtubeId}>
              <div className='flex justify-center'>
                 <img src={vidData.thumbnail} className='w-80 rounded' /> 
              </div>
              <p className='text-center font-bold px-4'>{vidData.title}</p>
            </a> <br></br>
          </div>

        ))}
      </div>
    </div>
  );
}

export default Youtube;
