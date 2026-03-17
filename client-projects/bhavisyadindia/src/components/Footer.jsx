// // // // // // import React, { useState } from 'react';
// // // // // // import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowUpIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

// // // // // // const Footer = () => {
// // // // // //   const [hoveredLink, setHoveredLink] = useState(null);

// // // // // //   const quickLinks = [
// // // // // //     { name: 'About Us', href: '#about' },
// // // // // //     { name: 'Our Projects', href: '#projects' },
// // // // // //     { name: 'Team', href: '#team' },
// // // // // //     { name: 'Impact', href: '#impact' },
// // // // // //     { name: 'CSR Partnership', href: '#csr' },
// // // // // //     { name: 'Contact', href: '#contact' }
// // // // // //   ];

// // // // // //   const services = [
// // // // // //     'Dairy Farming Solutions',
// // // // // //     'Organic Agriculture',
// // // // // //     'Bio-Energy Systems',
// // // // // //     'Rural Employment',
// // // // // //     'SHG Development',
// // // // // //     'Skill Training'
// // // // // //   ];

// // // // // //   const csrAreas = [
// // // // // //     'Rural Livelihood',
// // // // // //     'Environmental Protection',
// // // // // //     'Women Empowerment',
// // // // // //     'Renewable Energy',
// // // // // //     'Education & Skilling',
// // // // // //     'Community Development'
// // // // // //   ];

// // // // // //   const scrollToTop = () => {
// // // // // //     window.scrollTo({ top: 0, behavior: 'smooth' });
// // // // // //   };

// // // // // //   const FloatingOrb = ({ delay, size, color, position }) => (
// // // // // //     <div 
// // // // // //       className={`absolute ${position} ${size} ${color} rounded-full blur-3xl animate-pulse opacity-20`}
// // // // // //       style={{
// // // // // //         animationDelay: `${delay}s`,
// // // // // //         animationDuration: '4s'
// // // // // //       }}
// // // // // //     />
// // // // // //   );

// // // // // //   return (
// // // // // //     <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white overflow-hidden">
// // // // // //       {/* Animated Background Elements */}
// // // // // //       <div className="absolute inset-0">
// // // // // //         <FloatingOrb delay={0} size="w-96 h-96" color="bg-gradient-to-r from-purple-500 to-pink-500" position="top-20 -left-20" />
// // // // // //         <FloatingOrb delay={2} size="w-80 h-80" color="bg-gradient-to-r from-blue-500 to-cyan-500" position="top-40 right-10" />
// // // // // //         <FloatingOrb delay={4} size="w-72 h-72" color="bg-gradient-to-r from-green-500 to-emerald-500" position="bottom-20 left-1/3" />
// // // // // //         <FloatingOrb delay={6} size="w-64 h-64" color="bg-gradient-to-r from-orange-500 to-red-500" position="bottom-40 -right-10" />
// // // // // //       </div>

// // // // // //       {/* Grid Pattern */}
// // // // // //       <div className="absolute inset-0 opacity-10">
// // // // // //         <div className="absolute inset-0" style={{
// // // // // //           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
// // // // // //         }} />
// // // // // //       </div>

// // // // // //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // //         {/* Main Footer Content */}
// // // // // //         <div className="py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
// // // // // //           {/* Company Info */}
// // // // // //           <div className="space-y-8">
// // // // // //             <div className="group">
// // // // // //               <div className="flex items-center space-x-4 mb-6">
// // // // // //                 <div className="relative">
// // // // // //                   <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
// // // // // //                   <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-2xl">
// // // // // //                     <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
// // // // // //                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
// // // // // //                     </svg>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <div>
// // // // // //                   <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
// // // // // //                     Bhavisyad India
// // // // // //                   </h3>
// // // // // //                   <p className="text-purple-300 font-medium">Empowering Rural India</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <p className="text-gray-300 leading-relaxed text-lg">
// // // // // //               Integrated Rural Development Company working in dairy, organic farming, bio-energy, 
// // // // // //               and village empowerment sectors across India.
// // // // // //             </p>

