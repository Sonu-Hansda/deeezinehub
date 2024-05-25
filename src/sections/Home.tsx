import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import pic from "../assets/image.png";

export default function Home() {
    return (
        <section className="md:px-12 pt-4 md:pt-2 text-white text-5xl text-center bg-secondary pb-8">
            <div className="flex justify-between ">

                <div className="flex flex-col justify-center w-[50%]">
                    <p className="text-8xl">DeeZine<span className="text-primary"> Hub</span></p>
                    <p className="text-lg md:text-xl mb-4 font-thin">Transforming Vision into Reality</p>
                    <p className="text-lg md:text-xl mb-6 text-justify text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab aliquid maxime molestiae vero officiis distinctio, mollitia dolor, provident blanditiis expedita libero velit explicabo qui doloribus, est sequi vel quos. Aut, a.</p>
                    <div className="grid grid-cols-2 text-lg font-light gap-4">
                        <p className="border p-2 shadow-lg text-primary">250+ Designs</p>
                        <p className="border p-2 shadow-lg text-primary">50+ Clients</p>
                        <p className="border p-2 shadow-lg text-primary">150+ Edited Videos</p>
                        <p className="border p-2 shadow-lg text-primary">25+ Websites</p>
                    </div>
                </div>
                {/* <img className="w-[50%]" src={pic} alt="Profile Image" /> */}
                <ul className="hidden md:block place-self-center mb-8 text-3xl">
                    {/* <div className="h-32 w-1 rounded-full mb-4 bg-primary mx-auto"></div> */}
                    <li className="mb-4"> <FaFacebook /> </li>
                    <li className="mb-4"> <FaInstagram /> </li>
                    <li className="mb-4"> <FaLinkedin /> </li>
                    <li className="mb-4"> <FaWhatsapp /> </li>
                </ul>
            </div>
        </section>
    );
}