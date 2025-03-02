import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { uploadFile, createBlog } from "../../api/api";

const Createblog = (props) => {
    

    const blankBlog = {
        title: "",
        image: "",
        post: "<p><br></p>",
        category: "",
    }
     
    const [newBlog, setNewBlog] = useState(blankBlog);

    const handleUpload = async (event) => {
        let uploadedFile = await uploadFile(event.target.files[0]);
        if(uploadedFile.path){
            setNewBlog({...newBlog, image: uploadedFile.path});
        }  
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!newBlog.title || !newBlog.image || !newBlog.post || !newBlog.category) {
            alert("Please fill in all required fields");
            return;
        }

        try {
            // console.log("Submitting blog:", newBlog);
            let createdBlog = await createBlog(newBlog);
            // console.log("Response from createBlog:", createdBlog);
            if(createdBlog) {
                alert("Blog created successfully!");
                setNewBlog({
                    title: "",
                    image: "",
                    post: "<p><br></p>",
                    category: "",
                });

                const fileInput = document.getElementById('image');
                if (fileInput) fileInput.value = '';
            } else {
                alert("Failed to create blog. Please try again.");
            }
        } catch (error) {
            console.error('Submit error:', error);
            alert('Failed to create blog: ' + error.message);
        }
    }

    const menu = [
        {text:"nature",path:"/"},
        {text:"life",path:"/"},
        {text:"sports",path:"/"},
    ]
    let blogdata = props.blogdata;
    return (
        <form onSubmit={handleSubmit} className="flex w-full items-center justify-center py-6">
            <div className="bg-slate-200 w-[90%] md:w-[60%] p-6 rounded-xl shadow-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center items-center justify-center font-sans">Create a new blog post</h1>
                <div className="w-full h-[2px] bg-slate-300 mb-6"></div>
                <div className="flex flex-col space-y-6">
                <div>
                    <label htmlFor="title" className="ml-1 text-slate-600 font-bold block mb-2">Title</label>
                    <input type="text" value={newBlog.title} onChange={(e) => setNewBlog({...newBlog, title: e.target.value})} id="title" className="h-10 w-full border border-slate-500 rounded-lg my-2 p-2" placeholder="Enter title" />
                </div>

                <div>
                    <label htmlFor="category" className="ml-1 text-slate-600 font-bold block mb-2">Category</label>
                    <select name="" id="category" value={newBlog.category} onChange={(e) => setNewBlog({...newBlog, category: e.target.value})} className="h-10 w-full border border-slate-500 rounded-lg my-2 p-2">
                        <option value="" default disabled>Select a Category</option>
                        {menu.map(x =>{
                            return <option value={x.text}>{x.text}</option>
                        })}
                    </select>
                </div>
                
                <div>
                    <label htmlFor="image" className="ml-1 text-slate-600 font-bold block mb-2">Image</label>
                    <input type="file" id="image"onChange={(e) => handleUpload(e)} 
                        className="block w-full bg-slate-100 text-slate-600 border border-slate-500 rounded-lg my-2 p-2 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-600 file:text-white hover:file:bg-slate-800"
                        accept="image/*"
                    />
                </div>

                <div>
                    <label htmlFor="post" className="ml-1 text-slate-600 font-bold block mb-2">Post</label>
                    <ReactQuill className= "bg-white rounded mb-4 mt-2 editingarea" 
                    theme="snow" 
                    value={newBlog.post} 
                    onChange={(e) => setNewBlog({...newBlog, post: e})} />
                </div>
                <hr />
                 
                <div className="flex justify-end">
                    <button type="submit" className="bg-slate-700 hover:bg-slate-900 text-white font-medium h-10 w-[120px] rounded-lg transition-colors shadow-sm">Submit Post</button>
                </div>
            </div>
        </div>
        </form>
    );
};

export default Createblog;