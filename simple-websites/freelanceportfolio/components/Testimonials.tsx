"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        ".testimonials-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.3,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="testimonials-title text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Real feedback from amazing clients I've worked with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-purple-100 relative overflow-hidden hover:border-purple-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-4 text-2xl">
                  {["⭐", "⭐", "⭐", "⭐", "⭐"].map((star, idx) => (
                    <span key={idx} className="animate-pulse" style={{ animationDelay: `${idx * 0.1}s` }}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-700 text-base italic font-light leading-relaxed mb-6">
                  "Nikhil delivered the project on time with
                  excellent quality. Highly recommended!"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold flex items-center justify-center mr-3 text-lg">
                    {["N", "J", "S"][i]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {["Nikhil Kumar", "John Smith", "Sarah Chen"][i]}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {["Startup Founder", "Product Manager", "Tech Lead"][i]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
