// // import React, { useState, useEffect } from 'react';
// // import {
// //   UserGroupIcon,
// //   StarIcon,
// //   HeartIcon,
// //   BoltIcon,
// //   BuildingOfficeIcon,
// //   CogIcon,
// //   ComputerDesktopIcon,
// // } from '@heroicons/react/24/outline';

// // import { SiGmail, SiX, SiLinkedin } from 'react-icons/si';
// // import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

// // const Team = () => {
// //   const [activeCard, setActiveCard] = useState(null);
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       setMousePosition({ x: e.clientX, y: e.clientY });
// //     };
// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   const allTeam = [
// //     {
// //       name: 'Priyanshu Shukla',
// //       role: 'Founder & CEO',
// //       image: './founder.jpeg',
// //       bio: 'Visionary leader committed to transforming rural India through sustainable development models.',
// //       email: '#contact',
// //       phone: '+918318068648',
// //       icon: StarIcon,
// //       gradient: 'from-blue-600 via-purple-600 to-pink-600',
// //       bgGradient: 'from-blue-500/20 via-purple-500/20 to-pink-500/20',
// //       glowColor: 'rgba(147, 51, 234, 0.3)',
// //       socials: {
// //         x: 'https://x.com/bhavisyadindia',
// //         instagram: 'https://www.instagram.com/bhavisyadindia',
// //         facebook: 'https://www.facebook.com/share/16ttEG2DNy/',
// //         linkedin: 'https://www.linkedin.com/in/priyanshu-shukla-5939a9220',
// //       },
// //     },
// //     {
// //       name: 'Druvodhan Singh',
// //       role: 'Director',
// //       image: './Duyodhan.jpeg',
// //       bio: 'Strategic planning and operations management expert with deep rural development experience.',
// //       icon: BuildingOfficeIcon,
// //       gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
// //       bgGradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
// //       glowColor: 'rgba(5, 150, 105, 0.3)',
// //     },
// //     {
// //       name: 'Sooraj Singh',
// //       role: 'Project Director',
// //       image: './sooraj.jpeg',
// //       bio: 'Rural development specialist focusing on sustainable agricultural practices.',
// //       icon: BuildingOfficeIcon,
// //       gradient: 'from-green-600 via-emerald-600 to-teal-600',
// //       bgGradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
// //       glowColor: 'rgba(34, 197, 94, 0.3)',
// //     },
// //     {
// //       name: 'Ratnesh Mishra',
// //       role: 'Planning & Execution',
// //       image: './ratnesh.jpeg',
// //       bio: 'Project management and execution specialist with extensive field experience.',
// //       icon: CogIcon,
// //       gradient: 'from-orange-600 via-red-600 to-pink-600',
// //       bgGradient: 'from-orange-500/20 via-red-500/20 to-pink-500/20',
// //       glowColor: 'rgba(234, 88, 12, 0.3)',
// //     },
// //     {
// //       name: 'Dilip Kumar Shukla',
// //       role: 'Planning & Execution',
// //       image: './dilip.jpeg',
// //       bio: 'Operations and logistics coordinator for rural development projects.',
// //       icon: CogIcon,
// //       gradient: 'from-yellow-600 via-orange-600 to-red-600',
// //       bgGradient: 'from-yellow-500/20 via-orange-500/20 to-red-500/20',
// //       glowColor: 'rgba(234, 179, 8, 0.3)',
// //     },
// //     {
// //       name: 'Sumi Seal',
// //       role: 'HR & Core Member',
// //       image: './sumi.jpeg',
// //       bio: 'Human resources and team development specialist.',
// //       icon: HeartIcon,
// //       gradient: 'from-pink-600 via-rose-600 to-red-600',
// //       bgGradient: 'from-pink-500/20 via-rose-500/20 to-red-500/20',
// //       glowColor: 'rgba(236, 72, 153, 0.3)',
// //     },
// //     {
// //       name: 'Dr. Ram Singh',
// //       role: 'Business Development & Animal Husbandry',
// //       image: './ram.jpeg',
// //       bio: 'Veterinary expert and business development coordinator.',
// //       icon: BoltIcon,
// //       gradient: 'from-indigo-600 via-purple-600 to-blue-600',
// //       bgGradient: 'from-indigo-500/20 via-purple-500/20 to-blue-500/20',
// //       glowColor: 'rgba(99, 102, 241, 0.3)',
// //     },
// //     {
// //       name: 'Shivam Shukla',
// //       role: 'Digital Marketing',
// //       image: './shivam.jpeg',
// //       bio: 'Digital marketing and online presence management.',
// //       icon: ComputerDesktopIcon,
// //       gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
// //       bgGradient: 'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
// //       glowColor: 'rgba(59, 130, 246, 0.3)',
// //     },
// //     {
// //       name: 'Rachit Shukla',
// //       role: 'Web Developer',
// //       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
// //       bio: 'Technical development and web platform management.',
// //       icon: ComputerDesktopIcon,
// //       gradient: 'from-violet-600 via-fuchsia-600 to-purple-600',
// //       bgGradient: 'from-violet-500/20 via-fuchsia-500/20 to-purple-500/20',
// //       glowColor: 'rgba(20, 184, 166, 0.3)',
// //     },
// //     {
// //       name: 'Aarti',
// //       role: 'Graphic Designer',
// //       image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
// //       bio: 'Visual design and creative content development.',
// //       icon: ComputerDesktopIcon,
// //       gradient: 'from-rose-600 via-pink-600 to-fuchsia-600',
// //       bgGradient: 'from-rose-500/20 via-pink-500/20 to-fuchsia-500/20',
// //       glowColor: 'rgba(168, 85, 247, 0.3)',
// //     },
// //   ];

