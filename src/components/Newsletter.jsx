import React from "react";

const Newsletter = () => {
    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
            <div className="flex items-center justify-center lg:w-3/6 mx-auto">
                <div className="text-center">
                    <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">Pellentesque suscipit fringilla libero eu.</h2>
                    <div className="flex items-center justify-center gap-8">
                        <button className="btn-primary">Get a Demo
                            <svg 
                                width="13" 
                                height="12" 
                                viewBox="0 0 13 12" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block ml-2"
                            >
                            <path 
                                d="M8.71667 7.75014L10.4358 6.03104C10.6397 5.82716 10.6397 5.4966 10.4358 5.29273L8.71667 3.57362M10.2829 5.66188L2.62592 5.66188" 
                                stroke="white" 
                            />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;