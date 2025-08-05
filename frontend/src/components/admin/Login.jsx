import React, { useState } from "react";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState('')


  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 shadow-xl border border-blue-200 shadow-blue-100 rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-medium">Admin Login</h1>
            <p className="font-light">
              Enter your credentials to access the admin panel
            </p>
          </div>
          <form onSubmit={HandleSubmit} className="mt-6 w-full sm:max-w-md text-gray-600">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
                type="password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full py-3 font-medium text-white bg-blue-500 hover:bg-blue-700 rounded cursor-pointer transition-all">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