// //   const TeamCard = ({ member, index }) => {
// //     const [isHovered, setIsHovered] = useState(false);
    
// //     return (
// //       <div
// //         className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-6 cursor-pointer ${
// //           activeCard === index ? 'scale-105 -translate-y-6' : ''
// //         }`}
// //         style={{
// //           filter: isHovered ? `drop-shadow(0 25px 50px ${member.glowColor})` : 'none',
// //         }}
// //         onMouseEnter={() => {
// //           setActiveCard(index);
// //           setIsHovered(true);
// //         }}
// //         onMouseLeave={() => {
// //           setActiveCard(null);
// //           setIsHovered(false);
// //         }}
// //       >
// //         {/* Animated Border */}
// //         <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
        
// //         {/* Colorful Glassmorphism Background */}
// //         <div className={`absolute inset-0 bg-gradient-to-br ${member.bgGradient} backdrop-blur-xl rounded-3xl border border-white/20`} />
        
// //         {/* Dynamic Gradient Overlay */}
// //         <div 
// //           className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-3xl`}
// //           style={{
// //             background: isHovered ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${member.glowColor}, transparent 50%)` : undefined,
// //           }}
// //         />
        
// //         {/* Card Content */}
// //         <div className="relative bg-white/30 backdrop-blur-sm border border-white/40 rounded-3xl p-8 text-center h-full flex flex-col shadow-2xl group-hover:shadow-3xl transition-all duration-700">
          
// //           {/* Floating Particles Effect */}
// //           <div className="absolute inset-0 overflow-hidden rounded-3xl">
// //             {[...Array(6)].map((_, i) => (
// //               <div
// //                 key={i}
// //                 className={`absolute w-1 h-1 bg-gradient-to-r ${member.gradient} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
// //                 style={{
// //                   left: `${20 + i * 15}%`,
// //                   top: `${10 + i * 20}%`,
// //                   animationDelay: `${i * 0.2}s`,
// //                 }}
// //               />
// //             ))}
// //           </div>

// //           {/* Profile Section */}
// //           <div className="flex justify-center mb-6 relative z-10">
// //             <div className="relative group/image">
// //               {/* Animated Ring */}
// //               <div className={`absolute -inset-2 bg-gradient-to-r ${member.gradient} rounded-full blur-md opacity-0 group-hover:opacity-75 transition-all duration-500 animate-spin-slow`} />
              
// //               {/* Image Container */}
// //               <div className="relative">
// //                 <img
// //                   src={member.image}
// //                   alt={member.name}
// //                   className="relative w-36 h-36 rounded-full object-cover border-4 border-white/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:border-white/80"
// //                 />
                
