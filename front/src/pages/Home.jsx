import React, { useEffect, useState } from "react";
import Blogcard from "../components/Blogcard";
import { getBlogs } from "../../api/api";
import { useSearchParams } from "react-router-dom";

const Home = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [blogs, setBlogs] = useState(null);

    useEffect(() => { 
        async function fetchBlogs() {
            const allBlogs = await getBlogs();
            setBlogs(allBlogs.data);
        }
        fetchBlogs();
    }, []);

    useEffect(() => { 
        async function fetchBlogs() {
            const allBlogs = await getBlogs(searchParams.get('category'));
            setBlogs(allBlogs.data);
        }
        fetchBlogs();
    }, [searchParams]);
    
    return (
        <div className="space-y-8">
            <div className="flex flex-col items-start mb-10">
                <h1 className="text-2xl font-comic-sans font-bold text-slate-800 mt-2">
                Featured Blogs
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {blogs && blogs.map((x, index) => {
                        return <Blogcard key={index} blogdata={x} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;