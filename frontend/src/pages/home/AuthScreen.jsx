import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import axios from "axios";

const AuthScreen = () => {
  const navigate = useNavigate();
  const [Udata, setUdata] = useState({ email: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const change = (e) => {
    setUdata({ ...Udata, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!Udata.email) {
      setErrorMessage("Email is required");
      return;
    }

    axios
      .get("http://localhost:3030/signup")
      .then((res) => {
        const posts = res.data;

        const user = posts.find((post) => post.email === Udata.email);

        if (user) {
          console.log("Login successful");
          setUdata({ email: "" });
          setErrorMessage(""); 
          navigate("/HomeScreen");
        } else {
          console.log("Invalid email");
          setUdata({ email: "" });
          setErrorMessage("Invalid email. Please try again.");
          navigate("/signup");
        }
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setErrorMessage("An error occurred while processing your request.");
      });
  };

  return (
    <div className="hero-bg relative">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="logo" className="w-32 md:w-52" />
        </Link>
        <Link to={"/login"} className="text-white bg-red-600 py-1 px-2 rounded">
          Sign In
        </Link>
      </header>

      <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited movies, TV <br /> shows, and more
        </h1>
        <p className="text-lg mb-4">Watch anywhere. Cancel anytime.</p>
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="flex flex-col md:flex-row gap-4 w-1/2" onSubmit={formSubmit}>
          <input
            type="email"
            name="email"
            value={Udata.email || ""}
            onChange={change}
            placeholder="Email address"
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
          />
          <button
            type="submit"
            className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center"
          >
            Get Started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>

        {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
      </div>

      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* The rest of your sections */}
      {/* Section 1, 2, 3, 4 */}
      
    </div>
  );
};

export default AuthScreen;
