// // components/About.jsx
// import React from 'react';
// import {
//   HeartIcon,
//   GlobeAltIcon,
//   SparklesIcon,
//   CheckCircleIcon,
//   UsersIcon,
//   ArrowRightIcon,
// } from '@heroicons/react/24/outline';

// const About = () => {
//   const visionPoints = [
//     {
//       icon: <HeartIcon className="h-8 w-8 text-rose-500" />,
//       title: 'Sustainable Dairy',
//       description: 'Organized milk collection and cow waste utilization to empower farmers.',
//       color: 'from-rose-50 to-pink-50 border-rose-200',
//     },
//     {
//       icon: <GlobeAltIcon className="h-8 w-8 text-emerald-500" />,
//       title: 'Organic Agriculture',
//       description: 'Transforming village lands into certified organic production.',
//       color: 'from-emerald-50 to-green-50 border-emerald-200',
//     },
//     {
//       icon: <SparklesIcon className="h-8 w-8 text-amber-500" />,
//       title: 'Clean Bio-Energy',
//       description: 'Village-level bio-energy solutions for self-reliant rural economy.',
//       color: 'from-amber-50 to-yellow-50 border-amber-200',
//     },
//     {
//       icon: <CheckCircleIcon className="h-8 w-8 text-blue-500" />,
//       title: 'Village Empowerment',
//       description: 'Dignified livelihood for farmers and youth leadership.',
//       color: 'from-blue-50 to-indigo-50 border-blue-200',
//     },
//   ];

//   const missionAreas = [
//     {
//       title: 'BGGY Dairy Hubs',
//       description: 'Village youth-led dairy hubs utilizing cow resources.',
//       color: 'from-violet-500 to-purple-600',
//       icon: <HeartIcon className="h-8 w-8 text-white" />,
//     },
//     {
//       title: 'Organic Farming',
//       description: 'Transforming village land to high-value organic farms.',
//       color: 'from-emerald-500 to-teal-600',
//       icon: <GlobeAltIcon className="h-8 w-8 text-white" />,
//     },
//     {
//       title: 'Bio-Energy Model',
//       description: 'Cow dung & biomass converted to clean energy.',
//       color: 'from-amber-500 to-orange-600',
//       icon: <SparklesIcon className="h-8 w-8 text-white" />,
//     },
//     {
//       title: 'Local Enterprises',
//       description: 'Women-led aloe vera & dairy product units.',
//       color: 'from-blue-500 to-cyan-600',
//       icon: <UsersIcon className="h-8 w-8 text-white" />,
//     },
//   ];

//   return (
//     <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
//             <SparklesIcon className="h-4 w-4 mr-2" />
//             About Our Mission
//           </div>
//           <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
//             About Bhavisyad India
//           </h2>
//           <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
//             Ek integrated rural development company jo dairy, organic farming, bio-energy aur village empowerment me kaam karti hai.
//           </p>
//         </div>

//         {/* Vision Points */}
//         <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
//               <p className="text-slate-600 mb-8 text-lg leading-relaxed">
//                 Empower rural India through sustainable dairy, organic farming, and clean energy — creating self-reliant villages & dignified livelihoods.
//               </p>
//             </div>
//             <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl p-8 border-l-4 border-blue-500 shadow-lg">
//               <blockquote className="text-slate-700 text-lg italic mb-4">
//                 "Har gaon khud-sufficient banaye in dairy, food & energy — not a dream, but a reality."
//               </blockquote>
//               <cite className="text-slate-500 font-medium">
//                 — Priyanshu Shukla, Founder & CEO
//               </cite>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {visionPoints.map((point, idx) => (
//               <div
//                 key={idx}
//                 className={`bg-gradient-to-br ${point.color} border-2 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
//               >
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="bg-white rounded-2xl p-3 shadow-md group-hover:scale-110 transition-transform">
//                     {point.icon}
//                   </div>
//                   <h4 className="text-xl font-bold text-slate-900">{point.title}</h4>
//                 </div>
//                 <p className="text-slate-600 leading-relaxed">{point.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mission Section */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center text-slate-900 mb-16">
//             Mission Focus Areas
//           </h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {missionAreas.map((area, idx) => (
//               <div
//                 key={idx}
//                 className={`bg-gradient-to-br ${area.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group text-white`}
//               >
//                 <div className="mb-6 group-hover:scale-110 transition-transform">
//                   {area.icon}
//                 </div>
//                 <h4 className="text-xl font-bold mb-4">{area.title}</h4>
//                 <p className="text-white/90 leading-relaxed">{area.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-[2rem] py-16 px-8 max-w-5xl mx-auto relative overflow-hidden">
//             <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
//             <div className="relative z-10">
//               <h3 className="text-3xl font-bold mb-6">Join our journey of rural transformation</h3>
//               <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
//                 Partner with us to scale sustainable dairy, organic farming, and clean energy models across India's villages.
//               </p>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center bg-white text-slate-900 font-bold py-4 px-8 rounded-2xl hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105 group"
//               >
//                 Contact Us
//                 <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
// components/About.jsx
// import React from 'react';
// import {
//   HeartIcon,
//   GlobeAltIcon,
//   SparklesIcon,
//   CheckCircleIcon,
//   UsersIcon,
//   ArrowRightIcon,
//   BoltIcon,
//   BuildingOfficeIcon,
// } from '@heroicons/react/24/outline';

