import TeamCard from "../components/TeamCard";


export default function Team() {
    return (
        <section className="p-24 bg-[#F5F3F5]">
            <h1 className="text-center text-3xl text-slate-600 underline underline-offset-4 mb-4">Our Creative Team</h1>
            <ul className="grid grid-cols-2 gap-4">
                {[1,2,3].map((member)=>(
                    <TeamCard key={member}/>
                ))}
            </ul>
        </section>
    );
}