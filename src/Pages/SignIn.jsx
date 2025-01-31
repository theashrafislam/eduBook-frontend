import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    // Implement login logic here
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google');
    // Implement Google authentication here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">Sign in to Your Account</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="my-4 flex items-center justify-center">
          <hr className="w-full border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-red-500 p-2 text-white hover:bg-red-600"
        >
          <FaGoogle /> Login with Google
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Forgot password? <a href="#" className="text-blue-500 hover:underline">Reset here</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