// //                 {/* Floating Icon */}
// //                 <div className={`absolute -bottom-3 -right-3 w-14 h-14 rounded-2xl bg-gradient-to-r ${member.gradient} p-3 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1`}>
// //                   {React.createElement(member.icon, { 
// //                     className: 'h-8 w-8 text-white drop-shadow-lg' 
// //                   })}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Member Info */}
// //           <div className="flex-grow relative z-10">
// //             <h4 className="text-2xl font-black text-white mb-2 drop-shadow-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-100 group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-500">
// //               {member.name}
// //             </h4>
            
// //             <div className="relative mb-4">
// //               <p className={`text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
// //                 {member.role}
// //               </p>
// //               <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r ${member.gradient} group-hover:w-full transition-all duration-500`} />
// //             </div>
            
// //             <p className="text-white/90 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">
// //               {member.bio}
// //             </p>
// //           </div>

// //           {/* Social Links for Founder & CEO */}
// //           {member.role === 'Founder & CEO' && (
// //             <div className="relative z-10 mt-8 pt-6 border-t border-white/20">
// //               <div className="flex flex-wrap justify-center gap-4">
// //                 {[
// //                   { icon: SiGmail, href: member.email, bg: 'from-red-500 to-red-600', title: 'Contact via Email' },
// //                   { icon: FaWhatsapp, href: `https://wa.me/${member.phone.replace(/\D/g, '')}`, bg: 'from-green-500 to-green-600', title: 'Contact via WhatsApp', target: '_blank' },
// //                   { icon: FaInstagram, href: member.socials.instagram, bg: 'from-pink-500 to-pink-600', title: 'Follow on Instagram', target: '_blank' },
// //                   { icon: SiX, href: member.socials.x, bg: 'from-gray-800 to-black', title: 'Follow on X', target: '_blank' },
// //                   { icon: FaFacebook, href: member.socials.facebook, bg: 'from-blue-600 to-blue-700', title: 'Follow on Facebook', target: '_blank' },
// //                   { icon: SiLinkedin, href: member.socials.linkedin, bg: 'from-blue-800 to-blue-900', title: 'Connect on LinkedIn', target: '_blank' },
// //                 ].map((social, i) => (
// //                   <a
// //                     key={i}
// //                     href={social.href}
// //                     {...(social.target && { target: social.target, rel: 'noreferrer' })}
// //                     className={`w-12 h-12  flex items-center justify-center bg-gradient-to-r ${social.bg} rounded-2xl text-white hover:scale-110 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 `}
// //                     title={social.title}
// //                     style={{
// //                       animationDelay: `${i * 0.1}s`,
// //                     }}
// //                   >
// //                     {React.createElement(social.icon, { className: 'w-5 h-5' })}
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <section
// //       id="team"
// //       className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
// //     >
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0">
// //         {/* Floating Orbs */}
// //         <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
// //         <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
// //         <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-2000" />
        
// //         {/* Grid Pattern */}
// //         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
// //       </div>
      
// //       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
// //         {/* Header Section */}
// //         <div className="text-center mb-24">
// //           <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-white border border-white/20 rounded-full px-8 py-4 text-sm font-bold mb-8 shadow-2xl">
// //             <UserGroupIcon className="h-6 w-6 mr-3 text-purple-300" />
// //             <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
// //               Meet the Team
// //             </span>
// //           </div>
          
// //           <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-8 tracking-tight">
// //             Our Core Team
// //           </h2>
          
// //           <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
// //             A passionate team committed to rural transformation through{' '}
// //             <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
// //               sustainable innovation
// //             </span>{' '}
// //             and dedication.
// //           </p>
// //         </div>

// //         {/* Team Grid */}
// //         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
// //           {allTeam.map((member, index) => (
// //             <TeamCard key={index} member={member} index={index} />
// //           ))}
// //         </div>
// //       </div>
      
// //       {/* Bottom Gradient */}
// //       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
// //     </section>
// //   );
// // };

// // export default Team;

