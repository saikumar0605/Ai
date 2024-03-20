import { useState, useEffect } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import image from "../../assets/image.png";


function Blog() {
  let articleBody;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getdata();
  }, [])

  async function getdata() {
    try {
      const response = await axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vinodkumargr");
      console.log(response.data)
      setArticles(response.data.items)
    } catch (err) {
      console.error("failed to fetch the data", err);
    }
  }


  return (
    <div className='flex-1'>
      <h1 className='text-center text-4xl font-bold py-4'>Go Through my Blogs!</h1>

      <div>
        {
          articles.map((article, index) => {
            articleBody = article.description
            return (


              <div className='flex flex-col md:flex-row p-9   shadow-xl bg-stone-200 hover:bg-stone-300 hover:border-4 border-stone-200 hover:border-stone-300 rounded-md m-4'>
                <div className='md:w-2/4'>
                  <img src={article.thumbnail || image} className='w-auto rounded-md' />
                </div>
                <div className=' md:w-3/4 md:pl-10'>
                  <h1 className='text-xl pb-6 '>{article.title}</h1>
                 <p className=' max-h-16 overflow-hidden'> {DOMPurify.sanitize(`${article.content}`)}
                  </p>
                  <div className='flex flex-row-reverse'>
                    <a target='_blank' rel='noreferrer' href={article.link} key={index} className=' my-4'>
                      <button className='bg-stone-800 p-3 rounded-md text-stone-200'>Read Blog</button>
                    </a>
                  </div>
                </div>
              </div>
            )
          }
          )

        }

      </div>

    </div>
  )
}

export default Blog