// const About = () => {
//   const visionPoints = [
//     {
//       icon: <HeartIcon className="h-8 w-8 text-rose-500" />,
//       title: 'BGGY Dairy Units',
//       description: 'Empowering SHGs to run 20-cattle micro-dairy units in every Gram Panchayat with daily income from milk and organic by-products.',
//       color: 'from-rose-50 to-pink-50 border-rose-200',
//     },
//     {
//       icon: <GlobeAltIcon className="h-8 w-8 text-emerald-500" />,
//       title: 'Organic Farming',
//       description: 'Chemical-free agriculture using bio-slurry, vermicompost, and gobar gas from our cattle network.',
//       color: 'from-emerald-50 to-green-50 border-emerald-200',
//     },
//     {
//       icon: <BoltIcon className="h-8 w-8 text-amber-500" />,
//       title: 'Renewable Energy',
//       description: 'Converting daily cow dung into Bio-CNG, briquettes, and electricity for local power security.',
//       color: 'from-amber-50 to-yellow-50 border-amber-200',
//     },
//     {
//       icon: <UsersIcon className="h-8 w-8 text-blue-500" />,
//       title: 'SHG Empowerment',
//       description: 'Interest-free loans and skill training to SHG groups with full technical & medical support.',
//       color: 'from-blue-50 to-indigo-50 border-blue-200',
//     },
//   ];

//   const keyInitiatives = [
//     {
//       title: 'BGGY – Bhavisyad Gram Go-Dhan Yojana',
//       description: 'Flagship scheme empowering local SHGs to run 20-cattle micro-dairy units in every Gram Panchayat.',
//       color: 'from-violet-500 to-purple-600',
//       icon: <HeartIcon className="h-8 w-8 text-white" />,
//     },
//     {
//       title: 'Organic Farming & Cow Dung Utilization',
//       description: 'Promoting chemical-free agriculture using bio-slurry, vermicompost, and gobar gas.',
//       color: 'from-emerald-500 to-teal-600',
//       icon: <GlobeAltIcon className="h-8 w-8 text-white" />,
//     },
//     {
//       title: 'Village-level Renewable Energy Units',
//       description: 'Converting cow dung into Bio-CNG, briquettes, and electricity — reducing fossil fuel dependency.',
//       color: 'from-amber-500 to-orange-600',
//       icon: <BoltIcon className="h-8 w-8 text-white" />,
//     },
//     {
//       title: 'SHG Empowerment & Youth Employment',
//       description: 'Interest-free loans and skill training to run decentralized dairy and farming units.',
//       color: 'from-blue-500 to-cyan-600',
//       icon: <UsersIcon className="h-8 w-8 text-white" />,
//     },
//   ];

//   return (
//     <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
//             <SparklesIcon className="h-4 w-4 mr-2" />
//             About Our Mission
//           </div>
//           <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
//             About Bhavisyad India Pvt. Ltd.
//           </h2>
//           <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
//             A visionary rural enterprise dedicated to reviving the rural economy through organic, sustainable, and self-reliant models.
//           </p>
//         </div>

//         {/* Company Description */}
//         <div className="mb-20">
//           <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl p-8 border-l-4 border-blue-500 shadow-lg max-w-5xl mx-auto">
//             <p className="text-slate-700 text-lg leading-relaxed mb-4">
//               Rooted in Indian values and driven by modern strategies, our mission is to transform villages into hubs of organic entrepreneurship, where livestock, agriculture, and renewable resources are integrated into a single value-driven economy.
//             </p>
//           </div>
//         </div>

