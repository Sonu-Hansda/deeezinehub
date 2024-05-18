import { useState } from "react";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <nav className="flex justify-between items-center px-24 py-6 border-b">
            <h1 className="text-center text-2xl font-bold">DeeezineHub</h1>

            {!showMenu ?
                (

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer md:hidden w-6 h-6" onClick={() => setShowMenu(true)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"  />
                    </svg>
                )
                :
                (

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer md:hidden w-6 h-6" onClick={() => setShowMenu(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                )}

            <ul className={`absolute md:relative left-0 top-20 md:top-0 bg-white md:bg-transparent justify-center w-full md:w-auto h-14 md:h-auto ${showMenu? 'flex opacity-100' : 'opacity-0 invisible md:flex'} md:visible md:opacity-100 items-center gap-x-4 text-sm transition-opacity ease-linear`}>
                <li className="cursor-pointer hover:underline">Home</li>
                <li className="cursor-pointer hover:underline">Work</li>
                <li className="cursor-pointer hover:underline">Team</li>
                <li className="border p-2">contact us</li>
            </ul>
        </nav>
    );
}