// import React, { useState } from 'react';
// import {
//   UserGroupIcon,
//   StarIcon,
//   HeartIcon,
//   BoltIcon,
//   BuildingOfficeIcon,
//   CogIcon,
//   ComputerDesktopIcon,
// } from '@heroicons/react/24/outline';

// import { SiGmail, SiX, SiLinkedin } from 'react-icons/si';
// import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

// const Team = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const allTeam = [
//     {
//       name: 'Priyanshu Shukla',
//       role: 'Founder & CEO',
//       image: './founder.jpeg',
//       bio: 'Visionary leader committed to transforming rural India through sustainable development models.',
//       email: '#contact',
//       phone: '+919792277788',
//       icon: StarIcon,
//       gradient: 'from-blue-600 to-purple-600',
//       socials: {
//         x: 'https://x.com/bhavisyadindia',
//         instagram: 'https://www.instagram.com/bhavisyadindia',
//         facebook: 'https://www.facebook.com/share/16ttEG2DNy/',
//         linkedin: 'https://www.linkedin.com/in/priyanshu-shukla-5939a9220',
//       },
//     },
//     {
//       name: 'Duryodhan Singh',
//       role: 'Director',
//       image: './Duyodhan.jpeg',
//       bio: 'Strategic planning and operations management expert with deep rural development experience.',
//       icon: BuildingOfficeIcon,
//       gradient: 'from-green-600 to-teal-600',
//     },
//     {
//       name: 'Sooraj Singh',
//       role: 'Project Director',
//       image: './sooraj.jpeg',
//       bio: 'Rural development specialist focusing on sustainable agricultural practices.',
//       icon: BuildingOfficeIcon,
//       gradient: 'from-emerald-600 to-cyan-600',
//     },
//     {
//       name: 'Ratnesh Mishra',
//       role: 'Co-Founder',
//       image: './ratnesh.jpeg',
//       bio: 'Project management and execution specialist with extensive field experience.',
//       icon: CogIcon,
//       gradient: 'from-orange-600 to-red-600',
//     },
//     {
//       name: 'Dilip Kumar Shukla',
//       role: 'Planning & Execution',
//       image: './dilip.jpeg',
//       bio: 'Operations and logistics coordinator for rural development projects.',
//       icon: CogIcon,
//       gradient: 'from-yellow-600 to-orange-600',
//     },
//     {
//       name: 'Sumi Seal',
//       role: 'HR & Core Member',
//       image: './sumi.jpeg',
//       bio: 'Human resources and team development specialist.',
//       icon: HeartIcon,
//       gradient: 'from-pink-600 to-rose-600',
//     },
//     {
//       name: 'Dr. Ram Singh',
//       role: 'Business Development & Animal Husbandry',
//       image: './ram.jpeg',
//       bio: 'Veterinary expert and business development coordinator.',
//       icon: BoltIcon,
//       gradient: 'from-indigo-600 to-purple-600',
//     },
//     {
//       name: 'Shivam Shukla',
//       role: 'Digital Marketing',
//       image: './shivam.jpeg',
//       bio: 'Digital marketing and online presence management.',
//       icon: ComputerDesktopIcon,
//       gradient: 'from-blue-600 to-indigo-600',
//     },
//     // {
//     //   name: 'Rachit Shukla',
//     //   role: 'Web Developer',
//     //   image:
//     //     'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
//     //   bio: 'Technical development and web platform management.',
//     //   icon: ComputerDesktopIcon,
//     //   gradient: 'from-teal-600 to-green-600',
//     // },
//     // {
//     //   name: 'Aarti',
//     //   role: 'Graphic Designer',
//     //   image:
//     //     'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
//     //   bio: 'Visual design and creative content development.',
//     //   icon: ComputerDesktopIcon,
//     //   gradient: 'from-purple-600 to-pink-600',
//     // },
//   ];

//   const TeamCard = ({ member, index }) => (
//     <div
//       className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 shadow-xl hover:shadow-2xl ${
//         activeCard === index ? 'scale-105 -translate-y-4 shadow-2xl' : ''
//       }`}
//       onMouseEnter={() => setActiveCard(index)}
//       onMouseLeave={() => setActiveCard(null)}
//     >
//       {/* Gradient Background */}
//       <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
//       {/* Glass Effect */}
//       <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl" />
      
