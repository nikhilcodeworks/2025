import React, { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import "./ForgotPassword.css";
import { useNavigate, Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

  return (
    <div className="max-h-screen">
      <section className="border-red-500 totaldivcolor min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-5xl">
          <div className="md:w-1/2 px-5 mt-0 md:mt-[5%]">
          <img
                  src="/Loginimg/Logo.svg"
                  alt="Company Logo"
                  className="logoAdmin"
                />
            <h2 className="text-2xl font-bold text-[#03033D] text-center">Forgot Password</h2>
            {/* <p className="text-sm mt-4 text-[#03033D] text-center">If you have an account, please login</p> */}
            <button className="back-button" onClick={handleBack}>
                                    <IoChevronBackSharp/>
                                    <i className="fa fa-angle-left"></i> Back
                                </button>
            <form className="mt-6" method="POST" >
              <div>
                <label className="block text-gray-700 mt-2">Email Address</label>
                <input 
                type="email"
                id="email"
                placeholder="yourname@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}                
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
                autoComplete="true" 
                required />
              </div>

              
             

              <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-6 cursor-pointer">Submit</button>
            </form>

            {/* <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-500" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
              <span className = "ml-4">Login with Google</span>
            </button>

            <div className="text-sm flex justify-between items-center mt-3">
              <p>If you don't have an account...</p>
              <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Register</button>
            </div> */}
          </div>

          <div className="w-1/2 md:flex  hidden items-center justify-center">
            <img src="https://img.freepik.com/premium-vector/online-recruitment-concept-people-searching-candidate-new-employee-hiring-concept-illustration_138260-629.jpg" 
            className="rounded-2xl max-h-screen object-contain" alt="page img" />
          </div>

        </div>
      </section>
    </div>
  )
}

export default ForgotPassword