//         {/* Vision Section */}
//         <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
//               <p className="text-slate-600 mb-8 text-lg leading-relaxed">
//                 To build a self-sustained rural Bharat, where farmers become entrepreneurs, cow dung becomes fuel for progress, and every household finds dignity through local employment and natural productivity.
//               </p>
//             </div>
//             <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl p-8 border-l-4 border-green-500 shadow-lg">
//               <blockquote className="text-slate-700 text-lg italic mb-4">
//                 "Gramin Bharat ka bhavishya, Bhavisyad India ke saath."
//               </blockquote>
//               <cite className="text-slate-500 font-medium">
//                 (The future of rural India begins with Bhavisyad.)
//               </cite>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {visionPoints.map((point, idx) => (
//               <div
//                 key={idx}
//                 className={`bg-gradient-to-br ${point.color} border-2 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
//               >
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="bg-white rounded-2xl p-3 shadow-md group-hover:scale-110 transition-transform">
//                     {point.icon}
//                   </div>
//                   <h4 className="text-xl font-bold text-slate-900">{point.title}</h4>
//                 </div>
//                 <p className="text-slate-600 leading-relaxed">{point.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Key Initiatives Section */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center text-slate-900 mb-16">
//             Key Initiatives
//           </h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {keyInitiatives.map((initiative, idx) => (
//               <div
//                 key={idx}
//                 className={`bg-gradient-to-br ${initiative.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group text-white`}
//               >
//                 <div className="mb-6 group-hover:scale-110 transition-transform">
//                   {initiative.icon}
//                 </div>
//                 <h4 className="text-xl font-bold mb-4">{initiative.title}</h4>
//                 <p className="text-white/90 leading-relaxed">{initiative.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Why Bhavisyad Section */}
//         <div className="mb-20">
//           <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white rounded-[2rem] py-16 px-8 max-w-5xl mx-auto relative overflow-hidden">
//             <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
//             <div className="relative z-10 text-center">
//               <h3 className="text-3xl font-bold mb-6">Why Bhavisyad?</h3>
//               <p className="text-slate-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
//                 Because we believe the future (bhavisyad) of India lies in its villages — in their cows, their soil, their youth, and their unshaken spirit. We are not just building a company, we are creating a movement — one that reimagines rural India as a powerhouse of purity, production, and prosperity.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-[2rem] py-16 px-8 max-w-5xl mx-auto relative overflow-hidden">
//             <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
//             <div className="relative z-10">
//               <h3 className="text-3xl font-bold mb-6">Join our journey of rural transformation</h3>
//               <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
//                 Partner with us to scale sustainable dairy, organic farming, and clean energy models across India's villages.
//               </p>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center bg-white text-slate-900 font-bold py-4 px-8 rounded-2xl hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105 group"
//               >
//                 Contact Us
//                 <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// // About.jsx
// import React from 'react';
// import {
//   HeartIcon,
//   GlobeAltIcon,
//   SparklesIcon,
//   CheckCircleIcon,
//   UsersIcon,
//   ArrowRightIcon,
//   BoltIcon,
//   BuildingOfficeIcon,
// } from '@heroicons/react/24/outline';

