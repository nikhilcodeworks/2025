"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      // Animate description
      gsap.fromTo(
        ".hero-desc",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
        }
      );

      // Animate buttons
      gsap.fromTo(
        ".hero-buttons",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.8,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDuration: '7s' }}></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-15 blur-3xl animate-float" style={{ animationDuration: '9s', animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>

      <div className="relative z-10">
        <h1 className="hero-title text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Freelance Full Stack<br />Developer
        </h1>
        <p className="hero-desc mt-6 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          I help startups & businesses build fast, SEO-friendly and scalable web
          applications using Next.js & MERN Stack.
        </p>

        <div className="hero-buttons mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-400/50 transform"
          >
            Start Project
          </a>
          <a
            href="#projects"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl transform"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
