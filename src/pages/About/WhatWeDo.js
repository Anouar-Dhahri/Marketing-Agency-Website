import React from "react";

function WhatWeDo() {
  const items = [
    {
      title: "Web Development",
      icon: "images/web.png",
      description:
        "Web development is the work involved in developing a website for the Internet or an intranet.",
    },
    {
      title: "Mobile Development",
      icon: "images/mobile.png",
      description:
        "Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.",
    },
    {
      title: "Digital Marketing",
      icon: "images/digital-marketing.png",
      description:
        "Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
    },

    {
      title: "Graphic Design",
      icon: "images/graphicdesign.png",
      description:
        "Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
    },
  ];
  return <div className="z-20 sm:mt-10">
      <h1 className='text-secondary text-8xl text-center z-20 font-semibold sm:text-5xl'>What We Do ?</h1>
      <div className='h-96 w-full bg-primary mt-12'>

      </div>
      <div className="grid grid-cols-4 sm:grid-cols-1 gap-10 mx-32 sm:mx-0 -mt-48 sm:w-full sm:px-5">
          {items.map((item)=>(
              <div className="p-5 bg-white border shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-300 sm:selection:w-full">
                <img src={item.icon} alt="" className="h-20 w-20" />
                <h1 className='text-2xl'>{item.title}</h1>
                <p className='text-gray-600 text-md'>{item.description}</p>
              </div>
          ))}
      </div>
  </div>
}

export default WhatWeDo;