// // // // // //             <div className="space-y-4">
// // // // // //               <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
// // // // // //                 <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 group-hover:border-purple-400/50 transition-colors">
// // // // // //                   <EnvelopeIcon className="h-5 w-5 text-purple-300" />
// // // // // //                 </div>
// // // // // //                 <span className="text-gray-300 group-hover:text-white transition-colors">info.founder@bhavisyadindia.com</span>
// // // // // //               </div>
// // // // // //               <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
// // // // // //                 <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 group-hover:border-blue-400/50 transition-colors">
// // // // // //                   <PhoneIcon className="h-5 w-5 text-blue-300" />
// // // // // //                 </div>
// // // // // //                 <span className="text-gray-300 group-hover:text-white transition-colors">+91 8090547100</span>
// // // // // //               </div>
// // // // // //               <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
// // // // // //                 <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 group-hover:border-green-400/50 transition-colors">
// // // // // //                   <MapPinIcon className="h-5 w-5 text-green-300" />
// // // // // //                 </div>
// // // // // //                 <span className="text-gray-300 group-hover:text-white transition-colors">Amethi District, Uttar Pradesh, India</span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Quick Links */}
// // // // // //           <div>
// // // // // //             <h4 className="text-xl font-bold mb-8 flex items-center">
// // // // // //               <SparklesIcon className="h-5 w-5 mr-2 text-purple-400" />
// // // // // //               Quick Links
// // // // // //             </h4>
// // // // // //             <ul className="space-y-4">
// // // // // //               {quickLinks.map((link, index) => (
// // // // // //                 <li key={index}>
// // // // // //                   <a
// // // // // //                     href={link.href}
// // // // // //                     className="relative group text-gray-300 hover:text-white transition-all duration-300 flex items-center py-2"
// // // // // //                     onMouseEnter={() => setHoveredLink(`quick-${index}`)}
// // // // // //                     onMouseLeave={() => setHoveredLink(null)}
// // // // // //                   >
// // // // // //                     <div className={`absolute left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
// // // // // //                       hoveredLink === `quick-${index}` ? 'w-full' : ''
// // // // // //                     }`} />
// // // // // //                     <span className="ml-4 transform transition-transform duration-300 group-hover:translate-x-2">
// // // // // //                       {link.name}
// // // // // //                     </span>
// // // // // //                   </a>
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div>

// // // // // //           {/* Services */}
// // // // // //           {/* <div>
// // // // // //             <h4 className="text-xl font-bold mb-8 flex items-center">
// // // // // //               <HeartIcon className="h-5 w-5 mr-2 text-pink-400" />
// // // // // //               Our Services
// // // // // //             </h4>
// // // // // //             <ul className="space-y-4">
// // // // // //               {services.map((service, index) => (
// // // // // //                 <li key={index} className="group">
// // // // // //                   <div className="flex items-center space-x-3 py-2 hover:bg-white/5 rounded-lg px-2 transition-all duration-300">
// // // // // //                     <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
// // // // // //                     <span className="text-gray-300 group-hover:text-white transition-colors">{service}</span>
// // // // // //                   </div>
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div> */}

// // // // // //           {/* CSR Areas */}
// // // // // //           {/* <div>
// // // // // //             <h4 className="text-xl font-bold mb-8 flex items-center">
// // // // // //               <svg className="h-5 w-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
// // // // // //                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
// // // // // //               </svg>
// // // // // //               CSR Focus Areas
// // // // // //             </h4>
// // // // // //             <ul className="space-y-4">
// // // // // //               {csrAreas.map((area, index) => (
// // // // // //                 <li key={index} className="group">
// // // // // //                   <div className="flex items-center space-x-3 py-2 hover:bg-white/5 rounded-lg px-2 transition-all duration-300">
// // // // // //                     <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
// // // // // //                     <span className="text-gray-300 group-hover:text-white transition-colors">{area}</span>
// // // // // //                   </div>
// // // // // //                 </li>
// // // // // //               ))}
// // // // // //             </ul>
// // // // // //           </div> */}
// // // // // //         </div>

