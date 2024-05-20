export default function Team() {
    return (
        <section className="p-24 bg-[#F5F3F5]">
            <h1 className="text-center text-3xl text-slate-600 underline underline-offset-4">Our Team</h1>
            <ul>
                <li className="h-24 w-24 p-8 rounded-full flex items-center justify-center bg-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                </li>
            </ul>
        </section>
    );
}