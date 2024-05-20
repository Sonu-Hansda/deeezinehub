import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import pic from "../assets/image.png";

export default function Home(){
    return (
        <section className="md:px-12 pt-4 md:pt-2 text-white text-5xl text-center bg-secondary">
            <div className="flex justify-between ">

            <div className="flex flex-col justify-center w-[50%]">
                <p>I'm <span className="text-primary">Abhishek Yadav</span></p>
                <p className="text-lg md:text-xl mb-6">Video Editor & Graphics Designer</p>
                <button className="border-4 rounded-lg text-lg md:text-3xl p-2 w-1/2 mx-auto border-primary text-primary">Contact me</button>
            </div>
                <img className="w-[50%]" src={pic} alt="Profile Image" />
                <ul className="hidden md:block place-self-end mb-8 text-3xl">
                    <div className="h-32 w-2 rounded-full mb-4 bg-primary mx-auto"></div>
                    <li className="mb-2"> <FaFacebook/> </li>
                    <li className="mb-2"> <FaInstagram/> </li>
                    <li className="mb-2"> <FaLinkedin/> </li>
                    <li className="mb-2"> <FaWhatsapp/> </li>
                </ul>
            </div>
        </section>
    );
}