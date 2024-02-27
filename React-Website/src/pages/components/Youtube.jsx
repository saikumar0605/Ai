import { useEffect, useState } from 'react';


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
        {videos.map((vidData) => (
          <a target='_blank' rel='noreferrer' href={vidData.youtubeId} key="" className="max-w-72 border-stone-300 rounded overflow-hidden shadow-lg m-3 bg-stone-200 hover:bg-stone-300 hover:border-4">
            <img className="w-full" src={vidData.thumbnail} alt='title' />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">{vidData.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Youtube;