// // // // // //         {/* Mission Statement */}
// // // // // //         <div className="py-12 border-t border-gray-800/50">
// // // // // //           <div className="relative group">
// // // // // //             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
// // // // // //             <div className="relative bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
// // // // // //               <div className="text-center">
// // // // // //                 <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
// // // // // //                   Our Mission
// // // // // //                 </h4>
// // // // // //                 <p className="text-gray-300 max-w-5xl mx-auto text-lg leading-relaxed">
// // // // // //                   "To empower India's rural backbone through sustainable dairy models, cow-based organic 
// // // // // //                   agriculture, and clean village-level bio-energy systems — creating livelihood, dignity, 
// // // // // //                   and independence for millions of farming families."
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Bottom Bar */}
// // // // // //         <div className="py-8 border-t border-gray-800/50">
// // // // // //           <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
// // // // // //             <div className="text-gray-400">
// // // // // //               <p className="flex items-center space-x-2">
// // // // // //                 <span>© 2025 Bhavisyad India Pvt. Ltd.</span>
// // // // // //                 <span className="text-pink-400">•</span>
// // // // // //                 <span>Made with</span>
// // // // // //                 <HeartIcon className="h-4 w-4 text-red-400 animate-pulse" />
// // // // // //                 <span>for Rural India</span>
// // // // // //               </p>
// // // // // //             </div>
            
// // // // // //             {/* <div className="flex items-center space-x-8">
// // // // // //               <span className="text-gray-400">Follow our impact:</span>
// // // // // //               <div className="flex space-x-4">
// // // // // //                 {[
// // // // // //                   { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
// // // // // //                   { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
// // // // // //                   { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
// // // // // //                 ].map((social, index) => (
// // // // // //                   <button
// // // // // //                     key={index}
// // // // // //                     className="group relative p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110"
// // // // // //                   >
// // // // // //                     <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
// // // // // //                     <svg className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
// // // // // //                       <path d={social.icon} />
// // // // // //                     </svg>
// // // // // //                   </button>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div> */}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Scroll to Top Button */}
// // // // // //       <button
// // // // // //         onClick={scrollToTop}
// // // // // //         className="fixed bottom-8 right-8 group bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
// // // // // //       >
// // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // // // //         <ArrowUpIcon className="h-6 w-6 relative z-10 group-hover:animate-bounce" />
// // // // // //       </button>
// // // // // //     </footer>
// // // // // //   );
// // // // // // };

// // // // // // export default Footer;









// // // // // import React from 'react';
// // // // // import {
// // // // //   EnvelopeIcon,
// // // // //   PhoneIcon,
// // // // //   MapPinIcon,
// // // // //   ArrowUpIcon,
// // // // //   SparklesIcon,
// // // // //   HeartIcon
// // // // // } from '@heroicons/react/24/outline';

// // // // // const Footer = () => {
// // // // //   const quickLinks = [
// // // // //     { name: 'About Us', href: '#about' },
// // // // //     { name: 'Our Projects', href: '#projects' },
// // // // //     { name: 'Team', href: '#team' },
// // // // //     { name: 'Impact', href: '#impact' },
// // // // //     { name: 'CSR Partnership', href: '#csr' },
// // // // //     { name: 'Contact', href: '#contact' }
// // // // //   ];

// // // // //   const scrollToTop = () => {
// // // // //     window.scrollTo({ top: 0, behavior: 'smooth' });
// // // // //   };

// // // // //   return (
// // // // //     <footer className="bg-slate-900 text-white">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
// // // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
// // // // //           {/* Company Info */}
// // // // //           <div className="space-y-6">
// // // // //             <div className="flex items-center space-x-4">
// // // // //               <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-2xl">
// // // // //                 <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
// // // // //                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <div>
// // // // //                 <h3 className="text-2xl font-bold text-white">Bhavisyad India</h3>
// // // // //                 <p className="text-purple-300">Empowering Rural India</p>
// // // // //               </div>
// // // // //             </div>

// // // // //             <p className="text-gray-300 leading-relaxed text-base">
// // // // //               Integrated Rural Development Company working in dairy, organic farming, bio-energy,
// // // // //               and village empowerment sectors across India.
// // // // //             </p>

