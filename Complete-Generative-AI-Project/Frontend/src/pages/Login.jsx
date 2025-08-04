import React, { useState } from 'react'
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/auth/login", form);
      navigate("/feed");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
        <input placeholder="Username" className="border p-2 w-full mb-2 rounded"
          onChange={(e)=>setForm({...form, username: e.target.value})} />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-4 rounded"
          onChange={(e)=>setForm({...form, password: e.target.value})} />
        <button className="bg-green-500 text-white px-4 py-2 w-full rounded">Login</button>
      </form>
    </div>
  )
}

export default Login
