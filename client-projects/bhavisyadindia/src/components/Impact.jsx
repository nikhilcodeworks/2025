// import React, { useState, useEffect } from 'react';
// import { TrendingUp, Users,FlaskConical, Home, DollarSign, Zap, Leaf, Heart, Eye, ChevronRight, Star, ArrowUp } from 'lucide-react';

// const Impact = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [counters, setCounters] = useState({
//     beneficiaries: 0,
//     villages: 0,
//     income: 0,
//     production: 0
//   });

//   // Animated counters
//   useEffect(() => {
//     const targets = {
//       beneficiaries: 13640,
//       villages: 682,
//       income: 24600,
//       production: 136400
//     };

//     const duration = 2000;
//     const steps = 60;
//     const interval = duration / steps;

//     let currentStep = 0;
//     const timer = setInterval(() => {
//       currentStep++;
//       const progress = currentStep / steps;
      
//       setCounters({
//         beneficiaries: Math.floor(targets.beneficiaries * progress),
//         villages: Math.floor(targets.villages * progress),
//         income: Math.floor(targets.income * progress),
//         production: Math.floor(targets.production * progress)
//       });

//       if (currentStep >= steps) {
//         clearInterval(timer);
//         setCounters(targets);
//       }
//     }, interval);

//     return () => clearInterval(timer);
//   }, []);

//   const stats = [
//     {
//       icon: <Users className="h-8 w-8" />,
//       number: counters.beneficiaries.toLocaleString(),
//       label: "Total Beneficiaries",
//       description: "Individuals directly benefiting from our programs",
//       gradient: "from-purple-500 via-pink-500 to-red-500",
//       bgGradient: "from-purple-50 to-pink-50"
//     },
//     {
//       icon: <Home className="h-8 w-8" />,
//       number: counters.villages.toLocaleString(),
//       label: "Gram Panchayats",
//       description: "Villages covered under our development initiatives",
//       gradient: "from-blue-500 via-cyan-500 to-teal-500",
//       bgGradient: "from-blue-50 to-cyan-50"
//     },
//     {
//       icon: <DollarSign className="h-8 w-8" />,
//       number: `₹${counters.income.toLocaleString()}`,
//       label: "Average Monthly Income",
//       description: "Per member income through dairy operations",
//       gradient: "from-green-500 via-emerald-500 to-lime-500",
//       bgGradient: "from-green-50 to-emerald-50"
//     },
//     {
//       icon: <TrendingUp className="h-8 w-8" />,
//       number: `${counters.production.toLocaleString()}L`,
//       label: "Daily Milk Production",
//       description: "Fresh milk produced daily by our network",
//       gradient: "from-orange-500 via-amber-500 to-yellow-500",
//       bgGradient: "from-orange-50 to-amber-50"
//     }
//   ];

//   const impactCategories = [
//     {
//       title: "Economic Impact",
//       icon: <DollarSign className="h-6 w-6" />,
//       gradient: "from-emerald-500 to-teal-600",
//       items: [
//         { metric: "₹1.5 Lakh", description: "Monthly income per SHG group" },
//         { metric: "200+", description: "Sahiwal cows generating sustainable income" },
//         { metric: "50+", description: "Youth employed in dairy operations" },
//         { metric: "100%", description: "Women-led micro-enterprises established" }
//       ]
//     },
//     {
//       title: "Environmental Impact",
//       icon: <Leaf className="h-6 w-6" />,
//       gradient: "from-green-500 to-lime-600",
//       items: [
//         { metric: "200 tons", description: "Organic compost produced annually" },
//         { metric: "75%", description: "Reduction in chemical fertilizer dependency" },
//         { metric: "682", description: "Sustainable waste management systems" },
//         { metric: "100%", description: "Clean bio-energy generation from cow dung" }
//       ]
//     },
//     {
//       title: "Social Impact",
//       icon: <Heart className="h-6 w-6" />,
//       gradient: "from-pink-500 to-rose-600",
//       items: [
//         { metric: "6820", description: "Rural families became dairy entrepreneurs" },
//         { metric: "682", description: "Village-level skill development programs" },
//         { metric: "13,640", description: "Women empowerment through SHG participation" },
//         { metric: "95%", description: "Youth retention in rural areas" }
//       ]
//     },
//     {
//       title: "Agricultural Impact",
//       icon: <Zap className="h-6 w-6" />,
//       gradient: "from-blue-500 to-indigo-600",
//       items: [
//         { metric: "100%", description: "Certified organic farming practices adopted" },
//         { metric: "200%", description: "Soil health improvement through organic methods" },
//         { metric: "50+", description: "High-value crop cultivation training" },
//         { metric: "25+", description: "Market linkage for organic products" }
//       ]
//     }
//   ];

