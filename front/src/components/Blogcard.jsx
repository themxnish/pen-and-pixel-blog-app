import React from "react";
import { Link } from "react-router-dom";

const Blogcard = (props) => {
    let blogdata = props.blogdata;
    const apiURL = `http://localhost:3000/${blogdata.image.replace(/\\/g, '/')}`;
    return (
        <div className="bg-slate-200 shadow-xl hover:bg-slate-300 transition-all duration-300 overflow-hidden rounded-xl">
            <Link to={`/blog/$blogdata.id`}>
            <div className="flex flex-col w-full">
                <img src={apiURL} alt={blogdata.image} className="w-full h-[300px] hover:scale-102 transition-transform duration-300"/>
                <div className="p-4">
                    <h2 className="mt-1 text-xl font-bold text-left">{blogdata.title}</h2>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Blogcard;