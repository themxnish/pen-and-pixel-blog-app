import React from "react";
import { Link } from "react-router-dom";

const Blogcard = (props) => {
    let blogdata = props.blogdata;
    return (
        <div className="bg-slate-200 shadow-xl hover:bg-slate-300 transition-all duration-300 overflow-hidden rounded-xl">
            <Link to='/blog'>
            <div className="flex flex-col w-full">
                <img src={blogdata.image} alt="" className="w-full h-full hover:scale-102 transition-transform duration-300"/>
                <div className="p-4">
                    <h2 className="mt-1 text-xl font-bold text-left">{blogdata.title}</h2>
                    <p className="text-sm text-left opacity-70">{blogdata.description}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Blogcard;