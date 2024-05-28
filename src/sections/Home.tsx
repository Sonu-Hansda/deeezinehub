import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Home() {
    return (
        <section className="md:px-12 pt-4 md:pt-2 text-white text-5xl text-center bg-secondary pb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col justify-center w-full md:w-1/2 mb-8 md:mb-0">
                    <p className="text-8xl">Deezine<span className="text-primary"> Hub</span></p>
                    <p className="text-lg md:text-xl mb-4 font-thin">Transforming Vision into Reality</p>
                    <p className="text-lg md:text-xl mb-6 text-justify text-gray-300">
                    we transform vision into reality with our expert services. Whether it's video editing, graphics designing, UI/UX, or web development, our team delivers top-notch solutions tailored to your needs. Let us bring your ideas to life with stunning visuals, intuitive designs, and dynamic websites that exceed your expectations.
                    </p>
                    <div className="grid grid-cols-2 text-lg font-light gap-4">
                        <p className="border p-2 shadow-lg text-primary">250+ Designs</p>
                        <p className="border p-2 shadow-lg text-primary">50+ Clients</p>
                        <p className="border p-2 shadow-lg text-primary">150+ Edited Videos</p>
                        <p className="border p-2 shadow-lg text-primary">25+ Websites</p>
                    </div>
                </div>

                <ul className="hidden md:block place-self-center mb-8 text-3xl">
                    <li className="mb-3"><FaFacebook /></li>
                    <li className="mb-3"><FaInstagram /></li>
                    <li className="mb-3"><FaLinkedin /></li>
                    <li className="mb-3"><FaWhatsapp /></li>
               </ul>

               </div>
               </section>
    );
}
