import React from 'react';
import { RxDragHandleDots1 } from 'react-icons/rx';
import bgImage from '../assets/background.png';

const Features: React.FC = () => {
  return (
    <>
      <section className="bg-[#ebf0ea] pb-20 py-20">
        <div className="container mx-auto px-4 relative">
          <div className='flex items-baseline relative'>
            <h2 className="w-[20%] text-3xl md:text-4xl font-bold text-center mb-10">Our <br/>Services</h2>
            <p className='w-[60%] text-green-800'>Morning Desk's AI chatbots streamline operations, enhance customer engagement, and provide 24/7 support, driving efficiency and business growth.</p>
            <RxDragHandleDots1 className='absolute right-0 w-40 h-20 rotate-90 text-green-800' />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div style={{backgroundImage:`url(${bgImage})`}} className="relative flex flex-col items-center rounded-xl text-white p-4 shadow-xl">
              <div className='w-full h-full bg-black absolute top-0 rounded-xl opacity-45'/>
              <div className='z-50'>
              <h3 className='text-2xl font-bold mb-4'>Appointment Scheduling Automation</h3>
              <ul className='list-disc p-2'>
                <li>
                  <p className='mb-2'> <span className='font-semibold'>Description: </span>Develop chatbots that handle appointment bookings, reminders, and cancellations, integrated with calendar systems for real-time scheduling.</p>
                </li>
                <li>
                  <p className='mb-2'> <span className='font-semibold'>Benefits: </span>Improved scheduling efficiency, reduced no-show rates, and enhanced customer convenience with 24/7 booking capabilities.</p>
                </li>
              </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{backgroundImage:`url(${bgImage})`}} className="relative flex flex-col items-center rounded-xl text-white p-4 shadow-xl">
              <div className='w-full h-full bg-black absolute top-0 rounded-xl opacity-45'/>
              <div className='z-50'>
              <h3 className='text-2xl font-bold mb-4'>Customer Support Automation</h3>
              <ul className='list-disc p-2'>
                <li>
                  <p className='mb-2'> <span className='font-semibold'>Description: </span>Automate customer support processes using AI-powered chatbots that handle common queries, manage FAQs, and provide ticketing and live chat services.</p>
                </li>
                <li>
                  <p className='mb-2'> <span className='font-semibold'>Benefits: </span>24/7 support availability, reduced workload for human agents, faster response times, and improved customer satisfaction.</p>
                </li>
              </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div style={{backgroundImage:`url(${bgImage})`}} className="relative flex flex-col items-center rounded-xl text-white p-4 shadow-xl">
              <div className='w-full h-full bg-black absolute top-0 rounded-xl opacity-45'/>
              <div className='z-50'>
              <h3 className='text-2xl font-bold mb-4'>Sales and Lead Generation Automation</h3>
              <ul className='list-disc p-2'>
                <li>
                  <p className='mb-2'> <span className='font-semibold'>Description: </span>Implement chatbots to qualify leads, capture customer information, and assist in the sales process by providing product recommendations, answering questions, and following up with potential customers.
                  </p>
                </li>
                <li>
                  <p className='mb-2'> <span className='font-semibold'>Benefits: </span>Streamlined sales process, higher lead conversion rates, and personalized customer interactions that drive sales growth.</p>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