// // // // //             <div className="space-y-4 text-sm">
// // // // //               <div className="flex items-center space-x-3">
// // // // //                 <EnvelopeIcon className="h-5 w-5 text-purple-300" />
// // // // //                 <span className="text-gray-300">info.founder@bhavisyadindia.com</span>
// // // // //               </div>
// // // // //               <div className="flex items-center space-x-3">
// // // // //                 <PhoneIcon className="h-5 w-5 text-blue-300" />
// // // // //                 <span className="text-gray-300">+91 8090547100</span>
// // // // //               </div>
// // // // //               <div className="flex items-center space-x-3">
// // // // //                 <MapPinIcon className="h-5 w-5 text-green-300" />
// // // // //                 <span className="text-gray-300">Amethi District, Uttar Pradesh, India</span>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Quick Links */}
// // // // //           <div>
// // // // //             <h4 className="text-xl font-semibold mb-6 flex items-center">
// // // // //               <SparklesIcon className="h-5 w-5 mr-2 text-purple-400" />
// // // // //               Quick Links
// // // // //             </h4>
// // // // //             <ul className="space-y-3 text-gray-300 text-base">
// // // // //               {quickLinks.map((link, index) => (
// // // // //                 <li key={index}>
// // // // //                   <a
// // // // //                     href={link.href}
// // // // //                     className="hover:text-white transition-colors"
// // // // //                   >
// // // // //                     {link.name}
// // // // //                   </a>
// // // // //                 </li>
// // // // //               ))}
// // // // //             </ul>
// // // // //           </div>

// // // // //           {/* Mission */}
// // // // //           <div>
// // // // //             <h4 className="text-xl font-semibold mb-6">Our Mission</h4>
// // // // //             <p className="text-gray-300 text-base leading-relaxed">
// // // // //               "To empower India's rural backbone through sustainable dairy models, organic farming,
// // // // //               and clean bio-energy — building dignity and livelihoods for farming families."
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Bottom Bar */}
// // // // //         <div className="mt-12 border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
// // // // //           <p className="flex items-center gap-2">
// // // // //             © 2025 Bhavisyad India Pvt. Ltd. <span className="text-pink-400">•</span>
// // // // //             Made with <HeartIcon className="h-4 w-4 text-red-400 animate-pulse" />
// // // // //             for Rural India
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Scroll to Top Button */}
// // // // //       <button
// // // // //         onClick={scrollToTop}
// // // // //         className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-2xl transition hover:scale-110 z-50"
// // // // //         aria-label="Scroll to top"
// // // // //       >
// // // // //         <ArrowUpIcon className="h-5 w-5" />
// // // // //       </button>
// // // // //     </footer>
// // // // //   );
// // // // // };

// // // // // export default Footer;















// // // // import React from 'react';
// // // // import {
// // // //   EnvelopeIcon,
// // // //   PhoneIcon,
// // // //   MapPinIcon,
// // // //   HeartIcon,
// // // // } from '@heroicons/react/24/outline';

// // // // const Footer = () => {
// // // //   return (
// // // //     <footer className="bg-slate-900 text-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
// // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
// // // //           {/* Company Info */}
// // // //           <div className="space-y-5">
// // // //             <div className="flex items-center space-x-3">
// // // //               <img
// // // //                 src="/image-removebg-preview.png"
// // // //                 alt="Bhavisyad India Logo"
// // // //                 className="h-12 w-auto object-contain"
// // // //               />
// // // //               <div>
// // // //                 <h3 className="text-xl font-bold text-white">Bhavisyad India</h3>
// // // //                 <p className="text-sm text-slate-300">Empowering Rural India</p>
// // // //               </div>
// // // //             </div>
// // // //             <p className="text-slate-400 text-sm leading-relaxed">
// // // //               Integrated Rural Development Company working in dairy, organic farming, bio-energy,
// // // //               and village empowerment across India.
// // // //             </p>
// // // //             <div className="space-y-2 text-sm text-slate-300">
// // // //               <div className="flex items-center gap-2">
// // // //                 <EnvelopeIcon className="h-5 w-5 text-purple-300" />
// // // //                 <span>info.founder@bhavisyadindia.com</span>
// // // //               </div>
// // // //               <div className="flex items-center gap-2">
// // // //                 <PhoneIcon className="h-5 w-5 text-blue-300" />
// // // //                 <span>+91 8090547100</span>
// // // //               </div>
// // // //               <div className="flex items-center gap-2">
// // // //                 <MapPinIcon className="h-5 w-5 text-green-300" />
// // // //                 <span>Amethi District, Uttar Pradesh, India</span>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Quick Links */}
// // // //           <div>
// // // //             <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
// // // //             <ul className="space-y-2 text-slate-300 text-sm">
// // // //               {[
// // // //                 { name: 'Home', href: '#home' },
// // // //                 { name: 'About Us', href: '#about' },
// // // //                 { name: 'Projects', href: '#projects' },
// // // //                 { name: 'Team', href: '#team' },
// // // //                 { name: 'Impact', href: '#impact' },
// // // //                 { name: 'CSR Partnership', href: '#csr' },
// // // //                 { name: 'Contact', href: '#contact' },
// // // //               ].map((link, index) => (
// // // //                 <li key={index}>
// // // //                   <a
// // // //                     href={link.href}
// // // //                     className="hover:text-white transition-colors duration-200"
// // // //                   >
// // // //                     {link.name}
// // // //                   </a>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>

