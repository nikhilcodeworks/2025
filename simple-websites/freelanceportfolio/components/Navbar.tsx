"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // GSAP entrance animation
    import("gsap").then((gsap) => {
      gsap.default.from("header", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      });
    });

    const handleScroll = () => {
      const sections = ["home", "services", "projects", "testimonials", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const sectionTop = element.offsetTop - 180; // navbar height buffer
        const sectionHeight = element.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial active state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <nav className="flex items-center justify-between px-6 py-3 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.1)]">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white tracking-wide">
          Nikhil.dev
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative transition-all duration-300 ${isActive
                      ? "text-white font-semibold"
                      : "hover:text-white"
                    }`}
                >
                  {link.name}

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-blue-500 transition-all duration-300" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
}
