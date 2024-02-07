import React from 'react';

const HomePage = () => {
  return (
    <div className="relative bg-blue-500 h-96 flex justify-center items-center">
      {/* Banner Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-75 bg-cover bg-center" style={{ backgroundImage: 'url("your-banner-image-url.jpg")' }}></div>
      
      {/* Animated Text */}
      <div className="z-10 text-white text-3xl font-bold">
        <AnimatedText texts={['Welcome', 'To Our Website', 'Enjoy Your Stay']} />
      </div>
    </div>
  );
};

const AnimatedText = ({ texts }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((current) => (current + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return <div>{texts[index]}</div>;
};

export default HomePage;

<div className="absolute top-0 left-0 w-full h-full opacity-75 bg-cover bg-center" >
            </div>