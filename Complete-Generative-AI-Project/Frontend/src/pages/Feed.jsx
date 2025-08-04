import React, { useEffect, useState } from 'react'
import API from '../api'
import Navbar from '../components/Navbar'
import PostCard from '../components/PostCard'

const Feed = () => {
    const [posts , setposts] = useState([])
    useEffect(()=>{
      API.get('/api/post/getPosts')

      .then(res=>{
        console.log(res.data)
        setposts(res.data.Posts|| [])}) 
      .catch(err => alert(err.response?.data?.message || "Error"));
    },[])
  return (
    <div>
      <Navbar />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50 min-h-screen">
        {posts.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  )
}

export default Feed
