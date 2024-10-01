import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogOutIcon, Menu, SearchIcon } from "lucide-react";

const Navbar = () => {
  const [mobalimenu, setmobalimenu] = useState(false);
  const togglemobalimenu = () => setmobalimenu(!mobalimenu);

  const user = {
    image: "/default-avatar.png", 
  };
  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20">
      <div className="flex items-center gap-10 z-50">
        <Link to="/">
          <img
            src="/netflix-logo.png"
            alt="Netflix Logo"
            className="w-32 sm:w-40"
          />
        </Link>
        <div className="hidden sm:flex gap-2 items-center">
          <Link to="/" className="hover:underline">
            Movies
          </Link>
          <Link to="/" className="hover:underline">
            TV Shows
          </Link>
          <Link to="/history" className="hover:underline">
            Search History
          </Link>
        </div>
      </div>

      <div className="flex gap-2 items-center z-50">
        <Link to="/search">
          <SearchIcon className="size-6 cursor-pointer" />
        </Link>
        <img
          src="/avatar2.jpg"
          alt="Avatar"
          className="h-8 rounded cursor-pointer"
        />
        <Link to={"/"}><LogOutIcon className="size-6 cursor-pointer"/></Link>
        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer" onClick={togglemobalimenu} />
        </div>
      </div>

      {mobalimenu && (
        <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
          <Link
            to="/"
            className="block hover:underline p-2"
            onClick={togglemobalimenu}
          >
            Movies
          </Link>
          <Link
            to="/"
            className="block hover:underline p-2"
            onClick={togglemobalimenu}
          >
            TV Shows
          </Link>
          <Link
            to="/history"
            className="block hover:underline p-2"
            onClick={togglemobalimenu}
          >
            Search History
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
