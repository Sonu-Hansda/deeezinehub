import React, { useEffect, useState } from 'react';
import AdobePS from "../assets/brands/adobe-photoshop.svg";
import OpenAI from "../assets/brands/openai.svg";
import Figma from "../assets/brands/figma.svg";
import ReactIcon from "../assets/brands/react.svg";
import AdobeXD from "../assets/brands/adobe-xd.svg";

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Transforming Vision into Reality';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length-1) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 250); // Adjust typing speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex relative bg-[#1a1a1a] text-white text-center overflow-hidden px-20 py-20">
      <div className="relative z-10 mx-auto px-4 text-start">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
          <span className="inline-block">
            {displayedText}
            <span className="font-extralight animate-blink">|</span>
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Your Success, Our Commitment
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-200 text-justify">
          We turn ideas into impactful digital solutions. From AI bot integration and web development to product marketing, our services cater to your business needs.
        </p>
        <button className='bg-gray-200 p-4 text-black rounded-sm hover:scale-105 transition-all ease-linear'>Get Started</button>
      </div>
      <div className="hidden md:flex gap-x-4 px-4 overflow-hidden">
        <div className="w-full flex flex-col gap-y-4 items-start animate-[marquee-vertical_20s_linear_infinite]">
          <img src={AdobePS} alt="Adobe Photoshop" className="h-24 w-40" />
          <img src={AdobeXD} alt="Adobe XD" className="h-24 w-40" />
          <img src={Figma} alt="Figma" className="h-24 w-40" />
          <img src={ReactIcon} alt="React" className="h-24 w-40" />
          <img src={OpenAI} alt="OpenAI" className="h-24 w-40 bg-white p-2 rounded-sm" />
        </div>
        <div className="w-full flex flex-col-reverse gap-y-4 items-start animate-[marquee-vertical-reverse_20s_linear_infinite]">
          <img src={AdobePS} alt="Adobe Photoshop" className="h-24 w-40" />
          <img src={AdobeXD} alt="Adobe XD" className="h-24 w-40" />
          <img src={Figma} alt="Figma" className="h-24 w-40" />
          <img src={ReactIcon} alt="React" className="h-24 w-40" />
          <img src={OpenAI} alt="OpenAI" className="h-24 w-40 bg-white p-2 rounded-sm" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
