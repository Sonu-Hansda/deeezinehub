import { RxDragHandleDots1 } from "react-icons/rx";
import bgImage from '../assets/background.png';

export default function About() {
    return (
        <>
      <section className="bg-[#ebf0ea] pb-20 py-20">
        <div className="container mx-auto px-4 relative">
          <div className='flex items-baseline relative'>
            <h2 className="w-[20%] text-3xl md:text-4xl font-bold text-center mb-10">Know <br/>About us</h2>
            <p className='w-[60%] text-green-800'>Morning Desk leverages AI to streamline operations with innovative chatbot solutions, prioritizing efficiency and exceptional customer experiences.</p>
            <RxDragHandleDots1 className='absolute right-0 w-40 h-20 rotate-90 text-green-800' />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div style={{backgroundImage:`url(${bgImage})`}} className="relative flex flex-col items-center rounded-xl text-white p-4 shadow-xl">
              <div className='w-full h-full bg-black absolute top-0 rounded-xl opacity-45'/>
              <div className='z-50'>
              <h3 className='text-3xl font-bold mb-4'>Our
              Mission</h3>
                  <p className='mb-2'>To revolutionize business operations globally through advanced AI technologies, empowering organizations to achieve efficiency, scalability, and exceptional customer experiences.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{backgroundImage:`url(${bgImage})`}} className="relative flex flex-col items-center rounded-xl text-white p-4 shadow-xl">
              <div className='w-full h-full bg-black absolute top-0 rounded-xl opacity-45'/>
              <div className='z-50'>
              <h3 className='text-3xl font-bold mb-4'>Our
              Vision</h3>
                  <p className='mb-2'>To be the leading provider of AI-powered solutions, transforming how businesses interact, automate tasks, and innovate for sustainable growth.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div style={{backgroundImage:`url(${bgImage})`}} className="relative flex flex-col items-center rounded-xl text-white p-4 shadow-xl">
              <div className='w-full h-full bg-black absolute top-0 rounded-xl opacity-45'/>
              <div className='z-50'>
              <h3 className='text-3xl font-bold mb-4'>Our
              Values</h3>
                  <p className='mb-2'><span className="font-semibold">Innovation</span>: Cutting-edge AI for business needs.
Customer <br/>
<span className="font-semibold">Focus</span>: Tailored, efficient solutions.<br/>
<span className="font-semibold">Integrity</span>: Transparency and ethics.<br/>
<span className="font-semibold">Collaboration</span>: Driving mutual success.<br/>
<span className="font-semibold">Excellence</span>: Quality and reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    );
}