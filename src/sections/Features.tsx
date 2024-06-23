import React from 'react';
import Brands from '../components/Brands';

const Features: React.FC = () => {
  return (
    <>
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-primary rounded-full p-4 mb-4">
              {/* Insert feature icon or illustration */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Example icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p className="text-center text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, repudiandae officia.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-primary rounded-full p-4 mb-4">
              {/* Insert feature icon or illustration */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Example icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est consectetur reprehenderit perferendis itaque quasi sequi?
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-primary rounded-full p-4 mb-4">
              {/* Insert feature icon or illustration */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Example icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p className="text-center text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ab modi ut.
            </p>
          </div>
        </div>
      </div>
    </section>
      <Brands/>
    </>
  );
};

export default Features;
