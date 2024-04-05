import { useState } from 'react'
import ig from "../../assets/ig.svg";
import linkedin from "../../assets/linkedin.svg";
import fb from "../../assets/discord-6.svg";
import mail from "../../assets/mail.svg"

function Contact() {

  const [result, setResult] = useState("");


  const sendData = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ac7fce90-3640-45c0-b8b1-7913b068b109");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='flex-1'>
      <h1 className=' text-4xl text-center pt-10  font-bold text-stone-700'>Get in touch with me!</h1>

      <div className=' items-center text-center p-7'>
        <div className='flex flex-wrap pt-6 text-xl justify-center'>
          <a href="https://www.instagram.com/sai_kumar_datascientist/" target="_blank">
            <div className=' rounded-lg flex flex-col justify-center items-center py-6 shadow-inner hover:shadow-md active:shadow-stone-600 hover:bg-stone-300 max-w-72 m-1'>
              <img src={ig} className=' w-4/12 m-6' />
              lets get in touch
            </div>
          </a>

          <a href='https://discord.com/invite/ZpSZ8PmK' target="_blank">
            <div className=' rounded-lg flex flex-col justify-center items-center py-6 shadow-inner hover:shadow-md active:shadow-stone-600 hover:bg-stone-300 max-w-72 m-1'>
              <img src={fb} className=' w-4/12 m-6' />
              Lets chat
            </div>
          </a>

          <a href='https://www.linkedin.com/in/sai-kumar-reddy-n-data-scientist/' target="_blank">
            <div className='rounded-lg flex flex-col justify-center items-center py-6 shadow-inner hover:shadow-md active:shadow-stone-600 hover:bg-stone-300 max-w-72 m-1' >
              <img src={linkedin} className='w-4/12 m-6' />
              Lets Connect
            </div>
          </a>

          <a href='mailto:123saikumarreddy@gmail.com'>
            <div className='rounded-lg flex flex-col justify-center items-center py-6 shadow-inner hover:shadow-md active:shadow-stone-600 hover:bg-stone-300 max-w-72 m-1' >
              <img src={mail} className='w-4/12 m-6' />
              Or send me mail @
              123saikumarreddy@gmail.com
            </div>
          </a>

        </div>
      </div>

      <h1 className=' text-4xl text-center pt-10 mb-10 font-bold text-stone-700'>Or! Send a Message</h1>



      <div className='flex justify-center'>
        <form className="bg-stone-300 rounded-xl p-6 w-4/5 md:w-2/5 mb-16 shadow-2xl" onSubmit={sendData}>

          <div className=' mb-8'>
            <input
              type="text"
              name="name"
              autoComplete='name'
              className='border-stone-400 border-2 p-1 w-full  rounded hover:border-stone-700'
              placeholder='Enter your Name'
              onChange={
                tex => {
                  client.name = tex
                  setTheData({ ...client })
                }} required />
          </div>

          <div className=' mb-8'>
            <input
              type="text"
              name="email"
              autoComplete='email'
              className='border-stone-400 border-2 p-1 w-full rounded hover:border-stone-700 active:border-red-400'
              placeholder='Enter your Email ID'
              onChange={
                text => {
                  client.email = text
                  setTheData({ ...client })
                }} required />
          </div>



          <div className=' mb-8'>
            <input
              type="text"
              name="phno"
              autoComplete='number'
              className='border-stone-400 border-2 p-1 w-full rounded hover:border-stone-700'
              placeholder='Enter your PhoneNumber'
              onChange={tex => {
                client.phoneno = tex
                setTheData({ ...client })
              }} required/>
          </div>

          <div className='mb-8'>
            <textarea
              name="message"
              className='border-stone-400 border-2 p-1 w-full rounded hover:border-stone-700'
              placeholder='Enter your message'
              onChange={tex => {
                client.query = tex
                setTheData({ ...client })
              }} />
          </div>

          <div className='flex justify-center'>
            <button
              className=' bg-stone-400 rounded pt-3 pb-3 pl-10 pr-10 place-self-center active:border-black'
              onClick={() => {
                sendData();
              }}
              type="submit"
            >Submit</button>
          </div>
          <span>{result}</span>
        </form>

      </div>
    </div>
  );
}

export default Contact