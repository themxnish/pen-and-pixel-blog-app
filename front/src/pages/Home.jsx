import React, { useEffect, useState } from "react";
import Blogcard from "../components/Blogcard";
import { getBlogs, searchBlogs} from "../../api/api";
import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            const category = searchParams.get('category');
            const allBlogs = searchTerm 
                ? await searchBlogs(searchTerm) 
                : await getBlogs(category || "");
            setBlogs(allBlogs.data);
        }
        fetchBlogs();
    }, [searchTerm, searchParams]); 

    return (
        <div className="space-y-8">
            <div className="flex flex-col items-start mb-10">
                <h1 className="text-2xl font-comic-sans font-bold text-slate-800 mt-2">
                    Featured Blogs
                </h1>
                <div className="flex items-center justify-end w-full">
                <input
                    type="text"
                    value={searchTerm}
                    placeholder="Search..."
                    className="w-full md:w-1/2 p-2 mt-4 border border-gray-300 rounded-lg shadow-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {blogs && blogs.length > 0 ? (
                        blogs.map((x, index) => (
                            <Blogcard key={index} blogdata={x} />
                        ))
                    ) : (
                        <p className="text-center col-span-3 text-gray-500">No blogs found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
