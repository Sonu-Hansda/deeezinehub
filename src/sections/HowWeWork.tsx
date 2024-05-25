import { useState } from "react";

export default function HowWeWork(){
    const options:string[] = ['Social Media Design','Illustration','UI/UX Design','Video Editing'];
    const [option,setOption] = useState<string>(options[0]);
    return (
        <section className="py-12 bg-gray-200">
            <div className="px-24">
                <h1 className="text-4xl mb-6 text-secondary font-bold">How we work</h1>
            </div>
            <div className="bg-secondary w-full">
                <ul className="flex justify-evenly p-4 text-3xl font-thin text-gray-300 list-disc">
                    {options.map((item)=>(
                        <li className={`${item == option ? 'text-primary':null} cursor-pointer`} onClick={()=>setOption(item)}>{item}</li>
                    ))}   
                </ul>
            </div>
                <div className="px-24 flex justify-center gap-x-12 py-8">
                    <div className="w-1/2 h-80 border border-black p-4">Image</div>
                    <div className="w-1/2 ">
                        <h1 className="text-4xl font-thin mb-4">{option}</h1>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium incidunt natus omnis molestias pariatur possimus officia impedit, aspernatur harum corrupti at officiis doloremque.</p>
                        <button className="px-8 py-4 bg-secondary rounded-full text-white shadow-lg">Get Started</button>
                    </div>
                </div>
        </section>
    );
}