// // // //           {/* Mission Statement */}
// // // //           <div>
// // // //             <h4 className="text-lg font-semibold mb-4 text-white">Our Mission</h4>
// // // //             <p className="text-slate-400 text-sm leading-relaxed">
// // // //               "To empower India's rural backbone through sustainable dairy models, organic farming,
// // // //               and village-level bio-energy systems — creating livelihood and dignity for farming families."
// // // //             </p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Bottom bar */}
// // // //         <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
// // // //           <p className="flex items-center justify-center gap-2">
// // // //             © 2025 Bhavisyad India Pvt. Ltd.
// // // //             <span className="text-pink-400">•</span>
// // // //             Made with <HeartIcon className="h-4 w-4 text-red-400 animate-pulse" />
// // // //             for Rural India
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </footer>
// // // //   );
// // // // };

// // // // export default Footer;
// // // import React from 'react';
// // // import {
// // //   EnvelopeIcon,
// // //   PhoneIcon,
// // //   MapPinIcon,
// // //   HeartIcon,
// // // } from '@heroicons/react/24/outline';

// // // const Footer = () => {
// // //   return (
// // //     <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
// // //           {/* Company Info */}
// // //           <div className="space-y-6">
// // //             <div className="flex items-center space-x-3">
// // //               <img
// // //                 src="/image-removebg-preview.png"
// // //                 alt="Bhavisyad India Logo"
// // //                 className="h-14 w-auto object-contain"
// // //               />
// // //               <div>
// // //                 <h3 className="text-2xl font-bold text-white">Bhavisyad India</h3>
// // //                 <p className="text-sm text-purple-300">Empowering Rural India</p>
// // //               </div>
// // //             </div>
// // //             <p className="text-slate-400 text-base leading-relaxed">
// // //               Integrated Rural Development Company working in dairy, organic farming, bio-energy,
// // //               and rural empowerment across India.
// // //             </p>
// // //             <div className="space-y-3 text-sm text-slate-300">
// // //               <div className="flex items-center gap-2">
// // //                 <EnvelopeIcon className="h-5 w-5 text-pink-400" />
// // //                 <span>info.founder@bhavisyadindia.com</span>
// // //               </div>
// // //               <div className="flex items-center gap-2">
// // //                 <PhoneIcon className="h-5 w-5 text-blue-400" />
// // //                 <span>+91 8090547100</span>
// // //               </div>
// // //               <div className="flex items-center gap-2">
// // //                 <MapPinIcon className="h-5 w-5 text-green-400" />
// // //                 <span>Amethi District, Uttar Pradesh, India</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Quick Links */}
// // //           <div>
// // //             <h4 className="text-xl font-semibold mb-6 text-white border-b border-slate-600 pb-2 inline-block">
// // //               Quick Links
// // //             </h4>
// // //             <ul className="space-y-4 text-base">
// // //               {[
// // //                 { name: 'Home', href: '#home' },
// // //                 { name: 'About Us', href: '#about' },
// // //                 { name: 'Projects', href: '#projects' },
// // //                 { name: 'Team', href: '#team' },
// // //                 { name: 'Impact', href: '#impact' },
// // //                 { name: 'CSR Partnership', href: '#csr' },
// // //                 { name: 'Contact', href: '#contact' },
// // //               ].map((link, i) => (
// // //                 <li key={i}>
// // //                   <a
// // //                     href={link.href}
// // //                     className="text-slate-300 hover:text-white transition-colors hover:pl-2 duration-200 block"
// // //                   >
// // //                     {link.name}
// // //                   </a>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Mission Statement */}
// // //           <div>
// // //             <h4 className="text-xl font-semibold mb-6 text-white border-b border-slate-600 pb-2 inline-block">
// // //               Our Mission
// // //             </h4>
// // //             <p className="text-slate-400 text-base leading-relaxed">
// // //               "To empower India's rural backbone through sustainable dairy models, cow-based
// // //               organic farming, and bio-energy systems — bringing dignity & independence to
// // //               farming families."
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Bottom Line */}
// // //         <div className="mt-16 pt-6 border-t border-slate-700 text-center text-sm text-slate-400">
// // //           <p className="flex items-center justify-center gap-2">
// // //             © 2025 Bhavisyad India Pvt. Ltd.
// // //             <span className="text-pink-400">•</span>
// // //             Made with <HeartIcon className="h-4 w-4 text-red-400 animate-pulse" />
// // //             for Rural India
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // export default Footer;











