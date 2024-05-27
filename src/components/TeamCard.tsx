import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import pic from "../assets/image.png";

export default function TeamCard(){
    return (
        <li className="w-3/4 mx-auto md:w-full flex flex-col lg:flex-row gap-x-6 border shadow-xl">
                <img className="lg:w-1/2 object-cover" src={pic} alt="Abhishek's profile" />
                    <div className="py-4">
                    <h1 className="text-center text-xl font-semibold">Abhishek Yadav</h1>
                    <p className="text-center mb-2 text-sm text-secondary font-light">Graphics Designer</p>
                    <p className="border-t text-center lg:text-justify mb-4 font-light text-sm py-2 pr-2 pl-2 lg:pl-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum eum libero!</p>
                    <ul className="flex gap-x-2 justify-center">
                        <li className="border p-2 shadow-lg hover:shadow-2xl transition-shadow ease-linear duration-300 cursor-pointer"> <FaFacebook/> </li>
                        <li className="border p-2 shadow-lg hover:shadow-2xl transition-shadow ease-linear duration-300 cursor-pointer"> <FaInstagram/> </li>
                        <li className="border p-2 shadow-lg hover:shadow-2xl transition-shadow ease-linear duration-300 cursor-pointer"> <FaXTwitter/> </li>
                        <li className="border p-2 shadow-lg hover:shadow-2xl transition-shadow ease-linear duration-300 cursor-pointer"> <FaLinkedin/> </li>
                    </ul>
                    </div>
              </li>
);
}