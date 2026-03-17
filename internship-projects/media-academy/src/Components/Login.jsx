import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const validUser = {
    email: "admin@example.com",
    password: "admin123",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email === validUser.email && password === validUser.password) {
      localStorage.setItem("token", "mockAuthToken123");
      navigate("/admin"); // Redirect to Admin Page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-black p-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-xl shadow-xl rounded-2xl p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-center border border-gray-500">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-6">
          🔐 Admin Login
        </h2>

        {error && <p className="text-red-500 bg-red-100 p-2 rounded-md mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="text-left">
            <label className="block text-gray-500 font-medium mb-1">Email:</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border border-gray-500 rounded-lg bg-transparent text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="text-left">
            <label className="block text-gray-500 font-medium mb-1">Password:</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-500 rounded-lg bg-transparent text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105">
            Login 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
