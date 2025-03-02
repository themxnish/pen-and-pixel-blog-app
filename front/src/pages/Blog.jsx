import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getBlogsById } from "../../api/api";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import dateFormat from 'dateformat';

const Blog = () => {
    const apiURL = "http://localhost:3000/";

    let { id } = useParams();
    const [blogs, setBlogs] = useState(null);
    useEffect(() => { 
        async function fetchBlogs() {
            const allBlogs = await getBlogsById(id);
            console.log(allBlogs);
            setBlogs(allBlogs.data[0]);
        }
        fetchBlogs();
    }, 
    [id]);
    return (
        <div className="flex justify-center items-center">
                {blogs && (<div className="flex flex-col w-full overlow-hidden">
                    <h1 className="mt-1 text-2xl font-bold text-left">{blogs.title}</h1>
                    <div className="flex mt-4 mb-4">
                        <small>{dateFormat(blogs.createdone)}</small>
                    </div>
                    <img className="w-[50%] h-[50%] hover:scale-[0.97] transition-transform duration-300 rounded-lg shadow-2xl item-center m-auto justify-center" src={apiURL + blogs.image} alt="" />
                    <div className="mt-10 mb-5 text-left text-slate-800 font-sans">
                        {parse(blogs.post)}
                    </div>
                </div>
                )}
        </div>
    );
};

export default Blog;