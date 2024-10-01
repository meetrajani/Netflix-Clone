import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { Info, Play } from "lucide-react";
import axios from "axios";

const HomeScreen = () => {
  const [data ,setdata]=useState([]);
  const url = "http://localhost:3030/movies"

  useEffect(()=>{
    Fdata()
  },[])
  const Fdata = () =>{
    axios.get(url).then((res)=>{
      setdata(res.data)
      Fdata()
    })
  }
  return (
    <>
      <div className="relative h-screen text-white">
        <Navbar />
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
          src="/extraction.jpg"
          alt="img"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
          <div
            className="bg-gradient-to-b from-black via-transparent to-transparent 
					absolute w-full h-full top-0 left-0 -z-10"
          />

          <div className="max-w-2xl">
            <h1 className="mt-4 text-6l font-extralight text-balance">
              Extraction
            </h1>
            <p className="mt-2 text-lg">2014 | 18+</p>
            <p className="mt-4 text-lg">
              chris Hemsworth stars in this nonstop axtion-thriller with
              redhraksh <br /> jaiswal, randeep Hooda and <br /> Golshifteh
              Farahani.
            </p>
          </div>
          <div className="flex mt-8">
            <Link className="bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center">
              <Play className="size-6 inline-block mr-2 fill-black" />
              Play
            </Link>
            <Link className="bg-gray-500/70 hover:bg-gray-500 py-2 px-4 rounded mr-4 flex items-center">
              <Info className="size-6 mr-2" />
              More Info
            </Link>
          </div>
        </div>
      </div>
      <div className="py-5 bg-black">
      <div className="flex flex-wrap justify-center">
  {data.map((movie, index) => {
    return (
      <div key={index} className="flex justify-center p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="movie-box border rounded-lg p-4 shadow-md w-80 m-2 max-w">
          <img src={movie.img} alt={movie.title} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
          <p className="text-gray-700 text-2xl">{movie.director}</p>
          <p className="text-gray-700">Release Year: {movie.release_year}</p>
          <p className="text-gray-700">Genre: {movie.genre}</p>
          <p className="text-gray-700 text-lg">Rating: {movie.rating}</p>
          <a href={movie.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
            View Movie
          </a>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </>
  );
};

export default HomeScreen;
