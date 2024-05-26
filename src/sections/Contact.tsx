import { FormEvent } from 'react';
import paperplane from '../assets/paper_plane.jpg'

export default function Contact() {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <section className="relative px-24 py-12">
            <img className='absolute right-0 -z-50 w-1/2 object-cover' src={paperplane} alt="Paper Plane" />
            <h1 className="text-8xl font-extralight mb-4">Get In Touch</h1>
            <form className="w-1/2 border p-12 shadow-2xl rounded-md" onSubmit={onSubmit}>
                <div className="flex justify-between">

                    <div className="mb-2">
                        <label htmlFor="name">Your full name</label>
                        <input className="block p-4 rounded-md border outline-none focus:border-black" type="text" name="name" id="name" placeholder="Super start Rajnikant" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Your email</label>
                        <input className="block p-4 rounded-md border outline-none focus:border-black" type="email" name="email" id="email" placeholder="someone@mail.com" />
                    </div>

                </div>
                <div className="flex justify-between items-center gap-x-2">

                    <div className="mb-2">
                        <label htmlFor="phone">Phone number</label>
                        <input className="block p-4 rounded-md border outline-none focus:border-black" type="tel" name="phone" id="phone" placeholder="+91 XXXXXXXXXX" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="service">Select Services</label>
                        <select name="service" id="service" className="border p-4 rounded-md outline-none focus:border-black">
                            <option value="uiux">UI/UX</option>
                            <option value="graphics">Graphics Design</option>
                            <option value="editing">Video Editing</option>
                            <option value="web">Web Development</option>
                        </select>
                    </div>

                </div>
                <div className="mb-6">
                    <label htmlFor="desc">Description</label>
                    <textarea className="w-full block p-4 rounded-md border outline-none focus:border-black" name="desc" id="desc" placeholder="Describe your work here" />
                </div>

                <button className="p-4 bg-primary w-full rounded-sm shadow-lg" type="submit">Send</button>
            </form>
        </section>
    );
}