// // import React from 'react';
// // import {
// //   EnvelopeIcon,
// //   PhoneIcon,
// //   MapPinIcon,
// //   HeartIcon,
// // } from '@heroicons/react/24/outline';

// // const Footer = () => {
// //   return (
// //     <footer className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 text-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //           {/* Company Info */}
// //           <div className="space-y-6">
// //             <div className="flex items-center space-x-3">
// //               <img
// //                 src="/image-removebg-preview.png"
// //                 alt="Bhavisyad India Logo"
// //                 className="h-14 w-auto object-contain"
// //               />
// //               <div>
// //                 <h3 className="text-2xl font-bold text-white">Bhavisyad India</h3>
// //                 <p className="text-sm text-blue-200">Empowering Rural India</p>
// //               </div>
// //             </div>
// //             <p className="text-blue-100 text-base leading-relaxed">
// //               Integrated Rural Development Company working in dairy, organic farming, bio-energy,
// //               and village empowerment across India.
// //             </p>
// //             <div className="space-y-3 text-sm text-blue-200">
// //               <div className="flex items-center gap-2">
// //                 <EnvelopeIcon className="h-5 w-5 text-blue-300" />
// //                 <span>info.founder@bhavisyadindia.com</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <PhoneIcon className="h-5 w-5 text-blue-300" />
// //                 <span>+91 8090547100</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <MapPinIcon className="h-5 w-5 text-blue-300" />
// //                 <span>Amethi District, Uttar Pradesh, India</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Mission Statement */}
// //           <div className="flex flex-col justify-center">
// //             <h4 className="text-xl font-semibold mb-6 text-white border-b border-blue-600 pb-2 inline-block">
// //               Our Mission
// //             </h4>
// //             <p className="text-blue-100 text-base leading-relaxed">
// //               "To empower India's rural backbone through sustainable dairy models, cow-based organic
// //               farming, and bio-energy systems — bringing dignity & independence to farming families."
// //             </p>
// //           </div>
// //         </div>

// //         {/* Bottom Line */}
// //         <div className="mt-16 pt-6 border-t border-blue-700 text-center text-sm text-blue-300">
// //           <p className="flex items-center justify-center gap-2">
// //             © 2025 Bhavisyad India Pvt. Ltd.
// //             <span className="text-blue-400">•</span>
// //             Made with <HeartIcon className="h-4 w-4 text-red-400 animate-pulse" />
// //             for Rural India
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;








// import React from 'react';
// import {
//   EnvelopeIcon,
//   PhoneIcon,
//   MapPinIcon,
//   HeartIcon,
// } from '@heroicons/react/24/outline';

