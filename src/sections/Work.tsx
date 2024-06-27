import { PiArrowFatLineRight } from "react-icons/pi";


export default function Work() {
    
    return (
        <section className="p-20">
            <div>
                <h1 className="text-5xl mb-6 text-black">How we <span className="block font-bold">Work</span></h1>
               <div className="grid grid-cols-5 items-baseline">
                   {
                    [1,2,3,4,5,6,7,8,9,10].map(ele => (
                        <div className={`flex ${ele == 5 && 'flex-col'} justify-center items-center`}>
                        <div className="h-40 w-40 bg-gray-400 rounded-sm flex justify-center items-center text-3xl">{ele}</div>
                        {ele < 6 ? (
                            <>
                            <PiArrowFatLineRight className={ele == 5 ? 'hidden':'w-16 h-16'}/>
                            <PiArrowFatLineRight className={ele == 5 ? 'w-16 h-16 rotate-90':'hidden'}/>
                            </>
                            
                        ):(
                            
                            <PiArrowFatLineRight className={ele == 10 ? 'hidden':'w-16 h-16 rotate-180'}/>
                        )}
                        </div>
                    ))
                   }
               </div>
            </div>
        </section>
    );
}