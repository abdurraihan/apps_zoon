// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password:', password);
   if(password == 12345678 || 222){
    navigate('/apps');
    }

  };

  return (
    <div className=" bg-slate-700 min-h-screen flex items-center justify-center">
      <form className="bg-tranfprent p-8 shadow-lg rounded-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="password" className="block text-4xl font-bold text-white font-semibold mb-2">
            Key ?
          </label>
          <input
            type="password" // Set the type to "password" for password input
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your Key"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
