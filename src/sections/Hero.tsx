import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-20 md:py-32 text-white text-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
          <span className="inline-block animate-fade-in">
            Transforming Vision into Reality
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Your Success, Our Commitment
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          We turn ideas into impactful digital solutions. From AI bot integration and web development to product marketing, our services cater to your business needs.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          <div className="flex flex-col justify-center w-full md:w-1/2 mb-8 md:mb-0 space-y-4 md:space-y-0 md:space-x-4">
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-1 md:mb-4">
              <div className="border border-gray-200 p-6 shadow-lg bg-white text-primary rounded-lg">
                <p className="text-2xl font-bold text-gray-800">250+</p>
                <p className="text-gray-600">Designs</p>
              </div>
              <div className="border border-gray-200 p-6 shadow-lg bg-white text-primary rounded-lg">
                <p className="text-2xl font-bold text-gray-800">50+</p>
                <p className="text-gray-600">Clients</p>
              </div>
              <div className="border border-gray-200 p-6 shadow-lg bg-white text-primary rounded-lg">
                <p className="text-2xl font-bold text-gray-800">150+</p>
                <p className="text-gray-600">Edited Videos</p>
              </div>
              <div className="border border-gray-200 p-6 shadow-lg bg-white text-primary rounded-lg">
                <p className="text-2xl font-bold text-gray-800">25+</p>
                <p className="text-gray-600">Websites</p>
              </div>
            </div>
            <button className=" bg-primary hover:bg-amber-400 text-white font-bold py-3 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
