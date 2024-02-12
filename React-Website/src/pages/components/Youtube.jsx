import React, { useEffect, useState } from 'react'
import axios from 'axios';
import image from "../../assets/image.png";
import gif1 from "../../assets/gif1.gif";

const API_KEY = "youtube data v3 api key";
const channel_id = "yt channel id";
const max = 10;

function Youtube() {
  const [videos, setVideos] = useState([]);
  const [isloaded, load] = useState(false);
{/*
  useEffect(() => {
    fetchVideos();
  }, []);
*/}
  async function fetchVideos() {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: "snippet",
          channelId: channel_id,
          maxResults: max,
          key: API_KEY,
          type: 'video',
          order: 'date',
        },
      });
      console.log("success");
      setVideos(response.data.items);
      load(true);
    } catch (err) {
      console.error(err);
    }
  }



  return (
    <div className='flex-1'>
      <h1 className='text-center text-4xl font-bold py-4'>My Youtube Channel</h1>
      <div className=' text-black flex flex-wrap justify-center p-1'>

        {
          isloaded?(
            videos.map((video) => {
              return (
                <div className='border-2  border-stone-400 rounded flex flex-col justify-center max-w-80 m-1 max-h-fit bg-stone-400 hover:border-4 hover:text-stone-100 ' >
                  <a target='_blank' href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                    <div className='flex justify-center'>
                      <img src={video.snippet.thumbnails.high.url} className='w-80 rounded' />
                    </div>
                    <p className='text-center px-4'>{video.snippet.title}</p>
                  </a> <br></br>
                </div>
              );
            })) : (
            <div className='p-12 text-center'>
              <img src={gif1} alt="loading" className=' h-44'/>
              The Videos are Loading....
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Youtube