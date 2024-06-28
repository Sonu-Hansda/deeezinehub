import { RxDragHandleDots1 } from "react-icons/rx";
import bgImage from '../assets/background.png';

export default function Blog() {
    return (
        <>
            <section className="bg-[#ebf0ea] pb-20 pt-5">
                <div className="container mx-auto px-4 relative">
                    <div className='flex items-baseline relative'>
                        <h2 className="w-[20%] text-3xl md:text-4xl font-bold text-center mb-10">Our <br />BLOGS</h2>
                        <p className='w-[60%] text-green-800'>Morning Desk leverages AI to streamline operations with innovative chatbot solutions, prioritizing efficiency and exceptional customer experiences.</p>
                        <RxDragHandleDots1 className='absolute right-0 w-40 h-20 rotate-90 text-green-800' />
                    </div>
                    <div className="px-16">
                        {/* Feature 1 */}
                        <div className="flex gap-x-4 items-center rounded-xl border border-black mb-4">
                           <img className="h-40 w-40 rounded-xl" src={bgImage} alt="Post Image" />
                            <div>
                                <h3 className='text-3xl font-bold mb-4'>The Rise of AI in Customer Service: Transforming Support with Chatbots</h3>
                                <p className='mb-2'>Explore how AI-powered chatbots are reshaping customer service by enhancing response times, personalizing interactions, and improving overall customer satisfaction.</p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex gap-x-4 items-center rounded-xl border border-black mb-4">
                           <img className="h-40 w-40 rounded-xl" src={bgImage} alt="Post Image" />
                            <div>
                                <h3 className='text-3xl font-bold mb-4'>Streamlining Business Operations: Automating Appointment Scheduling with Chatbots</h3>
                                <p className='mb-2'>Discover the benefits of using chatbots to automate appointment scheduling processes, reducing administrative overhead, minimizing no-shows, and improving efficiency.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex gap-x-4 items-center rounded-xl border border-black mb-4">
                           <img className="h-40 w-40 rounded-xl" src={bgImage} alt="Post Image" />
                            <div>
                                <h3 className='text-3xl font-bold mb-4'>Chatbots in E-commerce: Enhancing Sales and Customer Experience Online</h3>
                                <p className='mb-2'>Learn how integrating chatbots into e-commerce platforms can boost sales by providing personalized product recommendations, answering customer queries instantly, and ...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}