import { PiArrowFatLineRight } from "react-icons/pi";


export default function Work() {
    const data = [
        {
            title: 'Initial Consultation',
            content: [
                'Discuss your needs and objectives.',
                'Understand your business requirements and how our chatbot can help.',
            ],
            bgImage: 'https://img.freepik.com/free-vector/realistic-gold-silk-background_23-2150011476.jpg?w=1060&t=st=1719665918~exp=1719666518~hmac=6f3605510d84026e047d6855b10f5623b58961a26ea23b1b5301f1cfb4a3aae6',
        },
        {
            title: 'Advance Payment',
            content: [
                'Secure your project with an initial payment.',
                'Begin the project planning and setup process.',
            ],
            bgImage: 'https://img.freepik.com/free-vector/red-wavy-silk-fabric-drapery-background-abstract-cloth_1284-41543.jpg?t=st=1719667685~exp=1719671285~hmac=00ab0e035d101c1f5d2b4956956fbef453186fc1a8b9e723956a14232c3896fa&w=740',
        },
        {
            title: 'Contract Signing',
            content: [
                'Formalize the agreement with a contract.',
                'Outline the scope, deliverables, timelines, and terms.',
            ],
            bgImage: 'https://img.freepik.com/free-vector/fuchsia-silk-draped-fabric-background_33099-1667.jpg?t=st=1719668461~exp=1719672061~hmac=afb0e7c9b37cb8e880833af053fc4854ba870b33e7b18ad2c2962a5f8df454de&w=1060',
        },
        {
            title: 'Project Kickoff',
            content: [
                'Start the project with a detailed kickoff meeting.',
                'Define milestones and deliverables.',
            ],
            bgImage: 'https://img.freepik.com/free-vector/dark-blue-satin-fabric_33099-1924.jpg?t=st=1719668441~exp=1719672041~hmac=2585d9ca82cbe7163d7ffd950ff42273d5448168a0a69b0d695810ab2a014f42&w=1060',
        },
        {
            title: 'First Delivery',
            content: [
                'Provide the initial version of the chatbot.',
                'Demonstrate core functionalities and gather feedback.',
            ],
            bgImage: 'https://img.freepik.com/free-vector/swirl-fabric-silk-backdrop-luxurious-vinous-drapery-folded-textile-with-soft-spiral-vortex-satin-waves_33099-1542.jpg?t=st=1719667802~exp=1719671402~hmac=b684516ee3ab66b646abd3a8b4dc577f29a01f1dd5c4791f101930da372f8f4b&w=1380',
        },
        {
            title: 'Ongoing Support',
            content: [
                'Offer continued support and maintenance.',
                'Ensure the chatbot operates smoothly and efficiently.',
            ],
            bgImage: 'https://img.freepik.com/free-vector/fuchsia-silk-draped-fabric-background_33099-1667.jpg?t=st=1719668461~exp=1719672061~hmac=afb0e7c9b37cb8e880833af053fc4854ba870b33e7b18ad2c2962a5f8df454de&w=1060',
        },
        {
            title: 'Deployment',
            content: [
                'Assist with the deployment of the chatbot.',
                'Provide training to your team on how to use and manage the chatbot.',
            ],
            bgImage: 'https://img.freepik.com/free-vector/wavy-red-satin_33099-1068.jpg?t=st=1719668417~exp=1719672017~hmac=d4d01195bf3ce8e8bce8680f16be39eb0aae044f313d69d6c0ccf2520b21e253&w=996',
        },
        {
            title: 'Final Delivery',
            content: [
                'Deliver the fully functional chatbot.',
                'Ensure all features and customizations are implemented.',
            ],
            bgImage: 'https://img.freepik.com/free-vector/emerald-background-design_23-2150317701.jpg?t=st=1719668533~exp=1719672133~hmac=89714647d30f19dffd2689341835bf5c30b589199acce9fc8d5d379af47a2a28&w=1060',
        },
        {
            title: 'Full Payment',
            content: [
                'Complete the full payment as agreed in the contract.',
                'Prepare for the final stages of delivery.',
            ],
            bgImage: 'https://img.freepik.com/free-photo/close-up-shiny-fabric-details_23-2149285587.jpg?t=st=1719668586~exp=1719672186~hmac=04fa6a85cc5543fa4c13e31bc3f13e01d6b5c644fc00fd87604315a58804696e&w=1060',
        },
        {
            title: 'Client Review and Approval',
            content: [
                'Review the first delivery.',
                'Provide feedback for any revisions or improvements.',
            ],
            bgImage: 'https://img.freepik.com/free-vector/realistic-glossy-black-background_23-2150069283.jpg?t=st=1719666824~exp=1719670424~hmac=518e6a33fe94ec93b07fe18f44f06a90ae7d890d54408c5d360fa1efb6f17bdd&w=1060',
        },
    ];
    return (
        <section className="p-20">
            <div>
                <h1 className="text-5xl mb-6 text-black">How we <span className="block font-bold font-findel">Work</span></h1>
                <div className="grid grid-cols-4">
                    {data.map((item, index) => (
                        <div className={`flex ${(index === 3 || index === 4) && 'flex-col'} ${(index > 4 && index < 8) && 'flex-row-reverse'} justify-center items-center ${index !== 4 && 'self-baseline' }`} key={index}>
                            <div
                                className="relative h-64 w-64 rounded-sm p-2 border hover:shadow-xl"
                            >
                                <img src={item.bgImage} className="absolute top-0 left-0 h-full w-full -z-10 rounded-sm object-cover" />
                                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-75 rounded-sm -z-10" />
                                <h1 className="text-gray-200 text-2xl font-semibold mb-2 border-b">{item.title}</h1>
                                <ul className="text-gray-200 list-inside list-disc">
                                    {item.content.map((desc) => (
                                        <li key={desc}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                            {index < 5 || index > 7 ? (
                                <>
                                    <PiArrowFatLineRight className={index === 3 || index === 4 || index === 9 ? 'hidden' : 'w-20 h-20'} />
                                    <PiArrowFatLineRight className={index === 3 || index === 4 ? 'w-16 h-16 rotate-90' : 'hidden'} />
                                </>
                            ) : (
                                <PiArrowFatLineRight className={index === 11 ? 'hidden' : 'w-20 h-20 rotate-180'} />
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}