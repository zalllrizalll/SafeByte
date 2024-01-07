import React from "react";

const Blog = () => {
    const blogs = [
        {id: 1, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/blog1.png"},
        {id: 2, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/blog2.png"},
        {id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/blog3.png"},
    ]
    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
            <div className="text-center md:w-1/2 mx-auto">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">Caring is the new marketing</h2>
                <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who is joining the community, read about how our community are increasing their membership income and lots more.</p>
            </div>

            {/* all blogs */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 items-center justify-between">
                {
                    blogs.map(blog => <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
                        <img src={blog.image} alt="" className="enlarge-image hover:scale-95 transition-all duration-300"/>
                        <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-20">
                            <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
                                <div className="flex items-center justify-center gap-8">
                                    <a href="" className="font-bold text-brandPrimary hover:text-neutral-700">Readmore
                                        <svg 
                                            width="18"
                                            height="17" 
                                            viewBox="0 0 18 17" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="inline-block ml-2"
                                        >
                                            <path 
                                                d="M12.0179 11.2553L14.3099 8.96318C14.5818 8.69135 14.5818 8.25062 14.3099 7.97879L12.0179 5.68671M14.1061 8.47098L4.36108 8.47099"
                                                stroke="#4CAF4F"
                                            />
                                        </svg>
                                    </a>
                                </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;