//       {/* Card Content */}
//       <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 text-center h-full flex flex-col">
//         {/* Profile Image */}
//         <div className="flex justify-center mb-6">
//           <div className="relative">
//             <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300`} />
//             <img
//               src={member.image}
//               alt={member.name}
//               className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
//             />
//             <div
//               className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-r ${member.gradient} p-2.5 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//             >
//               {React.createElement(member.icon, { className: 'h-6 w-6 text-white' })}
//             </div>
//           </div>
//         </div>

//         {/* Member Info */}
//         <div className="flex-grow">
//           <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-900 group-hover:bg-clip-text transition-all duration-300">
//             {member.name}
//           </h4>
//           <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
//             {member.role}
//           </p>
//           <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//             {member.bio}
//           </p>
//         </div>

//         {/* Social Links for Founder & CEO */}
//         {member.role === 'Founder & CEO' && (
//           <div className="flex flex-wrap justify-center gap-3 mt-6 pt-6 border-t border-gray-200/50">
//             <a
//               href={member.email}
//               className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-red-600 hover:to-red-700"
//               title="Contact via Email"
//             >
//               <SiGmail className="w-5 h-5" />
//             </a>
//             <a
//               href={`https://wa.me/${member.phone.replace(/\D/g, '')}`}
//               target="_blank"
//               rel="noreferrer"
//               className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-700"
//               title="Contact via WhatsApp"
//             >
//               <FaWhatsapp className="w-5 h-5" />
//             </a>
//             <a
//               href={member.socials.instagram}
//               target="_blank"
//               rel="noreferrer"
//               className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-pink-700"
//               title="Follow on Instagram"
//             >
//               <FaInstagram className="w-5 h-5" />
//             </a>
//             <a
//               href={member.socials.x}
//               target="_blank"
//               rel="noreferrer"
//               className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-gray-800 to-black rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-gray-900 hover:to-gray-800"
//               title="Follow on X"
//             >
//               <SiX className="w-5 h-5" />
//             </a>
//             <a
//               href={member.socials.facebook}
//               target="_blank"
//               rel="noreferrer"
//               className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800"
//               title="Follow on Facebook"
//             >
//               <FaFacebook className="w-5 h-5" />
//             </a>
//             <a
//               href={member.socials.linkedin}
//               target="_blank"
//               rel="noreferrer"
//               className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-900 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-blue-900 hover:to-blue-800"
//               title="Connect on LinkedIn"
//             >
//               <SiLinkedin className="w-5 h-5" />
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <section
//       id="team"
//       className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)] pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm">
//             <UserGroupIcon className="h-5 w-5 mr-2" />
//             <span>Meet the Team</span>
//           </div>
//           <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
//             Our Core Team
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             A passionate team committed to rural transformation through sustainable innovation and dedication.
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
//           {allTeam.map((member, index) => (
//             <TeamCard key={index} member={member} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;










