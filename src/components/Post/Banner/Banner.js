import React from "react" 

type Props = {
  title: string,
  featuredImage: string
};

const Banner = ({ title, featuredImage }: Props) => {

  const featureImageSrc = `https://res.cloudinary.com/dibrkdu2g/image/upload/c_lpad,f_auto,q_auto,w_300/${featuredImage.id}`;

  return (

    <div className="bg-local bg-cover bg-no-repeat w-full h-full max-w-screen-lg mx-auto min-h-2/5 lg:min-h-3/5 flex items-center justify-right" style={{backgroundImage: 'url('+featureImageSrc+')'}} >
      <div className="container sm:w-full md:w-3/5 ml-auto text-right sm:pr-3 md:pr-5 bg-opacity-50 bg-black">
        <h1 className="text-3xl lg:text-5xl text-gray-20">{title}</h1>
      </div>
    </div>

  );
  }

export default Banner;