// const About = ({ language }) => {
//   // Language-specific content
//   const translations = {
//     en: {
//       aboutMission: 'About Our Mission',
//       title: 'About Bhavisyad India Pvt. Ltd.',
//       description:
//         'A visionary rural enterprise dedicated to reviving the rural economy through organic, sustainable, and self-reliant models.',
//       companyDescription:
//         'Rooted in Indian values and driven by modern strategies, our mission is to transform villages into hubs of organic entrepreneurship, where livestock, agriculture, and renewable resources are integrated into a single value-driven economy.',
//       visionTitle: 'Our Vision',
//       visionDescription:
//         'To build a self-sustained rural Bharat, where farmers become entrepreneurs, cow dung becomes fuel for progress, and every household finds dignity through local employment and natural productivity.',
//       visionQuote: '"Gramin Bharat ka bhavishya, Bhavisyad India ke saath."',
//       visionCite: '(The future of rural India begins with Bhavisyad.)',
//       visionPoints: [
//         {
//           title: 'BGGY Dairy Units',
//           description:
//             'Empowering SHGs to run 20-cattle micro-dairy units in every Gram Panchayat with daily income from milk and organic by-products.',
//           color: 'from-rose-50 to-pink-50 border-rose-200',
//         },
//         {
//           title: 'Organic Farming',
//           description: 'Chemical-free agriculture using bio-slurry, vermicompost, and gobar gas from our cattle network.',
//           color: 'from-emerald-50 to-green-50 border-emerald-200',
//         },
//         {
//           title: 'Renewable Energy',
//           description: 'Converting daily cow dung into Bio-CNG, briquettes, and electricity for local power security.',
//           color: 'from-amber-50 to-yellow-50 border-amber-200',
//         },
//         {
//           title: 'SHG Empowerment',
//           description: 'Interest-free loans and skill training to SHG groups with full technical & medical support.',
//           color: 'from-blue-50 to-indigo-50 border-blue-200',
//         },
//       ],
//       keyInitiativesTitle: 'Key Initiatives',
//       keyInitiatives: [
//         {
//           title: 'BGGY – Bhavisyad Gram Go-Dhan Yojana',
//           description: 'Flagship scheme empowering local SHGs to run 20-cattle micro-dairy units in every Gram Panchayat.',
//           color: 'from-violet-500 to-purple-600',
//         },
//         {
//           title: 'Organic Farming & Cow Dung Utilization',
//           description: 'Promoting chemical-free agriculture using bio-slurry, vermicompost, and gobar gas.',
//           color: 'from-emerald-500 to-teal-600',
//         },
//         {
//           title: 'Village-level Renewable Energy Units',
//           description: 'Converting cow dung into Bio-CNG, briquettes, and electricity — reducing fossil fuel dependency.',
//           color: 'from-amber-500 to-orange-600',
//         },
//         {
//           title: 'SHG Empowerment & Youth Employment',
//           description: 'Interest-free loans and skill training to run decentralized dairy and farming units.',
//           color: 'from-blue-500 to-cyan-600',
//         },
//       ],
//       whyBhavisyadTitle: 'Why Bhavisyad?',
//       whyBhavisyadDescription:
//         'Because we believe the future (bhavisyad) of India lies in its villages — in their cows, their soil, their youth, and their unshaken spirit. We are not just building a company, we are creating a movement — one that reimagines rural India as a powerhouse of purity, production, and prosperity.',
//       ctaTitle: 'Join our journey of rural transformation',
//       ctaDescription:
//         'Partner with us to scale sustainable dairy, organic farming, and clean energy models across India\'s villages.',
//       ctaButton: 'Contact Us',
//     },
//     hi: {
//       aboutMission: 'हमारे मिशन के बारे में',
//       title: 'भविष्यद इंडिया प्राइवेट लिमिटेड के बारे में',
//       description:
//         'एक दूरदर्शी ग्रामीण उद्यम जो जैविक, स्थायी और आत्मनिर्भर मॉडल के माध्यम से ग्रामीण अर्थव्यवस्था को पुनर्जनन के लिए समर्पित है।',
//       companyDescription:
//         'भारतीय मूल्यों में निहित और आधुनिक रणनीतियों द्वारा संचालित, हमारा मिशन गाँवों को जैविक उद्यमिता के केंद्रों में बदलना है, जहाँ पशुधन, कृषि और नवीकरणीय संसाधन एक मूल्य-प्रधान अर्थव्यवस्था में एकीकृत हैं।',
//       visionTitle: 'हमारा दृष्टिकोण',
//       visionDescription:
//         'एक आत्मनिर्भर ग्रामीण भारत का निर्माण करना, जहाँ किसान उद्यमी बनें, गोबर प्रगति का ईंधन बने, और प्रत्येक परिवार को स्थानीय रोजगार और प्राकृतिक उत्पादकता के माध्यम से सम्मान मिले।',
//       visionQuote: '"ग्रामीण भारत का भविष्य, भविष्यद इंडिया के साथ।"',
//       visionCite: '(ग्रामीण भारत का भविष्य भविष्यद के साथ शुरू होता है।)',
//       visionPoints: [
//         {
//           title: 'बीजीजीवाई डेयरी इकाइयाँ',
//           description:
//             'प्रत्येक ग्राम पंचायत में 20 पशुओं की माइक्रो-डेयरी इकाइयाँ चलाने के लिए स्वयं सहायता समूहों (SHG) को सशक्त करना, दूध और जैविक उप-उत्पादों से दैनिक आय के साथ।',
//           color: 'from-rose-50 to-pink-50 border-rose-200',
//         },
//         {
//           title: 'जैविक खेती',
//           description: 'हमारे पशुधन नेटवर्क से जैव-स्लरी, वर्मीकम्पोस्ट और गोबर गैस का उपयोग करके रसायन-मुक्त कृषि।',
//           color: 'from-emerald-50 to-green-50 border-emerald-200',
//         },
//         {
//           title: 'नवीकरणीय ऊर्जा',
//           description: 'रोजाना गोबर को बायो-सीएनजी, ब्रिकेट्स और बिजली में परिवर्तित करना स्थानीय ऊर्जा सुरक्षा के लिए।',
//           color: 'from-amber-50 to-yellow-50 border-amber-200',
//         },
//         {
//           title: 'एसएचजी सशक्तिकरण',
//           description: 'एसएचजी समूहों को ब्याज-मुक्त ऋण और कौशल प्रशिक्षण, पूर्ण तकनीकी और चिकित्सा समर्थन के साथ।',
//           color: 'from-blue-50 to-indigo-50 border-blue-200',
//         },
//       ],
//       keyInitiativesTitle: 'मुख्य पहल',
//       keyInitiatives: [
//         {
//           title: 'बीजीजीवाई – भविष्यद ग्राम गो-धन योजना',
//           description: 'प्रत्येक ग्राम पंचायत में 20 पशुओं की माइक्रो-डेयरी इकाइयाँ चलाने के लिए स्थानीय एसएचजी को सशक्त करने वाली प्रमुख योजना।',
//           color: 'from-violet-500 to-purple-600',
//         },
//         {
//           title: 'जैविक खेती और गोबर उपयोग',
//           description: 'जैव-स्लरी, वर्मीकम्पोस्ट और गोबर गैस का उपयोग करके रसायन-मुक्त कृषि को बढ़ावा देना।',
//           color: 'from-emerald-500 to-teal-600',
//         },
//         {
//           title: 'ग्राम-स्तरीय नवीकरणीय ऊर्जा इकाइयाँ',
//           description: 'गोबर को बायो-सीएनजी, ब्रिकेट्स और बिजली में परिवर्तित करना — जीवाश्म ईंधन पर निर्भरता कम करना।',
//           color: 'from-amber-500 to-orange-600',
//         },
//         {
//           title: 'एसएचजी सशक्तिकरण और युवा रोजगार',
//           description: 'विकेन्द्रीकृत डेयरी और खेती इकाइयों को चलाने के लिए ब्याज-मुक्त ऋण और कौशल प्रशिक्षण।',
//           color: 'from-blue-500 to-cyan-600',
//         },
//       ],
//       whyBhavisyadTitle: 'भविष्यद क्यों?',
//       whyBhavisyadDescription:
//         'क्योंकि हम मानते हैं कि भारत का भविष्य (भविष्यद) इसके गाँवों में निहित है — उनकी गायों, उनकी मिट्टी, उनके युवाओं और उनके अटल उत्साह में। हम केवल एक कंपनी नहीं बना रहे, हम एक आंदोलन बना रहे हैं — जो ग्रामीण भारत को शुद्धता, उत्पादन और समृद्धि का पावरहाउस बनाता है।',
//       ctaTitle: 'ग्रामीण परिवर्तन की हमारी यात्रा में शामिल हों',
//       ctaDescription:
//         'भारत के गाँवों में स्थायी डेयरी, जैविक खेती और स्वच्छ ऊर्जा मॉडल को बढ़ाने के लिए हमारे साथ साझेदारी करें।',
//       ctaButton: 'हमसे संपर्क करें',
//     },
//   };

