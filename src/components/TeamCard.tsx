import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import pic from "../assets/image.png";

export default function TeamCard(){
    return (
        <li className="w-full flex gap-x-6 border">
                <img className="w-1/2" src={pic} alt="Abhishek's profile" />
                    <div className="py-4">
                    <h1 className="text-xl font-semibold mb-2">Abhishek Yadav</h1>
                    <p className="text-justify mb-4 font-light text-sm px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum eum libero!</p>
                    <ul className="flex gap-x-2">
                        <li className="border p-2 shadow-lg hover:shadow-2xl transition-shadow ease-linear duration-300 cursor-pointer"> <FaFacebook/> </li>
                        <li className="border p-2 shadow-lg hover:shadow-2xl transition-shadow ease-linear duration-300 cursor-pointer"> <FaInstagram/> </li>
                        <li className="border p-2 shadow-lg hover:shadow-2xl transition-shadow ease-linear duration-300 cursor-pointer"> <FaXTwitter/> </li>
                        <li className="border p-2 shadow-lg hover:shadow-2xl transition-shadow ease-linear duration-300 cursor-pointer"> <FaLinkedin/> </li>
                    </ul>
                    </div>
              </li>
);
}