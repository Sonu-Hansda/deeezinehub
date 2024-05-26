import { useContext, useState } from "react";
import { scrollContext, scrollContextType } from "../App";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const scrollMethods = useContext<scrollContextType|undefined>(scrollContext)
    return (
        <nav className="flex justify-between md:justify-normal items-center px-8 md:px-24 py-6 bg-secondary">
            <h1 className="text-center text-2xl font-bold text-primary border rounded-full p-2 mr-12">DH</h1>

            {!showMenu ?
                (

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer md:hidden w-6 h-6 text-gray-300" onClick={() => setShowMenu(true)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )
                :
                (

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer md:hidden w-6 h-6 text-gray-300" onClick={() => setShowMenu(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                )}

            <ul className={`absolute md:relative left-0 top-20 md:top-0 bg-primary md:text-gray-300 text-lg md:bg-secondary justify-center md:justify-between w-full md:w-full h-14 md:h-auto ${showMenu ? 'flex opacity-100' : 'opacity-0 invisible md:flex'} md:visible md:opacity-100 items-center gap-x-4 transition-opacity ease-linear`}>
                <div className="flex gap-x-4 md:gap-x-6">
                    <li className="cursor-pointer hover:underline">Home</li>
                    <li className="cursor-pointer hover:underline">Work</li>
                    <li onClick={scrollMethods?.scrollToTeam} className="cursor-pointer hover:underline">Team</li>
                </div>
                <li onClick={scrollMethods?.scrollToContact} className="p-2 rounded-lg md:bg-[#3d3e42] md:border md:border-primary cursor-pointer">contact us</li>
            </ul>
        </nav>
    );
}