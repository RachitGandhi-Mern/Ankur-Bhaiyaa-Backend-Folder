import React, { useState } from 'react'
import API from '../api';
import Navbar from '../components/Navbar';

const Upload = () => {
      const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Select an image");

    const formData = new FormData();
    formData.append("image", file);

    try {
      await API.post("/api/post", formData);
      alert("Post uploaded!");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };
  return (
     <div>
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]">
        <form onSubmit={handleUpload} className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-xl mb-4 text-center font-bold">Upload Post</h2>
          <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="mb-4"/>
          <button className="bg-purple-500 text-white px-4 py-2 w-full rounded">Upload</button>
        </form>
      </div>
    </div>
  )
}

export default Upload
