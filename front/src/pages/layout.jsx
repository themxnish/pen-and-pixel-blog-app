import React from "react";
import { Outlet, Link} from "react-router-dom";

const Layout = () => {
    const menu = [
        {text:"nature",path:"/"},
        {text:"life",path:"/"},
        {text:"sports",path:"/"},
    ]
    return (
        <div className="min-h-screen flex flex-col">
                {/* <header></header> */}
            <div className="border-b shadow-lg bg-gradient-to-r from-slate-400 to-slate-500">
                    <div className="container px-5 py-5 flex justify-between">
                        <Link to='/' className="hover:opacity-60 transition-opacity">
                        <span className="font-black text-3xl bg-clip-text font-comic-sans">Pen & Pixel</span>
                        </Link>
                        <div className="flex items-center space-x-8">
                            <ul className="flex wrap space-x-6">
                                {menu.map((item, index) => (
                                    <li key={index}>
                                        <Link className="px-3 py-2 font-medium hover:text-slate-900 rounded-md uppercase text-sm font-sans">
                                            <span>{item.text}</span>
                                        </Link> 
                                    </li>
                                ))}
                            </ul>
                            <Link to={"/create"} className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded font-medium shadow-xl">New Post</Link>
                        </div>
                    </div>
                    {/* <body></body> */}
                    <div className="h-[3px] bg-slate-800 shadow-sm"></div>
                    <main className="flex-grow bg-gradient-to-br from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1]">
                    <div className="flex mx-auto px-6 md:px-20 py-12">
                        <div className="min-h-[600px] w-full flex-grow bg-gradient-to-br from-[#CBD5E1] via-[#E2E8F0] to-[#F8FAFC] rounded-xl shadow-2xl p-12">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </main>
                {/* <footer></footer> */}
                <footer className="bg-slate-800 shadow-inner">
                    <div className="flex mx-auto px-20 py-20 items-center justify-center">
                        <span className="text-white text-lg font-medium font-sans"> © 2024 Pen & Pixel. All rights reserved.</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Layout;