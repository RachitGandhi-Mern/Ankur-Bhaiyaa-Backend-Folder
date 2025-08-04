import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className="flex justify-between items-center px-4 py-3 border-b bg-white sticky top-0 z-10">
      <Link to="/feed" className="text-2xl font-bold">📸 Insta-Audio</Link>
      <div className="flex gap-4">
        <Link to="/feed" className="hover:underline">Home</Link>
        <Link to="/upload" className="hover:underline">Upload</Link>
      </div>
    </nav>
  )
}

export default Navbar
