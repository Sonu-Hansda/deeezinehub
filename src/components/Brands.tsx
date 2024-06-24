// Brands.tsx

import React from 'react';
import AdobePS from "../assets/brands/adobe-photoshop.svg";
import OpenAI from "../assets/brands/openai.svg";
import Figma from "../assets/brands/figma.svg";
import ReactIcon from "../assets/brands/react.svg";
import AdobeXD from "../assets/brands/adobe-xd.svg";

const Brands: React.FC = () => {
  return (
    <section className="py-12 md:py-4">
      <div className="mx-auto px-4 overflow-hidden">
        <div className="w-full flex space-x-12 items-start animate-[marquee-horizontal_20s_linear_infinite]">
          <img src={AdobePS} alt="Adobe Photoshop" className="h-16" />
          <img src={AdobeXD} alt="Adobe XD" className="h-16" />
          <img src={Figma} alt="Figma" className="h-16" />
          <img src={ReactIcon} alt="React" className="h-16" />
          <img src={OpenAI} alt="OpenAI" className="h-16" />
          </div>
      </div>
    </section>
  );
};

export default Brands;
