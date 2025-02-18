import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
    let blogdata = props.blogdata;
    return (
        <div className="flex justify-center items-center">
            <Link to='/blog'>
                <div className="flex flex-col w-full overlow-hidden">
                    <h1 className="mt-1 text-2xl font-bold text-left">how is you in your university</h1>
                    <div className="flex mt-4 mb-4">
                        <small>feb 16, 2025</small>
                    </div>
                    <img className="w-[80%] h-[50%] hover:scale-[0.97] transition-transform duration-300 rounded-lg shadow-2xl" src="https://picsum.photos/id/237/2000" alt="" />
                    <h2 className="text-2xl mt-4 mb-3">What is Lorem Ipsum?</h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <h2 className="text-2xl mt-2 mb-2">Why do we use it?</h2>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                </div>
            </Link>
        </div>
    );
};

export default Blog;