// const Footer = () => {
//   return (
//     <footer className="bg-white text-slate-800 border-t border-slate-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Company Info */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-3">
//               <img
//                 src="/image-removebg-preview.png"
//                 alt="Bhavisyad India Logo"
//                 className="h-14 w-auto object-contain"
//               />
//               <div>
//                 <h3 className="text-2xl font-bold text-blue-700">Bhavisyad India</h3>
//                 <p className="text-sm text-blue-500">Empowering Rural India</p>
//               </div>
//             </div>
//             <p className="text-base leading-relaxed text-slate-600">
//               Integrated Rural Development Company working in dairy, organic farming, bio-energy,
//               and village empowerment across India.
//             </p>
//             <div className="space-y-3 text-sm text-slate-600">
//               <div className="flex items-center gap-2">
//                 <EnvelopeIcon className="h-5 w-5 text-blue-600" />
//                 <span>info.founder@bhavisyadindia.com</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <PhoneIcon className="h-5 w-5 text-blue-600" />
//                 <span>+91 8090547100</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPinIcon className="h-5 w-5 text-blue-600" />
//                 <span>Amethi District, Uttar Pradesh, India</span>
//               </div>
//             </div>
//           </div>

//           {/* Mission Statement */}
//           <div className="flex flex-col justify-center">
//             <h4 className="text-xl font-semibold mb-6 text-blue-700 border-b border-blue-200 pb-2 inline-block">
//               Our Mission
//             </h4>
//             <p className="text-slate-600 text-base leading-relaxed">
//               "To empower India's rural backbone through sustainable dairy models, cow-based organic
//               farming, and bio-energy systems — bringing dignity & independence to farming families."
//             </p>
//           </div>
//         </div>

//         {/* Bottom Line */}
//         <div className="mt-16 pt-6 border-t border-slate-200 text-center text-sm text-slate-500">
//           <p className="flex items-center justify-center gap-2">
//             © 2025 Bhavisyad India Pvt. Ltd.
//             <span className="text-blue-500">•</span>
//             Made with <HeartIcon className="h-4 w-4 text-red-400 animate-pulse" />
//             for Rural India
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






// import React from 'react';
// import {
//   EnvelopeIcon,
//   PhoneIcon,
//   MapPinIcon,
//   HeartIcon,
// } from '@heroicons/react/24/solid';

// const Footer = () => {
//   return (
//     <footer className="bg-white text-slate-800 border-t border-slate-200">
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Left Section - Logo + Info */}
//           <div>
//             <div className="flex items-center space-x-4 mb-4">
//               <img
//                 src="/image-removebg-preview.png"
//                 alt="Bhavisyad India Logo"
//                 className="h-16 w-auto object-contain"
//               />
//               <div>
//                 <h3 className="text-2xl font-bold text-blue-700">Bhavisyad India</h3>
//                 <p className="text-sm text-blue-500 font-medium">Empowering Rural India</p>
//               </div>
//             </div>

//             <p className="text-base text-slate-700 mb-6 leading-relaxed">
//               Integrated Rural Development Company working in dairy, organic farming, bio-energy,
//               and village empowerment across India.
//             </p>

//             <div className="space-y-3 text-base text-slate-600">
//               <div className="flex items-center gap-2">
//                 <EnvelopeIcon className="h-5 w-5 text-blue-600" />
//                 <span>info.founder@bhavisyadindia.com</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <PhoneIcon className="h-5 w-5 text-blue-600" />
//                 <span>+91 8090547100</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPinIcon className="h-5 w-5 text-blue-600" />
//                 <span>Amethi District, Uttar Pradesh, India</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Mission */}
//           <div>
//             <h4 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-100 pb-2">
//               Our Mission
//             </h4>
//             {/* <p className="text-base text-slate-700 leading-relaxed">
//               "To empower India's rural backbone through sustainable dairy models, cow-based organic
//               farming, and bio-energy systems — bringing dignity & independence to farming families."
//             </p> */}

//             <p className="text-base text-slate-700 leading-relaxed">
//   "To transform rural India by enabling village-based enterprises powered by indigenous cattle, 
//   organic farming, and clean bio-energy — creating sustainable livelihoods, reducing chemical dependence, 
//   and empowering women and youth through decentralized, SHG-led development models."
// </p>

//           </div>
//         </div>