//   const successStories = [
//     {
//       name: "Sunita Devi",
//       role: "Dairy Entrepreneur",
//       village: "Gram Panchayat, Amethi",
//       story: "Through BGGY, I now earn ₹25,000 monthly from my 2 cows. My family has achieved financial independence and I'm inspiring other women in my village.",
//       impact: "₹25,000/month",
//       avatar: "S",
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       name: "Rajesh Kumar",
//       role: "Dairy Hub Supervisor",
//       village: "Operations Team Lead",
//       story: "Leading a team of 10 youth in dairy operations has given me purpose and steady income. We're building the future of rural employment.",
//       impact: "Team of 10 Youth",
//       avatar: "R",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       name: "Meera Sharma",
//       role: "Organic Farmer",
//       village: "Sustainable Agriculture",
//       story: "Converting to organic farming with cow-based fertilizers has doubled my crop yield and income while preserving our environment.",
//       impact: "100% Yield Increase",
//       avatar: "M",
//       color: "from-green-500 to-emerald-500"
//     }
//   ];

//   // const milestones = [
//   //   { 
//   //     year: "2023", 
//   //     title: "Foundation", 
//   //     description: "Bhavisyad India Pvt. Ltd. established with vision to transform rural India",
//   //     icon: <Award className="h-5 w-5" />
//   //   },
//   //   { 
//   //     year: "2024", 
//   //     title: "Pilot Launch", 
//   //     description: "First BGGY pilot program launched in select villages",
//   //     icon: <Zap className="h-5 w-5" />
//   //   },
//   //   { 
//   //     year: "2024", 
//   //     title: "200 Cows Distributed", 
//   //     description: "Successfully distributed 200 Sahiwal cows to farmers",
//   //     icon: <Heart className="h-5 w-5" />
//   //   },
//   //   { 
//   //     year: "2025", 
//   //     title: "Scale-up Phase", 
//   //     description: "Expanding to 682 Gram Panchayats across the region",
//   //     icon: <TrendingUp className="h-5 w-5" />
//   //   }
//   // ];
// const milestones = [
//   { 
//     year: "2020", 
//     title: "Vision Start", 
//     description: "The vision for rural transformation began with a 5-member initiative.", 
//     icon: <Eye className="h-5 w-5" />
//   },
//   { 
//     year: "2023", 
//     title: "R&D Complete", 
//     description: "The extensive research and development process was successfully completed.", 
//     icon: <FlaskConical className="h-5 w-5" />
//   },
//   { 
//     year: "2023-2024", 
//     title: "Milk Procurement", 
//     description: "The first BGGY pilot program was launched in selected villages with 35 village-level milk collection centers.", 
//     icon: <Zap className="h-5 w-5" />
//   },
//   { 
//     year: "2025", 
//     title: "Registered under Ministry of Corporate Affairs", 
//     description: "BGGY schemes are set to begin in the first 20 Gram Panchayats.", 
//     icon: <Heart className="h-5 w-5" />
//   },
//   { 
//     year: "2027", 
//     title: "BGGY Expansion", 
//     description: "The target is to expand BGGY across 682 Gram Panchayats in the region.", 
//     icon: <TrendingUp className="h-5 w-5" />
//   }
// ];

//   return (
//     <section id="impact" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
//             <TrendingUp className="h-8 w-8 text-white" />
//           </div>
//           <h2 className="text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-6">
//             Our Impact
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Measurable outcomes and real stories of transformation across rural India. 
//             Every number represents a life changed, a family empowered, and a community transformed.
//           </p>
//         </div>

//         {/* Key Statistics */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
//           {stats.map((stat, index) => (
//             <div key={index} className={`relative group bg-gradient-to-br ${stat.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-white/50`}>
//               <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
//               <div className="relative z-10">
//                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} text-white mb-6 shadow-lg`}>
//                   {stat.icon}
//                 </div>
//                 <div className="text-4xl font-bold text-gray-900 mb-2 font-mono">
//                   {stat.number}
//                 </div>
//                 <div className="text-lg font-semibold text-gray-800 mb-3">
//                   {stat.label}
//                 </div>
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {stat.description}
//                 </p>
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:animate-pulse"></div>
//             </div>
//           ))}
//         </div>

