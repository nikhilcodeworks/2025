"use client";

import { services } from "@/data/services";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        ".services-title",
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
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const colors = [
    "from-blue-500 to-cyan-500",
    "from-green-500 to-teal-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500"
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-20 w-32 h-32 bg-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="services-title text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Services I Offer
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive solutions tailored to your needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el }}
              className={`group bg-gradient-to-br ${colors[index % colors.length]} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 text-white border border-white/30 relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-3 opacity-80">✨</div>
                <h3 className="font-bold text-xl group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