//         {/* Footer Bottom Bar */}
//         <div className="mt-16 border-t border-slate-200 pt-4 flex flex-col sm:flex-row items-center  justify-between text-sm text-slate-500">
//           <p>© 2025 Bhavisyad India Pvt. Ltd.</p>
//           <p className="flex items-center gap-1 mt-2 sm:mt-0">
//             Made with
//             <HeartIcon className="h-4 w-4 text-red-500 animate-pulse" />
//             for India
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;














// Footer.jsx
import React from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  HeartIcon,
} from '@heroicons/react/24/solid';

const Footer = ({ language }) => {
  // Language-specific content
  const translations = {
    en: {
      companyName: 'Bhavisyad India',
      slogan: 'Empowering Rural India',
      description:
        'Integrated Rural Development Company working in dairy, organic farming, bio-energy, and village empowerment across India.',
      contactInfo: [
        {
          icon: <EnvelopeIcon className="h-5 w-5 text-blue-600" />,
          value: 'info.founder@bhavisyadindia.com',
        },
        {
          icon: <PhoneIcon className="h-5 w-5 text-blue-600" />,
          value: '+91 8090547100',
        },
        {
          icon: <MapPinIcon className="h-5 w-5 text-blue-600" />,
          value: 'Amethi District, Uttar Pradesh, India',
        },
      ],
      missionTitle: 'Our Mission',
      mission:
        'To transform rural India by enabling village-based enterprises powered by indigenous cattle, organic farming, and clean bio-energy — creating sustainable livelihoods, reducing chemical dependence, and empowering women and youth through decentralized, SHG-led development models.',
      footerText: {
        copyright: '© 2025 Bhavisyad India Pvt. Ltd.',
        madeWith: 'Made with',
        forIndia: 'for India',
      },
    },
    hi: {
      companyName: 'भविष्यद इंडिया',
      slogan: 'ग्रामीण भारत को सशक्त बनाना',
      description:
        'डेयरी, जैविक खेती, जैव-ऊर्जा और भारत भर में गाँव सशक्तिकरण में काम करने वाली एकीकृत ग्रामीण विकास कंपनी।',
      contactInfo: [
        {
          icon: <EnvelopeIcon className="h-5 w-5 text-blue-600" />,
          value: 'info.founder@bhavisyadindia.com',
        },
        {
          icon: <PhoneIcon className="h-5 w-5 text-blue-600" />,
          value: '+91 8090547100',
        },
        {
          icon: <MapPinIcon className="h-5 w-5 text-blue-600" />,
          value: 'अमेठी जिला, उत्तर प्रदेश, भारत',
        },
      ],
      missionTitle: 'हमारा मिशन',
      mission:
        'स्वदेशी मवेशियों, जैविक खेती और स्वच्छ जैव-ऊर्जा द्वारा संचालित गाँव-आधारित उद्यमों को सक्षम करके ग्रामीण भारत को बदलना — स्थायी आजीविका सृजन, रासायनिक निर्भरता को कम करना, और विकेन्द्रीकृत, स्वयं सहायता समूह-नेतृत्व वाले विकास मॉडलों के माध्यम से महिलाओं और युवाओं को सशक्त बनाना।',
      footerText: {
        copyright: '© 2025 भविष्यद इंडिया प्राइवेट लिमिटेड',
        madeWith: 'प्यार के साथ बनाया गया',
        forIndia: 'भारत के लिए',
      },
    },
  };

  const content = translations[language];

  return (
    <footer className="bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Logo + Info */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/image-removebg-preview.png"
                alt={content.companyName}
                className="h-16 w-auto object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-blue-700">{content.companyName}</h3>
                <p className="text-sm text-blue-500 font-medium">{content.slogan}</p>
              </div>
            </div>

            <p className="text-base text-slate-700 mb-6 leading-relaxed">
              {content.description}
            </p>

            <div className="space-y-3 text-base text-slate-600">
              {content.contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-2">
                  {info.icon}
                  <span>{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Mission */}
          <div>
            <h4 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-100 pb-2">
              {content.missionTitle}
            </h4>
            <p className="text-base text-slate-700 leading-relaxed">
              {content.mission}
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 border-t border-slate-200 pt-4 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
          <p>{content.footerText.copyright}</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            {content.footerText.madeWith}
            <HeartIcon className="h-4 w-4 text-red-500 animate-pulse" />
            {content.footerText.forIndia}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;