//   const content = translations[language];

//   return (
//     <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
//             <SparklesIcon className="h-4 w-4 mr-2" />
//             {content.aboutMission}
//           </div>
//           <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
//             {content.title}
//           </h2>
//           <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
//             {content.description}
//           </p>
//         </div>

//         {/* Company Description */}
//         <div className="mb-20">
//           <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl p-8 border-l-4 border-blue-500 shadow-lg max-w-5xl mx-auto">
//             <p className="text-slate-700 text-lg leading-relaxed mb-4">
//               {content.companyDescription}
//             </p>
//           </div>
//         </div>

//         {/* Vision Section */}
//         <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-3xl font-bold text-slate-900 mb-6">{content.visionTitle}</h3>
//               <p className="text-slate-600 mb-8 text-lg leading-relaxed">
//                 {content.visionDescription}
//               </p>
//             </div>
//             <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl p-8 border-l-4 border-green-500 shadow-lg">
//               <blockquote className="text-slate-700 text-lg italic mb-4">
//                 {content.visionQuote}
//               </blockquote>
//               <cite className="text-slate-500 font-medium">{content.visionCite}</cite>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {content.visionPoints.map((point, idx) => (
//               <div
//                 key={idx}
//                 className={`bg-gradient-to-br ${point.color} border-2 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
//               >
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="bg-white rounded-2xl p-3 shadow-md group-hover:scale-110 transition-transform">
//                     {point.icon}
//                   </div>
//                   <h4 className="text-xl font-bold text-slate-900">{point.title}</h4>
//                 </div>
//                 <p className="text-slate-600 leading-relaxed">{point.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Key Initiatives Section */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center text-slate-900 mb-16">
//             {content.keyInitiativesTitle}
//           </h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {content.keyInitiatives.map((initiative, idx) => (
//               <div
//                 key={idx}
//                 className={`bg-gradient-to-br ${initiative.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group text-white`}
//               >
//                 <div className="mb-6 group-hover:scale-110 transition-transform">
//                   {initiative.icon}
//                 </div>
//                 <h4 className="text-xl font-bold mb-4">{initiative.title}</h4>
//                 <p className="text-white/90 leading-relaxed">{initiative.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Why Bhavisyad Section */}
//         <div className="mb-20">
//           <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white rounded-[2rem] py-16 px-8 max-w-5xl mx-auto relative overflow-hidden">
//             <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
//             <div className="relative z-10 text-center">
//               <h3 className="text-3xl font-bold mb-6">{content.whyBhavisyadTitle}</h3>
//               <p className="text-slate-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
//                 {content.whyBhavisyadDescription}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-[2rem] py-16 px-8 max-w-5xl mx-auto relative overflow-hidden">
//             <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
//             <div className="relative z-10">
//               <h3 className="text-3xl font-bold mb-6">{content.ctaTitle}</h3>
//               <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
//                 {content.ctaDescription}
//               </p>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center bg-white text-slate-900 font-bold py-4 px-8 rounded-2xl hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105 group"
//               >
//                 {content.ctaButton}
//                 <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




