import { FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

const PostCard = ({ post }) => {
  return (
    <div className="max-w-md mx-auto border h-auto border-gray-200 rounded-lg bg-white shadow-sm">
      
      {/* 🔹 Header (User info) */}
      <div className="flex items-center justify-between pt-20">
        <div className="flex items-center space-x-2">
          <img 
            src={post.userAvatar || "https://via.placeholder.com/40"} 
            alt="User" 
            className="w-8 h-8 rounded-full object-cover border"
          />
          <span className="font-semibold text-sm">{post.username || "User"}</span>
        </div>
        <button className="text-gray-600">⋮</button>
      </div>

      {/* 🔹 Post Image */}
      <div className="w-full bg-black">
        <img 
          src={post.image} 
          alt="Post" 
          className="w-full aspect-square object-fill" 
        />
      </div>

      {/* 🔹 Action Buttons */}
      <div className="flex justify-between items-center px-3 py-2">
        <div className="flex space-x-4">
          <button className="hover:opacity-70"><FaRegHeart size={22} /></button>
          <button className="hover:opacity-70"><FaRegComment size={22} /></button>
          <button className="hover:opacity-70"><FaRegPaperPlane size={22} /></button>
        </div>
        <button className="hover:opacity-70"><FaRegBookmark size={22} /></button>
      </div>

      {/* 🔹 Likes */}
      <div className="px-3">
        <p className="text-sm font-semibold">{post.likes || 0} likes</p>
      </div>

      {/* 🔹 Caption */}
      <div className="px-3">
        <p className="text-sm">
          <span className="font-semibold">{post.username || "User"}</span>{" "}
          {post.caption}
        </p>
      </div>

      {/* 🔹 Time */}
      <div className="px-3 py-2">
        <p className="text-xs text-gray-500 uppercase">{post.time || "Just now"}</p>
      </div>
    </div>
  );
};

export default PostCard;