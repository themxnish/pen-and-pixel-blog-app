import React from "react";
import Blogcard from "../components/Blogcard";

const Home = () => {

    const data = [
        {
            title: "Blog title",
            description: "Blog description lorem ipsum",
            date: "2022-01-01",
            image: "https://picsum.photos/id/237/2000",
        },
        {
            title: "Blog title",
            description: "Blog description",
            date: "2022-01-01",
            image: "https://picsum.photos/id/217/2000",
        },
        {
            title: "Blog title",
            description: "Blog description",
            date: "2022-01-01",
            image: "https://picsum.photos/id/237/2000",
        },
        {
            title: "Blog title",
            description: "Blog description",
            date: "2022-01-01",
            image: "https://picsum.photos/id/137/2000",
        },
    ]
    return (
        <div className="space-y-8">
            <div className="flex flex-col items-start mb-10">
                <h1 className="text-2xl font-comic-sans font-bold text-slate-800 mt-2">
                Featured Blogs
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {data.map((x, index) => {
                        return <Blogcard key={index} blogdata={x} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;