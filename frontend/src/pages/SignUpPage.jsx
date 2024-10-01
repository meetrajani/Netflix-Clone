import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const url = "http://localhost:3030/signup";
  const [setData] = useState([]);
  const [Udata, setUdata] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    Fdata();
  }, []);

  const Fdata = () => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const chang = (e) => {
    setUdata({ ...Udata, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post(url, Udata)
      .then((res) => {
        console.log(res.data);
        setSuccessMessage("Successfully signed up!");
        setUdata({ email: "", username: "", password: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero-bg h-screen">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="logo" className="w-52" />
        </Link>
      </header>
      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold md-4">
            Sign Up
          </h1>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={Udata.email} 
                onChange={chang}
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="you@example.com"
                id="email"
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                value={Udata.username}
                onChange={chang}
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="Your Name"
                id="username"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={Udata.password} 
                onChange={chang}
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="******"
                id="password"
              />
            </div>
            <button className="w-full py-2 mt-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
              Sign Up{" "}
            </button>
            {successMessage && (
              <p className="text-green-500 text-center mt-3">
                {successMessage}
              </p> 
            )}
            <div className="text-center text-gray-400 mt-3">
              Already a member?{" "}
              <Link to={"/login"} className="text-red-500 hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
