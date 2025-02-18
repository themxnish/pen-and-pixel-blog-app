import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const Createblog = (props) => {
    const [value, setValue] = useState("");
    const menu = [
        {text:"nature",path:"/"},
        {text:"life",path:"/"},
        {text:"sports",path:"/"},
    ]
    let blogdata = props.blogdata;
    return (
        <div className="flex w-full items-center justify-center py-6">
                <div className="bg-slate-200 w-[90%] md:w-[60%] p-6 rounded-xl shadow-2xl">
                    <h1 className="text-2xl font-bold mb-6 text-center items-center justify-center font-sans">Create a new blog post</h1>
                    <div className="w-full h-[2px] bg-slate-300 mb-6"></div>
                    <div className="flex flex-col space-y-6">
                    <div>
                        <label htmlFor="title" className="ml-1 text-slate-600 font-bold block mb-2">Title</label>
                        <input type="text" id="title" className="h-10 w-full border border-slate-500 rounded-lg px-30 my-2 p-2"/>
                    </div>
    
                    <div>
                        <label htmlFor="category" className="ml-1 text-slate-600 font-bold block mb-2">Category</label>
                        <select name="" id="category"  className="h-10 w-full border border-slate-500 rounded-lg my-2 p-2">
                            {menu.map(x =>{
                                return <option value={x.text}>{x.text}</option>
                            })}
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="image" className="ml-1 text-slate-600 font-bold block mb-2">Image</label>
                        <input type="file" id="image" className="w-full border border-slate-500 rounded my-2 p-2"/>
                    </div>

                    <div>
                        <label htmlFor="post" className="ml-1 text-slate-600 font-bold block mb-2">Post</label>
                        <ReactQuill className= "bg-white rounded mb-4 mt-2 editingarea" 
                        theme="snow" 
                        value={value} 
                        onChange={setValue} />
                    </div>
                    <hr />
                     
                    <div className="flex justify-end">
                        <button className="bg-slate-700 hover:bg-slate-900 text-white font-bold h-10 w-[120px] mt-2 rounded shadow-xl">Submit Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Createblog;