// components/About.jsx
import React from 'react';
import {
  HeartIcon,
  GlobeAltIcon,
  SparklesIcon,
  BoltIcon,
  UsersIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { TreePine } from 'lucide-react';

const About = ({ language }) => {
  // Language-specific content
  const translations = {
    en: {
      headerTag: 'About Our Mission',
      headerTitle: 'About Bhavisyad India Pvt. Ltd.',
      headerDescription:
        'A visionary rural enterprise dedicated to reviving the rural economy through organic, sustainable, and self-reliant models.',
      companyDescription:
        'Rooted in Indian values and driven by modern strategies, our mission is to transform villages into hubs of organic entrepreneurship, where livestock, agriculture, and renewable resources are integrated into a single value-driven economy.',
      visionTitle: 'Our Vision',
      visionDescription:
        'To build a self-sustained rural Bharat, where farmers become entrepreneurs, cow dung becomes fuel for progress, and every household finds dignity through local employment and natural productivity.',
      visionQuote: '"Gramin Bharat ka bhavishya, Bhavisyad India ke saath."',
      visionCite: '(The future of rural India begins with Bhavisyad.)',
      visionPoints: [
        {
          
          icon:   <img className='h-8 w-8 text-rose-500' src="/gallery/cow2.png" alt="" />,
          title: 'BGGY Dairy Units',
          description: 'Empowering SHGs to run 20-cattle micro-dairy units in every Gram Panchayat with daily income from milk and organic by-products.',
          color: 'from-rose-50 to-pink-50 border-rose-200',
        },
        {
          icon:   <TreePine className="h-8 w-8 text-emerald-500" />,
          title: 'Organic Farming',
          description: 'Chemical-free agriculture using bio-slurry, vermicompost, and gobar gas from our cattle network.',
          color: 'from-emerald-50 to-green-50 border-emerald-200',
        },
        {
          icon: <BoltIcon className="h-8 w-8 text-amber-500" />,
          title: 'Renewable Energy',
          description: 'Converting daily cow dung into Bio-CNG, briquettes, and electricity for local power security.',
          color: 'from-amber-50 to-yellow-50 border-amber-200',
        },
        {
          icon: <UsersIcon className="h-8 w-8 text-blue-500" />,
          title: 'SHG Empowerment',
          description: 'Interest-free loans and skill training to SHG groups with full technical & medical support.',
          color: 'from-blue-50 to-indigo-50 border-blue-200',
        },
      ],
      initiativesTitle: 'Key Initiatives',
      keyInitiatives: [
        {
          title: 'BGGY – Bhavisyad Gram Go-Dhan Yojana',
          description: 'Flagship scheme empowering local SHGs to run 20-cattle micro-dairy units in every Gram Panchayat.',
          color: 'from-violet-500 to-purple-600',
          icon: <img className='h-8 w-8 text-rose-500' src="/gallery/cow.png" alt="" />,
        },
        {
          title: 'Organic Farming & Cow Dung Utilization',
          description: 'Promoting chemical-free agriculture using bio-slurry, vermicompost, and gobar gas.',
          color: 'from-emerald-500 to-teal-600',
          icon:  <TreePine className="h-8 w-8 text-white" />
 ,
        },
        {
          title: 'Village-level Renewable Energy Units',
          description: 'Converting cow dung into Bio-CNG, briquettes, and electricity — reducing fossil fuel dependency.',
          color: 'from-amber-500 to-orange-600',
          icon: <BoltIcon className="h-8 w-8 text-white" />,
        },
        {
          title: 'SHG Empowerment & Youth Employment',
          description: 'Interest-free loans and skill training to run decentralized dairy and farming units.',
          color: 'from-blue-500 to-cyan-600',
          icon: <UsersIcon className="h-8 w-8 text-white" />,
        },
      ],
      whyBhavisyadTitle: 'Why Bhavisyad?',
      whyBhavisyadDescription:
        'Because we believe the future (bhavisyad) of India lies in its villages — in their cows, their soil, their youth, and their unshaken spirit. We are not just building a company, we are creating a movement — one that reimagines rural India as a powerhouse of purity, production, and prosperity.',
      ctaTitle: 'Join our journey of rural transformation',
      ctaDescription:
        'Partner with us to scale sustainable dairy, organic farming, and clean energy models across India’s villages.',
      ctaButton: 'Contact Us',
    },
    hi: {
      headerTag: 'हमारा मिशन',
      headerTitle: 'भविष्यद इंडिया प्राइवेट लिमिटेड के बारे में',
      headerDescription:
        'एक दूरदर्शी ग्रामीण उद्यम जो जैविक, स्थायी और आत्मनिर्भर मॉडलों के माध्यम से ग्रामीण अर्थव्यवस्था को पुनर्जनन के लिए समर्पित है।',
      companyDescription:
        'भारतीय मूल्यों में निहित और आधुनिक रणनीतियों से प्रेरित, हमारा मिशन गाँवों को जैविक उद्यमिता के केंद्रों में बदलना है, जहाँ पशुधन, कृषि और नवीकरणीय संसाधनों को एक मूल्य-प्रधान अर्थव्यवस्था में एकीकृत किया जाता है।',
      visionTitle: 'हमारा दृष्टिकोण',
      visionDescription:
        'एक आत्मनिर्भर ग्रामीण भारत का निर्माण करना, जहाँ किसान उद्यमी बनें, गोबर प्रगति का ईंधन बने, और प्रत्येक परिवार स्थानीय रोजगार और प्राकृतिक उत्पादकता के माध्यम से सम्मान प्राप्त करे।',
      visionQuote: '"ग्रामीण भारत का भविष्य, भविष्यद इंडिया के साथ।"',
      visionCite: '(ग्रामीण भारत का भविष्य भविष्यद के साथ शुरू होता है।)',
      visionPoints: [
        {
          icon:<img className='h-8 w-8 text-white' src="/gallery/cow2.png" alt="" />,
          title: 'बीजीजीवाई डेयरी इकाइयाँ',
          description: 'प्रत्येक ग्राम पंचायत में स्वयं सहायता समूहों को 20 मवेशियों वाली सूक्ष्म-डेयरी इकाइयाँ चलाने के लिए सशक्त करना, दूध और जैविक उप-उत्पादों से दैनिक आय के साथ।',
          color: 'from-rose-50 to-pink-50 border-rose-200',
        },
        {
          icon: <TreePine className="h-8 w-8 text-green-700" />,
          title: 'जैविक खेती',
          description: 'हमारे मवेशी नेटवर्क से बायो-स्लरी, वर्मीकम्पोस्ट और गोबर गैस का उपयोग करके रासायन-मुक्त कृषि।',
          color: 'from-emerald-50 to-green-50 border-emerald-200',
        },
        {
          icon: <BoltIcon className="h-8 w-8 text-amber-500" />,
          title: 'नवीकरणीय ऊर्जा',
          description: 'स्थानीय बिजली सुरक्षा के लिए दैनिक गोबर को बायो-सीएनजी, ब्रिकेट्स और बिजली में परिवर्तित करना।',
          color: 'from-amber-50 to-yellow-50 border-amber-200',
        },
        {
          icon: <UsersIcon className="h-8 w-8 text-blue-500" />,
          title: 'स्वयं सहायता समूह सशक्तिकरण',
          description: 'स्वयं सहायता समूहों को ब्याज-मुक्त ऋण और कौशल प्रशिक्षण, पूर्ण तकनीकी और चिकित्सा सहायता के साथ।',
          color: 'from-blue-50 to-indigo-50 border-blue-200',
        },
      ],
      initiativesTitle: 'प्रमुख पहल',
      keyInitiatives: [
        {
          title: 'बीजीजीवाई – भविष्यद ग्राम गो-धन योजना',
          description: 'प्रत्येक ग्राम पंचायत में स्थानीय स्वयं सहायता समूहों को 20 मवेशियों वाली सूक्ष्म-डेयरी इकाइयाँ चलाने के लिए सशक्त करने वाली प्रमुख योजना।',
          color: 'from-violet-500 to-purple-600',
          icon: <img className='h-8 w-8' src="/gallery/cow.png" alt="" />,
        },
        {
          title: 'जैविक खेती और गोबर उपयोग',
          description: 'बायो-स्लरी, वर्मीकम्पोस्ट और गोबर गैस का उपयोग करके रासायन-मुक्त कृषि को बढ़ावा देना।',
          color: 'from-emerald-500 to-teal-600',
          icon:<TreePine className="h-8 w-8 text-green" />,
        },
        {
          title: 'गाँव-स्तरीय नवीकरणीय ऊर्जा इकाइयाँ',
          description: 'गोबर को बायो-सीएनजी, ब्रिकेट्स और बिजली में परिवर्तित करना — जीवाश्म ईंधन पर निर्भरता को कम करना।',
          color: 'from-amber-500 to-orange-600',
          icon: <BoltIcon className="h-8 w-8 text-white" />,
        },
        {
          title: 'स्वयं सहायता समूह सशक्तिकरण और युवा रोजगार',
          description: 'विकेन्द्रीकृत डेयरी और खेती इकाइयों को चलाने के लिए ब्याज-मुक्त ऋण और कौशल प्रशिक्षण।',
          color: 'from-blue-500 to-cyan-600',
          icon: <UsersIcon className="h-8 w-8 text-white" />,
        },
      ],
      whyBhavisyadTitle: 'भविष्यद क्यों?',
      whyBhavisyadDescription:
        'क्योंकि हम मानते हैं कि भारत का भविष्य (भविष्यद) इसके गाँवों में निहित है — उनकी गायों, उनकी मिट्टी, उनके युवाओं और उनके अटल उत्साह में। हम केवल एक कंपनी नहीं बना रहे, हम एक आंदोलन बना रहे हैं — जो ग्रामीण भारत को शुद्धता, उत्पादन और समृद्धि का एक पावरहाउस के रूप में पुनर्कल्पना करता है।',
      ctaTitle: 'ग्रामीण परिवर्तन की हमारी यात्रा में शामिल हों',
      ctaDescription:
        'हमारे साथ साझेदारी करें ताकि भारत के गाँवों में स्थायी डेयरी, जैविक खेती और स्वच्छ ऊर्जा मॉडलों का विस्तार किया जा सके।',
      ctaButton: 'हमसे संपर्क करें',
    },
  };

  const content = translations[language];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <SparklesIcon className="h-4 w-4 mr-2" />
            {content.headerTag}
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            {content.headerTitle}
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {content.headerDescription}
          </p>
        </div>

        {/* Company Description */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl p-8 border-l-4 border-blue-500 shadow-lg max-w-5xl mx-auto">
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              {content.companyDescription}
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">{content.visionTitle}</h3>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                {content.visionDescription}
              </p>
            </div>
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl p-8 border-l-4 border-green-500 shadow-lg">
              <blockquote className="text-slate-700 text-lg italic mb-4">
                {content.visionQuote}
              </blockquote>
              <cite className="text-slate-500 font-medium">
                {content.visionCite}
              </cite>
            </div>
          </div>

        

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.visionPoints.map((point, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${point.color} border-2 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white rounded-2xl p-3 shadow-md group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{point.title}</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Initiatives Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-16">
            {content.initiativesTitle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.keyInitiatives.map((initiative, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${initiative.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group text-white`}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {initiative.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{initiative.title}</h4>
                <p className="text-white/90 leading-relaxed">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Bhavisyad Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white rounded-[2rem] py-16 px-8 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-6">{content.whyBhavisyadTitle}</h3>
              <p className="text-slate-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                {content.whyBhavisyadDescription}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-[2rem] py-16 px-8 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">{content.ctaTitle}</h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {content.ctaDescription}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-white text-slate-900 font-bold py-4 px-8 rounded-2xl hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105 group"
              >
                {content.ctaButton}
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;