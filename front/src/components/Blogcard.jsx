import React from "react";
import { Link } from "react-router-dom";

const Blogcard = (props) => {
    let blogdata = props.blogdata;
    const apiURL = `http://localhost:3000/${blogdata.image.replace(/\\/g, '/')}`;
    return (
        <div className="bg-slate-200 shadow-xl hover:bg-slate-300 transition-all duration-300 overflow-hidden rounded-xl">
            <Link to={`/blog/${blogdata.id}`}>
            <div className="flex flex-col w-full">
                <img src={apiURL} alt={blogdata.image} className="w-full h-[300px] hover:scale-102 transition-transform duration-300 bg-no-repeat bg-cover bg-center justify-center item-center"/>
                <div className="p-4">
                    <h4 className="mt-1 font-bold text-left">{blogdata.title}</h4>
                    <p className="mt-1 text-left text-sm text-slate-500">{blogdata.category}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Blogcard;