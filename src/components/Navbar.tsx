import { useContext, useState } from "react";
import { scrollContext, scrollContextType } from "../App";

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const scrollMethods = useContext<scrollContextType | undefined>(scrollContext);

    return (
        <nav className="flex flex-wrap justify-between items-center px-4 md:px-24 py-4 md:py-6 bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="w-full md:w-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white border border-white rounded-sm p-2 mr-4 md:mr-12">MorningDesk</h1>

                {!showMenu ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="cursor-pointer md:hidden w-6 h-6 text-white"
                        onClick={() => setShowMenu(true)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="cursor-pointer md:hidden w-6 h-6 text-white"
                        onClick={() => setShowMenu(false)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                )}
            </div>

            <ul className={`${showMenu ? "flex" : "hidden"
                } md:flex md:relative md:bg-transparent text-white md:text-white justify-center md:justify-between w-full md:w-auto h-auto md:h-auto md:items-center gap-x-4 transition-opacity ease-linear mt-2`}>
                <div className="flex flex-row items-center gap-4 md:gap-6">
                    <li className="cursor-pointer hover:underline">Home</li>
                    <li className="cursor-pointer hover:underline">Work</li>
                </div>
                <li onClick={scrollMethods?.scrollToContact} className="p-2 rounded-lg hover:underline md:hover:no-underline lg:bg-purple-700 lg:hover:bg-purple-800 cursor-pointer transition-colors duration-300">Contact Us</li>
            </ul>
        </nav>
    );
};

export default Navbar;
