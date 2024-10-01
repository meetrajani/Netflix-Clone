import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
    
  const url = "http://localhost:3030/signup";
  const [setdata] = useState([]);
  const [Udata, setUdata] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  useEffect(() => {
    Fdata();
  }, []);

  const Fdata = () => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  };

  const chang = (e) => {
    setUdata({ ...Udata, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault(); 

    axios.get(url)
      .then((res) => {
        const posts = res.data;
        
        const user = posts.find(post => post.email === Udata.email && post.password === Udata.password);
  
        if (user) {
          console.log("Login successful");
          setErrorMessage(""); 
          setUdata({ email: '', password: '' });
          navigate('/HomeScreen'); 
        } else {
          console.log("Invalid email or password");
          setErrorMessage("Email or Password is incorrect");
          setUdata({ email: '', password: '' }); 
        }
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  return (
    <div className='hero-bg h-screen'>
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <Link to={"/"}>
        <img src="/netflix-logo.png" alt="logo" className='w-52' /></Link>
      </header>
      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
        <h1 className='text-center text-white text-2xl font-bold md-4`'>Login</h1>

        {/* Error message */}
        {errorMessage && <p className='text-red-500 text-center'>{errorMessage}</p>}

        <form className='space-y-4' onSubmit={handleLogin}>
            <div>
                <label htmlFor="email" className='text-sm font-medium text-gray-300 black'>Email</label>
                <input 
                  type="email" 
                  name='email' 
                  value={Udata.email} 
                  onChange={chang} 
                  className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring' 
                  placeholder='you@example.com' 
                  id='email' 
                />
            </div>
            <div>
                <label htmlFor="password" className='text-sm font-medium text-gray-300 black'>Password</label>
                <input 
                  type="password" 
                  name='password' 
                  value={Udata.password} 
                  onChange={chang} 
                  className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring' 
                  placeholder='******' 
                  id='password' 
                />
            </div>
            <button type='submit' className='w-full py-2 mt-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700'>
              Login
            </button>
            <div className="text-center text-gray-400 mt-3">Don't have an account?{" "}
            <Link to={"/signup"} className='text-red-500 hover:underline'>Sign Up</Link>
            </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