//         {/* Impact Categories */}
//         <div className="mb-24">
//           <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">
//             Areas of Impact
//           </h3>
//           <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//             Our comprehensive approach creates lasting change across multiple dimensions of rural development
//           </p>
          
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {impactCategories.map((category, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveTab(index)}
//                 className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
//                   activeTab === index
//                     ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105`
//                     : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
//                 }`}
//               >
//                 {category.icon}
//                 <span className="font-medium">{category.title}</span>
//               </button>
//             ))}
//           </div>

//           <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
//             <div className="grid md:grid-cols-2 gap-6">
//               {impactCategories[activeTab].items.map((item, index) => (
//                 <div key={index} className="group flex items-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
//                   <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r ${impactCategories[activeTab].gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
//                     {item.metric}
//                   </div>
//                   <div>
//                     <p className="text-gray-800 font-medium">{item.description}</p>
//                   </div>
//                   <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Success Stories */}
//         <div className="mb-24">
//           <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">
//             Success Stories
//           </h3>
//           <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//             Real people, real transformations. These are the stories that inspire us every day
//           </p>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {successStories.map((story, index) => (
//               <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
//                 <div className="relative z-10">
//                   <div className="text-center mb-8">
//                     <div className={`w-20 h-20 bg-gradient-to-r ${story.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg`}>
//                       {story.avatar}
//                     </div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h4>
//                     <p className="text-sm text-gray-600 mb-1">{story.role}</p>
//                     <p className="text-xs text-gray-500">{story.village}</p>
//                   </div>
                  
//                   <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
//                     "{story.story}"
//                   </blockquote>
                  
//                   <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 text-center border border-gray-100">
//                     <div className="flex items-center justify-center gap-2 mb-2">
//                       <Star className="h-4 w-4 text-yellow-500" />
//                       <span className="text-sm font-medium text-gray-600">Impact Achieved</span>
//                     </div>
//                     <p className="font-bold text-gray-900">{story.impact}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Timeline */}
//         <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 rounded-3xl p-8 lg:p-12 shadow-2xl">
//           <h3 className="text-4xl font-bold text-center text-white mb-4">
//             Our Journey
//           </h3>
//           <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
//             From inception to impact - milestones that mark our commitment to rural transformation
//           </p>
          
//           <div className="relative max-w-4xl mx-auto">
//             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400"></div>
            
//             <div className="space-y-12">
//               {milestones.map((milestone, index) => (
//                 <div key={index} className="relative flex items-center group">
//                   <div className="absolute left-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                     {milestone.icon}
//                   </div>
                  
//                   <div className="ml-24 bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 flex-1">
//                     <div className="flex items-center gap-4 mb-3">
//                       <span className="text-3xl font-bold text-purple-300">
//                         {milestone.year}
//                       </span>
//                       <h4 className="text-xl font-semibold text-white">
//                         {milestone.title}
//                       </h4>
//                     </div>
//                     <p className="text-gray-300 leading-relaxed">
//                       {milestone.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* <div className="absolute left-8 -bottom-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
//               <ArrowUp className="h-6 w-6 animate-bounce" />
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Impact;



// Impact.jsx
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, FlaskConical, Home, DollarSign, Zap, Leaf, Heart, Eye, ChevronRight, Star, ArrowUp } from 'lucide-react';
import { IndianRupee } from 'lucide-react';
const Impact = ({ language }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [counters, setCounters] = useState({
    beneficiaries: 0,
    villages: 0,
    income: 0,
    production: 0,
  });

  // Animated counters
  useEffect(() => {
    const targets = {
      beneficiaries: 13640,
      villages: 682,
      income: 15000,
      production: 136400,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        beneficiaries: Math.floor(targets.beneficiaries * progress),
        villages: Math.floor(targets.villages * progress),
        income: Math.floor(targets.income * progress),
        production: Math.floor(targets.production * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Language-specific content
  const translations = {
    en: {
      headerTitle: 'Our Impact',
      headerDescription:
        'Measurable outcomes and real stories of transformation across rural India. Every number represents a life changed, a family empowered, and a community transformed.',
      statsTitle: 'Key Statistics',
      stats: [
        {
          icon: <Users className="h-8 w-8" />,
          label: 'Total Beneficiaries',
          description: 'Individuals directly benefiting from our programs',
          gradient: 'from-purple-500 via-pink-500 to-red-500',
          bgGradient: 'from-purple-50 to-pink-50',
        },
        {
          icon: <Home className="h-8 w-8" />,
          label: 'Gram Panchayats',
          description: 'Villages covered under our development initiatives',
          gradient: 'from-blue-500 via-cyan-500 to-teal-500',
          bgGradient: 'from-blue-50 to-cyan-50',
        },
        {
          icon: <IndianRupee className="h-6 w-6 text-white" />,
          label: 'Average Monthly Income',
          description: 'Per member income through dairy operations',
          gradient: 'from-green-500 via-emerald-500 to-lime-500',
          bgGradient: 'from-green-50 to-emerald-50',
        },
        {
          icon: <TrendingUp className="h-8 w-8" />,
          label: 'Daily Milk Production',
          description: 'Fresh milk produced daily by our network',
          gradient: 'from-orange-500 via-amber-500 to-yellow-500',
          bgGradient: 'from-orange-50 to-amber-50',
        },
      ],
      categoriesTitle: 'Areas of Impact',
      categoriesDescription:
        'Our comprehensive approach creates lasting change across multiple dimensions of rural development',
      impactCategories: [
        {
          title: 'Economic Impact',
          icon: <IndianRupee className="h-6 w-6 text-white" />,
          gradient: 'from-emerald-500 to-teal-600',
          items: [
            { metric: '₹1.5 Lakh', description: 'Monthly income per SHG group' },
            { metric: '13640', description: 'Indigenous Cows generating sustainable income' },
            { metric: '100+', description: 'Youth employed in dairy operations' },
            { metric: '100%', description: 'Women-led micro-enterprises established' },
          ],
        },
        {
          title: 'Environmental Impact',
          icon: <Leaf className="h-6 w-6" />,
          gradient: 'from-green-500 to-lime-600',
          items: [
            { metric: '14882 tons', description: 'Organic compost produced annually' },
            { metric: '75%', description: 'Reduction in chemical fertilizer dependency' },
            { metric: '682', description: 'Sustainable waste management systems' },
            { metric: '100%', description: 'Clean bio-energy generation from cow dung' },
          ],
        },
        {
          title: 'Social Impact',
          icon: <Heart className="h-6 w-6" />,
          gradient: 'from-pink-500 to-rose-600',
          items: [
            { metric: '6820', description: 'Rural families became dairy entrepreneurs' },
            { metric: '682', description: 'Village-level skill development programs' },
            { metric: '6820+', description: 'Women empowerment through SHG participation' },
            { metric: '95%', description: 'Youth retention in rural areas' },
          ],
        },
        {
          title: 'Agricultural Impact',
          icon: <Zap className="h-6 w-6" />,
          gradient: 'from-blue-500 to-indigo-600',
          items: [
            { metric: '100%', description: 'Certified organic farming practices adopted' },
            { metric: '200%', description: 'Soil health improvement through organic methods' },
            { metric: '50+', description: 'High-value crop cultivation training' },
            { metric: '25+', description: 'Market linkage for organic products' },
          ],
        },
      ],
      storiesTitle: 'Success Stories',
      storiesDescription: 'Real people, real transformations. These are the stories that inspire us every day',
      successStories: [
        {
          name: 'Sunita Devi',
          role: 'Dairy Entrepreneur',
          village: 'Gram Panchayat, Amethi',
          story: 'Through BGGY, I now earn ₹25,000 monthly from my 2 cows. My family has achieved financial independence and I’m inspiring other women in my village.',
          impact: '₹25,000/month',
          avatar: 'S',
          color: 'from-purple-500 to-pink-500',
        },
        {
          name: 'Rajesh Kumar',
          role: 'Dairy Hub Supervisor',
          village: 'Operations Team Lead',
          story: 'Leading a team of 10 youth in dairy operations has given me purpose and steady income. We’re building the future of rural employment.',
          impact: 'Team of 10 Youth',
          avatar: 'R',
          color: 'from-blue-500 to-cyan-500',
        },
        {
          name: 'Meera Sharma',
          role: 'Organic Farmer',
          village: 'Sustainable Agriculture',
          story: 'Converting to organic farming with cow-based fertilizers has doubled my crop yield and income while preserving our environment.',
          impact: '100% Yield Increase',
          avatar: 'M',
          color: 'from-green-500 to-emerald-500',
        },
      ],
      journeyTitle: 'Our Journey',
      journeyDescription: 'From inception to impact - milestones that mark our commitment to rural transformation',
      milestones: [
        {
          year: '2020',
          title: 'Vision Start',
          description: 'The vision for rural transformation began with a 5-member initiative.',
          icon: <Eye className="h-5 w-5" />,
        },
        {
          year: '2023',
          title: 'R&D Complete',
          description: 'The extensive research and development process was successfully completed.',
          icon: <FlaskConical className="h-5 w-5" />,
        },
        {
          year: '2023-2024',
          title: 'Milk Procurement',
          description: 'The first BGGY pilot program was launched in selected villages with 35 village-level milk collection centers.',
          icon: <Zap className="h-5 w-5" />,
        },
        {
          year: '2025',
          title: 'Registered under Ministry of Corporate Affairs',
          description: 'BGGY schemes are set to begin in the first 20 Gram Panchayats.',
          icon: <Heart className="h-5 w-5" />,
        },
        {
          year: '2027',
          title: 'BGGY Expansion',
          description: 'The target is to expand BGGY across 682 Gram Panchayats in the region.',
          icon: <TrendingUp className="h-5 w-5" />,
        },
      ],
      impactAchieved: 'Impact Achieved',
    },
    hi: {
      headerTitle: 'हमारा प्रभाव',
      headerDescription:
        'ग्रामीण भारत में मापनीय परिणाम और वास्तविक परिवर्तन की कहानियाँ। प्रत्येक संख्या एक बदला हुआ जीवन, एक सशक्त परिवार और एक परिवर्तित समुदाय को दर्शाती है।',
      statsTitle: 'प्रमुख आँकड़े',
      stats: [
        {
          icon: <Users className="h-8 w-8" />,
          label: 'कुल लाभार्थी',
          description: 'हमारे कार्यक्रमों से प्रत्यक्ष रूप से लाभान्वित होने वाले व्यक्ति',
          gradient: 'from-purple-500 via-pink-500 to-red-500',
          bgGradient: 'from-purple-50 to-pink-50',
        },
        {
          icon: <Home className="h-8 w-8" />,
          label: 'ग्राम पंचायतें',
          description: 'हमारी विकास पहलों के तहत कवर किए गए गाँव',
          gradient: 'from-blue-500 via-cyan-500 to-teal-500',
          bgGradient: 'from-blue-50 to-cyan-50',
        },
        {
          icon: <IndianRupee className="h-6 w-6 text-white" />,
          label: 'औसत मासिक आय',
          description: 'डेयरी संचालन के माध्यम से प्रति सदस्य आय',
          gradient: 'from-green-500 via-emerald-500 to-lime-500',
          bgGradient: 'from-green-50 to-emerald-50',
        },
        {
          icon: <TrendingUp className="h-8 w-8" />,
          label: 'दैनिक दूध उत्पादन',
          description: 'हमारे नेटवर्क द्वारा प्रतिदिन उत्पादित ताजा दूध',
          gradient: 'from-orange-500 via-amber-500 to-yellow-500',
          bgGradient: 'from-orange-50 to-amber-50',
        },
      ],
      categoriesTitle: 'प्रभाव के क्षेत्र',
      categoriesDescription:
        'हमारा व्यापक दृष्टिकोण ग्रामीण विकास के कई आयामों में स्थायी परिवर्तन लाता है',
      impactCategories: [
        {
          title: 'आर्थिक प्रभाव',
          icon: <IndianRupee className="h-6 w-6 text-white" />,
          gradient: 'from-emerald-500 to-teal-600',
          items: [
            { metric: '₹1.5 लाख', description: 'प्रति स्वयं सहायता समूह की मासिक आय' },
            { metric: '13640', description: 'स्थायी आय उत्पन्न करने वाली साहीवाल गायें' },
            { metric: '100+', description: 'डेयरी संचालन में नियोजित युवा' },
            { metric: '100%', description: 'महिला-नेतृत्व वाले सूक्ष्म-उद्यम स्थापित' },
          ],
        },
        {
          title: 'पर्यावरणीय प्रभाव',
          icon: <Leaf className="h-6 w-6" />,
          gradient: 'from-green-500 to-lime-600',
          items: [
            { metric: '14882 टन', description: 'प्रति वर्ष उत्पादित जैविक खाद' },
            { metric: '75%', description: 'रासायनिक उर्वरक निर्भरता में कमी' },
            { metric: '682', description: 'स्थायी अपशिष्ट प्रबंधन प्रणालियाँ' },
            { metric: '100%', description: 'गाय के गोबर से स्वच्छ जैव-ऊर्जा उत्पादन' },
          ],
        },
        {
          title: 'सामाजिक प्रभाव',
          icon: <Heart className="h-6 w-6" />,
          gradient: 'from-pink-500 to-rose-600',
          items: [
            { metric: '6820', description: 'ग्रामीण परिवार डेयरी उद्यमी बने' },
            { metric: '682', description: 'गाँव-स्तरीय कौशल विकास कार्यक्रम' },
            { metric: '6820+', description: 'स्वयं सहायता समूह भागीदारी के माध्यम से महिला सशक्तिकरण' },
            { metric: '95%', description: 'ग्रामीण क्षेत्रों में युवा प्रतिधारण' },
          ],
        },
        {
          title: 'कृषि प्रभाव',
          icon: <Zap className="h-6 w-6" />,
          gradient: 'from-blue-500 to-indigo-600',
          items: [
            { metric: '100%', description: 'प्रमाणित जैविक खेती प्रथाओं को अपनाया गया' },
            { metric: '200%', description: 'जैविक विधियों के माध्यम से मिट्टी के स्वास्थ्य में सुधार' },
            { metric: '50+', description: 'उच्च-मूल्य वाली फसल खेती प्रशिक्षण' },
            { metric: '25+', description: 'जैविक उत्पादों के लिए बाजार संबंध' },
          ],
        },
      ],
      storiesTitle: 'सफलता की कहानियाँ',
      storiesDescription: 'वास्तविक लोग, वास्तविक परिवर्तन। ये वे कहानियाँ हैं जो हमें हर दिन प्रेरित करती हैं',
      successStories: [
        {
          name: 'सुनीता देवी',
          role: 'डेयरी उद्यमी',
          village: 'ग्राम पंचायत, अमेठी',
          story: 'बीजीजीवाई के माध्यम से, मैं अब अपनी 2 गायों से प्रति माह ₹25,000 कमाती हूँ। मेरे परिवार ने वित्तीय स्वतंत्रता हासिल की है और मैं अपने गाँव की अन्य महिलाओं को प्रेरित कर रही हूँ।',
          impact: '₹25,000/माह',
          avatar: 'S',
          color: 'from-purple-500 to-pink-500',
        },
        {
          name: 'राजेश कुमार',
          role: 'डेयरी हब सुपरवाइज़र',
          village: 'संचालन टीम लीड',
          story: 'डेयरी संचालन में 10 युवाओं की टीम का नेतृत्व करने से मुझे उद्देश्य और स्थिर आय प्राप्त हुई है। हम ग्रामीण रोजगार का भविष्य बना रहे हैं।',
          impact: '10 युवाओं की टीम',
          avatar: 'R',
          color: 'from-blue-500 to-cyan-500',
        },
        {
          name: 'मीरा शर्मा',
          role: 'जैविक किसान',
          village: 'स्थायी कृषि',
          story: 'गाय-आधारित उर्वरकों के साथ जैविक खेती में परिवर्तन करने से मेरी फसल की पैदावार और आय दोगुनी हो गई है, साथ ही पर्यावरण की रक्षा भी हुई है।',
          impact: '100% पैदावार वृद्धि',
          avatar: 'M',
          color: 'from-green-500 to-emerald-500',
        },
      ],
      journeyTitle: 'हमारी यात्रा',
      journeyDescription: 'शुरुआत से प्रभाव तक - वे मील के पत्थर जो ग्रामीण परिवर्तन के प्रति हमारी प्रतिबद्धता को चिह्नित करते हैं',
      milestones: [
        {
          year: '2020',
          title: 'दृष्टिकोण शुरू',
          description: '5-सदस्यीय पहल के साथ ग्रामीण परिवर्तन की दृष्टि शुरू हुई।',
          icon: <Eye className="h-5 w-5" />,
        },
        {
          year: '2023',
          title: 'अनुसंधान और विकास पूरा',
          description: 'विस्तृत अनुसंधान और विकास प्रक्रिया सफलतापूर्वक पूरी हुई।',
          icon: <FlaskConical className="h-5 w-5" />,
        },
        {
          year: '2023-2024',
          title: 'दूध संग्रहण',
          description: 'चयनित गाँवों में 35 गाँव-स्तरीय दूध संग्रह केंद्रों के साथ पहला बीजीजीवाई पायलट कार्यक्रम शुरू किया गया।',
          icon: <Zap className="h-5 w-5" />,
        },
        {
          year: '2025',
          title: 'कॉर्पोरेट मामलों के मंत्रालय के तहत पंजीकृत',
          description: 'पहली 20 ग्राम पंचायतों में बीजीजीवाई योजनाएँ शुरू होने वाली हैं।',
          icon: <Heart className="h-5 w-5" />,
        },
        {
          year: '2027',
          title: 'बीजीजीवाई विस्तार',
          description: 'क्षेत्र में 682 ग्राम पंचायतों में बीजीजीवाई का विस्तार करने का लक्ष्य है।',
          icon: <TrendingUp className="h-5 w-5" />,
        },
      ],
      impactAchieved: 'प्रभाव प्राप्त हुआ',
    },
  };

  const content = translations[language];

  return (
    <section id="impact" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-6">
            {content.headerTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.headerDescription}
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {content.stats.map((stat, index) => (
            <div key={index} className={`relative group bg-gradient-to-br ${stat.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-white/50`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} text-white mb-6 shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 font-mono">
                  {index === 2 ? `₹${counters.income.toLocaleString()}` : index === 3 ? `${counters.production.toLocaleString()}L` : counters[Object.keys(counters)[index]].toLocaleString()}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-3">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Impact Categories */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">
            {content.categoriesTitle}
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {content.categoriesDescription}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {content.impactCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-6">
              {content.impactCategories[activeTab].items.map((item, index) => (
                <div key={index} className="group flex items-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r ${content.impactCategories[activeTab].gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {item.metric}
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">{item.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">
            {content.storiesTitle}
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {content.storiesDescription}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.successStories.map((story, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${story.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg`}>
                      {story.avatar}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{story.role}</p>
                    <p className="text-xs text-gray-500">{story.village}</p>
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                    "{story.story}"
                  </blockquote>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 text-center border border-gray-100">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-600">{content.impactAchieved}</span>
                    </div>
                    <p className="font-bold text-gray-900">{story.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        {/* <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <h3 className="text-4xl font-bold text-center text-white mb-4">
            {content.journeyTitle}
          </h3>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            {content.journeyDescription}
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400"></div>
            
            <div className="space-y-12">
              {content.milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center group">
                  <div className="absolute left-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {milestone.icon}
                  </div>
                  
                  <div className="ml-24 bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-bold text-purple-300">
                        {milestone.year}
                      </span>
                      <h4 className="text-xl font-semibold text-white">
                        {milestone.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-4">
    {content.journeyTitle}
  </h3>
  <p className="text-center text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
    {content.journeyDescription}
  </p>
  
  <div className="relative max-w-4xl mx-auto">
    {/* Desktop timeline line */}
    <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 hidden sm:block"></div>
    
    {/* Mobile timeline line */}
    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 sm:hidden"></div>
    
    <div className="space-y-6 sm:space-y-8 lg:space-y-12">
      {content.milestones.map((milestone, index) => (
        <div key={index} className="relative flex items-start sm:items-center group">
          {/* Icon circle - responsive sizing */}
          <div className="absolute left-0 sm:left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
            <div className="text-lg sm:text-xl">
              {milestone.icon}
            </div>
          </div>
          
          {/* Content card - responsive spacing and layout */}
          <div className="ml-16 sm:ml-20 lg:ml-24 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 flex-1 w-full">
            {/* Header - responsive layout */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
              <span className="text-2xl sm:text-3xl font-bold text-purple-300 flex-shrink-0">
                {milestone.year}
              </span>
              <h4 className="text-lg sm:text-xl font-semibold text-white break-words">
                {milestone.title}
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {milestone.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Impact;