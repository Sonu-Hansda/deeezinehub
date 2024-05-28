import work1 from "../assets/work/1.png";
import work2 from "../assets/work/2.jpg";
import work3 from "../assets/work/3.png";
import work4 from "../assets/work/4.png";
import work5 from "../assets/work/5.jpg";
import work6 from "../assets/work/6.jpg";
import work7 from "../assets/work/7.png";
import work8 from "../assets/work/8.png";
import work9 from "../assets/work/9.png";
import work10 from "../assets/work/10.png";
import work11 from "../assets/work/11.png";
import work12 from "../assets/work/12.jpg";
import { useState } from "react";

export default function Work() {
    const images = [work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12];
    const [showMore, setShowMore] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const openImageDialog = (image: string) => {
        setSelectedImage(image);
    };

    const closeImageDialog = () => {
        setSelectedImage(null);
    };

    return (
        <section className="p-24 bg-secondary">
            <div>
                <h1 className="text-5xl mb-6 text-white font-bold">Work</h1>
                <div className="grid md:grid-cols-3 gap-2">
                    {images.slice(0, showMore ? images.length : 6).map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Work ${index + 1}`}
                            className="border border-primary hover:shadow-lg rounded-md hover:-translate-y-2 cursor-pointer transition-all duration-300 ease-linear"
                            onClick={() => openImageDialog(image)}
                        />
                    ))}
                </div>
                {showMore && (
                    <button
                        onClick={toggleShowMore}
                        className="mt-4 text-primary hover:underline"
                    >
                        Show Less
                    </button>
                )}
                {!showMore && (
                    <button
                        onClick={toggleShowMore}
                        className="mt-4 text-primary hover:underline"
                    >
                        Show More
                    </button>
                )}

                {selectedImage && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                        <img
                            src={selectedImage}
                            alt="Fullscreen Image"
                            className="h-1/2"
                        />
                        <div className="h-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6 md:ml-2 text-white bg-black rounded-full" onClick={closeImageDialog}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>

                    </div>
                )}
            </div>
        </section>
    );
}