// Team.jsx
import React, { useState } from 'react';
import {
  UserGroupIcon,
  StarIcon,
  HeartIcon,
  BoltIcon,
  BuildingOfficeIcon,
  CogIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import { SiGmail, SiX, SiLinkedin } from 'react-icons/si';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Team = ({ language }) => {
  const [activeCard, setActiveCard] = useState(null);

  // Language-specific content
  const translations = {
    en: {
      headerTitle: 'Our Core Team',
      headerSubtitle: 'Meet the Team',
      headerDescription:
        'A passionate team committed to rural transformation through sustainable innovation and dedication.',
      team: [
        {
          name: 'Priyanshu Shukla',
          role: 'Founder & CEO',
          bio: 'Visionary leader committed to transforming rural India through sustainable development models.',
          image: './founder.jpeg',
          email: '#contact',
          phone: '+919792277788',
          icon: StarIcon,
          gradient: 'from-blue-600 to-purple-600',
          socials: {
            x: 'https://x.com/bhavisyadindia',
            instagram: 'https://www.instagram.com/bhavisyadindia',
            facebook: 'https://www.facebook.com/share/16ttEG2DNy/',
            linkedin: 'https://www.linkedin.com/in/priyanshu-shukla-5939a9220',
          },
        },
            {
          name: 'Ratnesh Mishra',
          role: 'Co-Founder',
          bio: 'Project management and execution specialist with extensive field experience.',
          image: './ratnesh.jpeg',
          icon: CogIcon,
          gradient: 'from-orange-600 to-red-600',
        },
        {
          name: 'Duryodhan Singh',
          role: 'Director',
          bio: 'Strategic planning and operations management expert with deep rural development experience.',
          image: './Duyodhan.jpeg',
          icon: BuildingOfficeIcon,
          gradient: 'from-green-600 to-teal-600',
        },
        {
          name: 'Sooraj Singh',
          role: 'Project Director',
          bio: 'Rural development specialist focusing on sustainable agricultural practices.',
          image: './sooraj.jpeg',
          icon: BuildingOfficeIcon,
          gradient: 'from-emerald-600 to-cyan-600',
        },
    
        {
          name: 'Dilip Kumar Shukla',
          role: 'Planning & Execution',
          bio: 'Operations and logistics coordinator for rural development projects.',
          image: './dilip.jpeg',
          icon: CogIcon,
          gradient: 'from-yellow-600 to-orange-600',
        },
        {
          name: 'Sumi Seal',
          role: 'HR & Core Member',
          bio: 'Human resources and team development specialist.',
          image: './sumi.jpeg',
          icon: HeartIcon,
          gradient: 'from-pink-600 to-rose-600',
        },
        {
          name: 'Dr. Ram Singh',
          role: 'Business Development & Animal Husbandry',
          bio: 'Veterinary expert and business development coordinator.',
          image: './ram.jpeg',
          icon: BoltIcon,
          gradient: 'from-indigo-600 to-purple-600',
        },
        {
          name: 'Shivam Shukla',
          role: 'Digital Marketing',
          bio: 'Digital marketing and online presence management.',
          image: './shivam.jpeg',
          icon: ComputerDesktopIcon,
          gradient: 'from-blue-600 to-indigo-600',
        },
      ],
    },
    hi: {
      headerTitle: 'हमारी मुख्य टीम',
      headerSubtitle: 'टीम से मिलें',
      headerDescription:
        'स्थायी नवाचार और समर्पण के माध्यम से ग्रामीण परिवर्तन के लिए प्रतिबद्ध एक उत्साही टीम।',
      team: [
        {
          name: 'प्रियांशु शुक्ला',
          role: 'संस्थापक और सीईओ',
          bio: 'स्थायी विकास मॉडलों के माध्यम से ग्रामीण भारत को बदलने के लिए प्रतिबद्ध दूरदर्शी नेता।',
          image: './founder.jpeg',
          email: '#contact',
          phone: '+919792277788',
          icon: StarIcon,
          gradient: 'from-blue-600 to-purple-600',
          socials: {
            x: 'https://x.com/bhavisyadindia',
            instagram: 'https://www.instagram.com/bhavisyadindia',
            facebook: 'https://www.facebook.com/share/16ttEG2DNy/',
            linkedin: 'https://www.linkedin.com/in/priyanshu-shukla-5939a9220',
          },
        },
         {
          name: 'रत्नेश मिश्रा',
          role: 'सह-संस्थापक',
          bio: 'परियोजना प्रबंधन और कार्यान्वयन विशेषज्ञ, व्यापक क्षेत्रीय अनुभव के साथ।',
          image: './ratnesh.jpeg',
          icon: CogIcon,
          gradient: 'from-orange-600 to-red-600',
        },
        {
          name: 'दुर्योधन सिंह',
          role: 'निदेशक',
          bio: 'रणनीतिक योजना और संचालन प्रबंधन विशेषज्ञ, ग्रामीण विकास में गहन अनुभव के साथ।',
          image: './Duyodhan.jpeg',
          icon: BuildingOfficeIcon,
          gradient: 'from-green-600 to-teal-600',
        },
        {
          name: 'सूरज सिंह',
          role: 'परियोजना निदेशक',
          bio: 'स्थायी कृषि प्रथाओं पर ध्यान केंद्रित करने वाला ग्रामीण विकास विशेषज्ञ।',
          image: './sooraj.jpeg',
          icon: BuildingOfficeIcon,
          gradient: 'from-emerald-600 to-cyan-600',
        },
       
        {
          name: 'दिलीप कुमार शुक्ला',
          role: 'योजना और कार्यान्वयन',
          bio: 'ग्रामीण विकास परियोजनाओं के लिए संचालन और लॉजिस्टिक्स समन्वयक।',
          image: './dilip.jpeg',
          icon: CogIcon,
          gradient: 'from-yellow-600 to-orange-600',
        },
        {
          name: 'सुमी सील',
          role: 'मानव संसाधन और मुख्य सदस्य',
          bio: 'मानव संसाधन और टीम विकास विशेषज्ञ।',
          image: './sumi.jpeg',
          icon: HeartIcon,
          gradient: 'from-pink-600 to-rose-600',
        },
        {
          name: 'डॉ. राम सिंह',
          role: 'व्यवसाय विकास और पशुपालन',
          bio: 'पशु चिकित्सा विशेषज्ञ और व्यवसाय विकास समन्वयक।',
          image: './ram.jpeg',
          icon: BoltIcon,
          gradient: 'from-indigo-600 to-purple-600',
        },
        {
          name: 'शिवम शुक्ला',
          role: 'डिजिटल मार्केटिंग',
          bio: 'डिजिटल मार्केटिंग और ऑनलाइन उपस्थिति प्रबंधन।',
          image: './shivam.jpeg',
          icon: ComputerDesktopIcon,
          gradient: 'from-blue-600 to-indigo-600',
        },
      ],
    },
  };

  const content = translations[language];

  const TeamCard = ({ member, index }) => (
    <div
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 shadow-xl hover:shadow-2xl ${
        activeCard === index ? 'scale-105 -translate-y-4 shadow-2xl' : ''
      }`}
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      {/* Glass Effect */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl" />
      
      {/* Card Content */}
      <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 text-center h-full flex flex-col">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300`} />
            <img
              src={member.image}
              alt={member.name}
              className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            />
            <div
              className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-r ${member.gradient} p-2.5 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
            >
              {React.createElement(member.icon, { className: 'h-6 w-6 text-white' })}
            </div>
          </div>
        </div>

        {/* Member Info */}
        <div className="flex-grow">
          <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-900 group-hover:bg-clip-text transition-all duration-300">
            {member.name}
          </h4>
          <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
            {member.role}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        </div>

        {/* Social Links for Founder & CEO */}
        {member.role === (language === 'en' ? 'Founder & CEO' : 'संस्थापक और सीईओ') && (
          <div className="flex flex-wrap justify-center gap-3 mt-6 pt-6 border-t border-gray-200/50">
            <a
              href={member.email}
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-red-600 hover:to-red-700"
              title={language === 'en' ? 'Contact via Email' : 'ईमेल के माध्यम से संपर्क करें'}
            >
              <SiGmail className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${member.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-700"
              title={language === 'en' ? 'Contact via WhatsApp' : 'व्हाट्सएप के माध्यम से संपर्क करें'}
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-pink-700"
              title={language === 'en' ? 'Follow on Instagram' : 'इंस्टाग्राम पर फ unfit:follow'}
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href={member.socials.x}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-gray-800 to-black rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-gray-900 hover:to-gray-800"
              title={language === 'en' ? 'Follow on X' : 'X पर फॉलो करें'}
            >
              <SiX className="w-5 h-5" />
            </a>
            <a
              href={member.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800"
              title={language === 'en' ? 'Follow on Facebook' : 'फेसबुक पर फॉलो करें'}
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-900 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:from-blue-900 hover:to-blue-800"
              title={language === 'en' ? 'Connect on LinkedIn' : 'लिंक्डइन पर जुड़ें'}
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-3 text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm">
            <UserGroupIcon className="h-5 w-5 mr-2" />
            <span>{content.headerSubtitle}</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            {content.headerTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {content.headerDescription}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {content.team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;