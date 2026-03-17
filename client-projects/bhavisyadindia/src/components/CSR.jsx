// import React, { useState, useEffect } from 'react';
// import { 
//   Heart, 
//   CheckCircle, 
//   FileText, 
//   BarChart3, 
//   Users, 
//   Zap, 
//   Shield, 
//   Target, 
//   TrendingUp, 
//   Calendar, 
//   IndianRupee,
//   Leaf,
//   Download,
//   Video,
//   Camera,
//   DollarSign,
//   MessageSquare,
//   Star,
//   ArrowRight,
//   Sparkles,
//   Globe,
//   Award
// } from 'lucide-react';

// const CSR = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const csrCategories = [
//     {
//       icon: <Heart className="h-8 w-8" />,
//       title: "Rural Livelihood & Employment Generation",
//       description: "Direct employment and income generation for rural communities through sustainable dairy farming and allied activities",
//       gradient: "from-pink-500 to-rose-600",
//       bgGradient: "from-pink-50 to-rose-50",
//       stats: "13,640+ beneficiaries",
//       compliance: "Schedule VII (ii)"
//     },
//     {
//       icon: <Leaf className="h-8 w-8" />,
//       title: "Environmental Sustainability",
//       description: "Organic farming, waste management, and clean energy solutions for a greener tomorrow",
//       gradient: "from-green-500 to-emerald-600",
//       bgGradient: "from-green-50 to-emerald-50",
//       stats: "180 tons organic compost",
//       compliance: "Schedule VII (iv)"
//     },
//     {
//       icon: <FileText className="h-8 w-8" />,
//       title: "Promotion of Education & Skilling",
//       description: "Training programs for dairy farming, organic agriculture, and rural entrepreneurship development",
//       gradient: "from-blue-500 to-indigo-600",
//       bgGradient: "from-blue-50 to-indigo-50",
//       stats: "50+ youth trained",
//       compliance: "Schedule VII (ii)"
//     },
//     {
//       icon: <Zap className="h-8 w-8" />,
//       title: "Renewable Energy Initiatives",
//       description: "Bio-energy generation from cow dung and biomass for sustainable power solutions",
//       gradient: "from-amber-500 to-orange-600",
//       bgGradient: "from-amber-50 to-orange-50",
//       stats: "100% clean energy",
//       compliance: "Schedule VII (iv)"
//     },
//     {
//       icon: <Users className="h-8 w-8" />,
//       title: "Women Empowerment & Community Development",
//       description: "Women-led SHGs and micro-enterprises fostering inclusive economic growth",
//       gradient: "from-purple-500 to-violet-600",
//       bgGradient: "from-purple-50 to-violet-50",
//       stats: "100 women entrepreneurs",
//       compliance: "Schedule VII (iii)"
//     },
//     {
//       icon: <BarChart3 className="h-8 w-8" />,
//       title: "Rural Development Programs",
//       description: "Comprehensive rural infrastructure and capacity building initiatives",
//       gradient: "from-cyan-500 to-teal-600",
//       bgGradient: "from-cyan-50 to-teal-50",
//       stats: "682 villages covered",
//       compliance: "Schedule VII (x)"
//     }
//   ];

//   const proposalHighlights = [
//     {
//       icon: <Target className="h-8 w-8" />,
//       title: "Pilot Implementation",
//       description: "BGGY across 10 Gram Panchayats",
//       value: "₹1.01 Crore",
//       duration: "12 Months",
//       gradient: "from-purple-500 to-pink-500"
//     },
//     {
//       icon: <Users className="h-8 w-8" />,
//       title: "Direct Beneficiaries",
//       description: "100 rural families become dairy entrepreneurs",
//       value: "300+",
//       duration: "Immediate",
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: <IndianRupee className="h-8 w-8" />,
//       title: "Sustainable Income",
//       description: "Monthly income per SHG member",
//       value: "₹24,600",
//       duration: "Recurring",
//       gradient: "from-green-500 to-emerald-500"
//     },
//     {
//       icon: <Leaf className="h-8 w-8" />,
//       title: "Environmental Impact",
//       description: "Organic compost production annually",
//       value: "180 Tons",
//       duration: "Yearly",
//       gradient: "from-orange-500 to-amber-500"
//     }
//   ];

//   const whyPartner = [
//     {
//       icon: <Shield className="h-5 w-5" />,
//       title: "100% Grassroots Implementation",
//       description: "Real-time impact monitoring with community-level execution"
//     },
//     {
//       icon: <CheckCircle className="h-5 w-5" />,
//       title: "Schedule VII Compliance",
//       description: "Aligned with multiple categories of Companies Act requirements"
//     },
//     {
//       icon: <TrendingUp className="h-5 w-5" />,
//       title: "Transparent Fund Utilization",
//       description: "Monthly reporting with detailed financial accountability"
//     },
//     {
//       icon: <Globe className="h-5 w-5" />,
//       title: "Scalable Model",
//       description: "Proven framework for national-level replication and expansion"
//     },
//     {
//       icon: <Heart className="h-5 w-5" />,
//       title: "Direct Community Engagement",
//       description: "Personal interaction with beneficiaries and their families"
//     },
//     {
//       icon: <BarChart3 className="h-5 w-5" />,
//       title: "Measurable Outcomes",
//       description: "Verifiable impact metrics and comprehensive assessment tools"
//     }
//   ];

//   const monitoringFeatures = [
//     { icon: <FileText className="h-5 w-5" />, label: "Monthly Reports", status: "✓" },
//     { icon: <Camera className="h-5 w-5" />, label: "Photo Documentation", status: "✓" },
//     { icon: <Video className="h-5 w-5" />, label: "Video Updates", status: "✓" },
//     { icon: <DollarSign className="h-5 w-5" />, label: "Financial Transparency", status: "✓" },
//     { icon: <MessageSquare className="h-5 w-5" />, label: "Beneficiary Feedback", status: "✓" },
//     { icon: <Award className="h-5 w-5" />, label: "Impact Assessment", status: "✓" }
//   ];

//   return (
//     <section id="csr" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-green-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Header */}
//         <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-lg">
//             <Heart className="h-10 w-10 text-white" />
//           </div>
//           <h2 className="text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
//             CSR Partnership
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Transform rural India through strategic CSR initiatives. Partner with us to create sustainable impact 
//             that aligns with your corporate values and regulatory requirements.
//           </p>
//         </div>

//         {/* CSR Categories */}
//         <div className="mb-24">
//           <div className="text-center mb-16">
//             <h3 className="text-4xl font-bold text-gray-900 mb-4">
//               Schedule VII Compliance
//             </h3>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our initiatives perfectly align with multiple categories of the Companies Act, ensuring seamless CSR compliance
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {csrCategories.map((category, index) => (
//               <div
//                 key={index}
//                 className={`group relative bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-white/50`}
//                 onMouseEnter={() => setActiveCard(index)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
//                 <div className="relative z-10">
//                   <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                     {category.icon}
//                   </div>
                  
//                   <div className="mb-4">
//                     <span className="inline-block bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 mb-3">
//                       {category.compliance}
//                     </span>
//                     <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
//                       {category.title}
//                     </h4>
//                   </div>
                  
//                   <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                     {category.description}
//                   </p>
                  
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm font-semibold text-gray-800">
//                       {category.stats}
//                     </span>
//                     <ArrowRight className={`h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-all duration-300 ${activeCard === index ? 'translate-x-1' : ''}`} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Proposal Highlights */}
//         <div className="mb-24">
//           <div className="text-center mb-16">
//             <h3 className="text-4xl font-bold text-gray-900 mb-4">
//               Phase 1 Proposal Highlights
//             </h3>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Strategic investment opportunities with measurable outcomes and sustainable impact
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {proposalHighlights.map((highlight, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center border border-white/20"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
//                 <div className="relative z-10">
//                   <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                     {highlight.icon}
//                   </div>
                  
//                   <div className="text-4xl font-bold text-gray-900 mb-3 font-mono">
//                     {highlight.value}
//                   </div>
                  
//                   <h4 className="text-lg font-bold text-gray-900 mb-3">
//                     {highlight.title}
//                   </h4>
                  
//                   <p className="text-gray-600 text-sm mb-4 leading-relaxed">
//                     {highlight.description}
//                   </p>
                  
//                   <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-3">
//                     <div className="flex items-center justify-center gap-2">
//                       <Calendar className="h-4 w-4 text-gray-600" />
//                       <span className="text-sm font-medium text-gray-700">
//                         {highlight.duration}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Why Partner */}
//         <div className="mb-24">
//           <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
//             <div className="text-center mb-12">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
//                 <Sparkles className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-4xl font-bold text-gray-900 mb-4">
//                 Why Partner with Bhavisyad India?
//               </h3>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 We offer more than just CSR compliance - we deliver transformational impact with full transparency
//               </p>
//             </div>
            
//             <div className="grid lg:grid-cols-2 gap-12">
//               <div className="space-y-8">
//                 {whyPartner.map((reason, index) => (
//                   <div key={index} className="group flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
//                     <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       {reason.icon}
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900 mb-2">{reason.title}</h4>
//                       <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-white shadow-2xl">
//                   <div className="text-center mb-8">
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
//                       <Shield className="h-6 w-6 text-white" />
//                     </div>
//                     <h4 className="text-2xl font-bold mb-2">Impact Monitoring</h4>
//                     <p className="text-gray-300 text-sm">Real-time tracking and transparent reporting</p>
//                   </div>
                  
//                   <div className="space-y-4">
//                     {monitoringFeatures.map((feature, index) => (
//                       <div key={index} className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
//                         <div className="flex items-center gap-3">
//                           <div className="text-white/80">{feature.icon}</div>
//                           <span className="text-white font-medium">{feature.label}</span>
//                         </div>
//                         <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
//                           <span className="text-white font-bold text-sm">{feature.status}</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center">
//           <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
//             <div className="relative z-10">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
//                 <Star className="h-10 w-10 text-white" />
//               </div>
              
//               <h3 className="text-4xl font-bold text-white mb-6">
//                 Ready to Transform Rural India?
//               </h3>
              
//               <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
//                 Join us in creating sustainable livelihoods and empowering rural communities. 
//                 Your CSR partnership can make a real difference in the lives of thousands of farming families 
//                 while ensuring complete regulatory compliance.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <button className="group bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
//                   <Download className="h-5 w-5 group-hover:animate-bounce" />
//                   <a href="https://in.docworkspace.com/d/sIH6ci483mLnowwY?sa=601.1074">Download Proposal</a>
                  
//                 </button>
//                 <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
//                   <Calendar className="h-5 w-5 group-hover:animate-pulse" />
//                   Schedule Meeting
//                 </button>
//               </div>
              
//               <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-white">24/7</div>
//                   <div className="text-white/70 text-sm">Support Available</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-white">100%</div>
//                   <div className="text-white/70 text-sm">Compliance Guaranteed</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-white">∞</div>
//                   <div className="text-white/70 text-sm">Scalable Impact</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CSR;






// CSR.jsx
import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  CheckCircle, 
  FileText, 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  Target, 
  TrendingUp, 
  Calendar, 
  IndianRupee,
  Leaf,
  Download,
  Video,
  Camera,
  DollarSign,
  MessageSquare,
  Star,
  ArrowRight,
  Sparkles,
  Globe,
  Award
} from 'lucide-react';

const CSR = ({ language }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Language-specific content
  const translations = {
    en: {
      headerTitle: 'CSR Partnership',
      headerDescription:
        'Transform rural India through strategic CSR initiatives. Partner with us to create sustainable impact that aligns with your corporate values and regulatory requirements.',
      categoriesTitle: 'Schedule VII Compliance',
      categoriesDescription:
        'Our initiatives perfectly align with multiple categories of the Companies Act, ensuring seamless CSR compliance',
      csrCategories: [
        {
          icon: <Heart className="h-8 w-8" />,
          title: 'Rural Livelihood & Employment Generation',
          description: 'Direct employment and income generation for rural communities through sustainable dairy farming and allied activities',
          gradient: 'from-pink-500 to-rose-600',
          bgGradient: 'from-pink-50 to-rose-50',
          stats: '13,640+ beneficiaries',
          compliance: 'Schedule VII (ii)',
        },
        {
          icon: <Leaf className="h-8 w-8" />,
          title: 'Environmental Sustainability',
          description: 'Organic farming, waste management, and clean energy solutions for a greener tomorrow',
          gradient: 'from-green-500 to-emerald-600',
          bgGradient: 'from-green-50 to-emerald-50',
          stats: '136.4 tons/day organic waste management',
          compliance: 'Schedule VII (iv)',
        },
        {
          icon: <FileText className="h-8 w-8" />,
          title: 'Promotion of Education & Skilling',
          description: 'Training programs for dairy farming, organic agriculture, and rural entrepreneurship development',
          gradient: 'from-blue-500 to-indigo-600',
          bgGradient: 'from-blue-50 to-indigo-50',
          stats: '100+ youth trained',
          compliance: 'Schedule VII (ii)',
        },
        {
          icon: <Zap className="h-8 w-8" />,
          title: 'Renewable Energy Initiatives',
          description: 'Bio-energy generation from cow dung and biomass for sustainable power solutions',
          gradient: 'from-amber-500 to-orange-600',
          bgGradient: 'from-amber-50 to-orange-50',
          stats: '100% clean energy',
          compliance: 'Schedule VII (iv)',
        },
        {
          icon: <Users className="h-8 w-8" />,
          title: 'Women Empowerment & Community Development',
          description: 'Women-led SHGs and micro-enterprises fostering inclusive economic growth',
          gradient: 'from-purple-500 to-violet-600',
          bgGradient: 'from-purple-50 to-violet-50',
          stats: '100 women entrepreneurs',
          compliance: 'Schedule VII (iii)',
        },
        {
          icon: <BarChart3 className="h-8 w-8" />,
          title: 'Rural Development Programs',
          description: 'Comprehensive rural infrastructure and capacity building initiatives',
          gradient: 'from-cyan-500 to-teal-600',
          bgGradient: 'from-cyan-50 to-teal-50',
          stats: '682 villages covered',
          compliance: 'Schedule VII (x)',
        },
      ],
      proposalTitle: 'Phase 1 Proposal Highlights',
      proposalDescription: 'Strategic investment opportunities with measurable outcomes and sustainable impact',
      proposalHighlights: [
        {
          icon: <Target className="h-8 w-8" />,
          title: 'Pilot Implementation',
          description: 'BGGY across 10 Gram Panchayats',
          value: '₹1.01 Crore',
          duration: '3 Months',
          gradient: 'from-purple-500 to-pink-500',
        },
        {
          icon: <Users className="h-8 w-8" />,
          title: 'Direct Beneficiaries',
          description: '100 rural families become dairy entrepreneurs',
          value: '300+',
          duration: 'Immediate',
          gradient: 'from-blue-500 to-cyan-500',
        },
        {
          icon: <IndianRupee className="h-8 w-8" />,
          title: 'Sustainable Income',
          description: 'Monthly income per SHG member',
          value: '₹15,000',
          duration: 'Recurring',
          gradient: 'from-green-500 to-emerald-500',
        },
        {
          icon: <Leaf className="h-8 w-8" />,
          title: 'Environmental Impact',
          description: 'Organic compost production annually',
          value: '180 Tons',
          duration: 'Yearly',
          gradient: 'from-orange-500 to-amber-500',
        },
      ],
      whyPartnerTitle: 'Why Partner with Bhavisyad India?',
      whyPartnerDescription: 'We offer more than just CSR compliance - we deliver transformational impact with full transparency',
      whyPartner: [
        {
          icon: <Shield className="h-5 w-5" />,
          title: '100% Grassroots Implementation',
          description: 'Real-time impact monitoring with community-level execution',
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: 'Schedule VII Compliance',
          description: 'Aligned with multiple categories of Companies Act requirements',
        },
        {
          icon: <TrendingUp className="h-5 w-5" />,
          title: 'Transparent Fund Utilization',
          description: 'Monthly reporting with detailed financial accountability',
        },
        {
          icon: <Globe className="h-5 w-5" />,
          title: 'Scalable Model',
          description: 'Proven framework for national-level replication and expansion',
        },
        {
          icon: <Heart className="h-5 w-5" />,
          title: 'Direct Community Engagement',
          description: 'Personal interaction with beneficiaries and their families',
        },
        {
          icon: <BarChart3 className="h-5 w-5" />,
          title: 'Measurable Outcomes',
          description: 'Verifiable impact metrics and comprehensive assessment tools',
        },
      ],
      monitoringTitle: 'Impact Monitoring',
      monitoringDescription: 'Real-time tracking and transparent reporting',
      monitoringFeatures: [
        { icon: <FileText className="h-5 w-5" />, label: 'Monthly Reports', status: '✓' },
        { icon: <Camera className="h-5 w-5" />, label: 'Photo Documentation', status: '✓' },
        { icon: <Video className="h-5 w-5" />, label: 'Video Updates', status: '✓' },
        { icon: <DollarSign className="h-5 w-5" />, label: 'Financial Transparency', status: '✓' },
        { icon: <MessageSquare className="h-5 w-5" />, label: 'Beneficiary Feedback', status: '✓' },
        { icon: <Award className="h-5 w-5" />, label: 'Impact Assessment', status: '✓' },
      ],
      ctaTitle: 'Ready to Transform Rural India?',
      ctaDescription:
        'Join us in creating sustainable livelihoods and empowering rural communities. Your CSR partnership can make a real difference in the lives of thousands of farming families while ensuring complete regulatory compliance.',
      ctaButtons: {
        download: 'Download Proposal',
        schedule: 'Schedule Meeting',
      },
      ctaStats: [
        { value: '24/7', label: 'Support Available' },
        { value: '100%', label: 'Compliance Guaranteed' },
        { value: '∞', label: 'Scalable Impact' },
      ],
    },
    hi: {
      headerTitle: 'सीएसआर साझेदारी',
      headerDescription:
        'रणनीतिक सीएसआर पहलों के माध्यम से ग्रामीण भारत को बदलें। हमारे साथ साझेदारी करें ताकि आपके कॉर्पोरेट मूल्यों और नियामक आवश्यकताओं के अनुरूप स्थायी प्रभाव पैदा किया जा सके।',
      categoriesTitle: 'शेड्यूल VII अनुपालन',
      categoriesDescription:
        'हमारी पहलें कंपनियों अधिनियम की कई श्रेणियों के साथ पूरी तरह से संरेखित हैं, जो निर्बाध सीएसआर अनुपालन सुनिश्चित करती हैं।',
      csrCategories: [
        {
          icon: <Heart className="h-8 w-8" />,
          title: 'ग्रामीण आजीविका और रोजगार सृजन',
          description: 'स्थायी डेयरी खेती और संबद्ध गतिविधियों के माध्यम से ग्रामीण समुदायों के लिए प्रत्यक्ष रोजगार और आय सृजन',
          gradient: 'from-pink-500 to-rose-600',
          bgGradient: 'from-pink-50 to-rose-50',
          stats: '13,640+ लाभार्थी',
          compliance: 'शेड्यूल VII (ii)',
        },
        {
          icon: <Leaf className="h-8 w-8" />,
          title: 'पर्यावरणीय स्थिरता',
          description: 'जैविक खेती, अपशिष्ट प्रबंधन और हरित भविष्य के लिए स्वच्छ ऊर्जा समाधान',
          gradient: 'from-green-500 to-emerald-600',
          bgGradient: 'from-green-50 to-emerald-50',
          stats: 'हर दिन 136.4 टन जैविक कचरे का पर्यावरण के अनुकूल समाधान',
          compliance: 'शेड्यूल VII (iv)',
        },
        {
          icon: <FileText className="h-8 w-8" />,
          title: 'शिक्षा और कौशल विकास को बढ़ावा',
          description: 'डेयरी खेती, जैविक कृषि और ग्रामीण उद्यमिता विकास के लिए प्रशिक्षण कार्यक्रम',
          gradient: 'from-blue-500 to-indigo-600',
          bgGradient: 'from-blue-50 to-indigo-50',
          stats: '100+ युवाओं को प्रशिक्षित किया गया',
          compliance: 'शेड्यूल VII (ii)',
        },
        {
          icon: <Zap className="h-8 w-8" />,
          title: 'नवीकरणीय ऊर्जा पहल',
          description: 'गाय के गोबर और बायोमास से जैव-ऊर्जा उत्पादन स्थायी ऊर्जा समाधानों के लिए',
          gradient: 'from-amber-500 to-orange-600',
          bgGradient: 'from-amber-50 to-orange-50',
          stats: '100% स्वच्छ ऊर्जा',
          compliance: 'शेड्यूल VII (iv)',
        },
        {
          icon: <Users className="h-8 w-8" />,
          title: 'महिला सशक्तिकरण और सामुदायिक विकास',
          description: 'महिला-नेतृत्व वाले स्वयं सहायता समूह और सूक्ष्म-उद्यम समावेशी आर्थिक विकास को बढ़ावा देते हैं',
          gradient: 'from-purple-500 to-violet-600',
          bgGradient: 'from-purple-50 to-violet-50',
          stats: '100 महिला उद्यमी',
          compliance: 'शेड्यूल VII (iii)',
        },
        {
          icon: <BarChart3 className="h-8 w-8" />,
          title: 'ग्रामीण विकास कार्यक्रम',
          description: 'व्यापक ग्रामीण बुनियादी ढांचा और क्षमता निर्माण पहल',
          gradient: 'from-cyan-500 to-teal-600',
          bgGradient: 'from-cyan-50 to-teal-50',
          stats: '682 गाँवों को कवर किया गया',
          compliance: 'शेड्यूल VII (x)',
        },
      ],
      proposalTitle: 'चरण 1 प्रस्ताव हाइलाइट्स',
      proposalDescription: 'मापनीय परिणामों और स्थायी प्रभाव के साथ रणनीतिक निवेश के अवसर',
      proposalHighlights: [
        {
          icon: <Target className="h-8 w-8" />,
          title: 'पायलट कार्यान्वयन',
          description: '10 ग्राम पंचायतों में बीजीजीवाई',
          value: '₹1.01 करोड़',
          duration: '3 महीने',
          gradient: 'from-purple-500 to-pink-500',
        },
        {
          icon: <Users className="h-8 w-8" />,
          title: 'प्रत्यक्ष लाभार्थी',
          description: '100 ग्रामीण परिवार डेयरी उद्यमी बनते हैं',
          value: '300+',
          duration: 'तत्काल',
          gradient: 'from-blue-500 to-cyan-500',
        },
        {
          icon: <IndianRupee className="h-8 w-8" />,
          title: 'स्थायी आय',
          description: 'प्रति स्वयं सहायता समूह सदस्य मासिक आय',
          value: '₹15,000',
          duration: 'आवर्ती',
          gradient: 'from-green-500 to-emerald-500',
        },
        {
          icon: <Leaf className="h-8 w-8" />,
          title: 'पर्यावरणीय प्रभाव',
          description: 'प्रति वर्ष जैविक खाद उत्पादन',
          value: '180 टन',
          duration: 'वार्षिक',
          gradient: 'from-orange-500 to-amber-500',
        },
      ],
      whyPartnerTitle: 'भविष्यद इंडिया के साथ साझेदारी क्यों करें?',
      whyPartnerDescription: 'हम केवल सीएसआर अनुपालन से अधिक प्रदान करते हैं - हम पूर्ण पारदर्शिता के साथ परिवर्तनकारी प्रभाव प्रदान करते हैं',
      whyPartner: [
        {
          icon: <Shield className="h-5 w-5" />,
          title: '100% जमीनी स्तर पर कार्यान्वयन',
          description: 'समुदाय-स्तरीय निष्पादन के साथ वास्तविक समय प्रभाव निगरानी',
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: 'शेड्यूल VII अनुपालन',
          description: 'कंपनियों अधिनियम की कई श्रेणियों के साथ संरेखित',
        },
        {
          icon: <TrendingUp className="h-5 w-5" />,
          title: 'पारदर्शी निधि उपयोग',
          description: 'विस्तृत वित्तीय जवाबदेही के साथ मासिक रिपोर्टिंग',
        },
        {
          icon: <Globe className="h-5 w-5" />,
          title: 'स्केलेबल मॉडल',
          description: 'राष्ट्रीय स्तर पर प्रतिकृति और विस्तार के लिए सिद्ध ढांचा',
        },
        {
          icon: <Heart className="h-5 w-5" />,
          title: 'प्रत्यक्ष समुदाय संलग्नता',
          description: 'लाभार्थियों और उनके परिवारों के साथ व्यक्तिगत बातचीत',
        },
        {
          icon: <BarChart3 className="h-5 w-5" />,
          title: 'मापनीय परिणाम',
          description: 'सत्यापन योग्य प्रभाव मेट्रिक्स और व्यापक मूल्यांकन उपकरण',
        },
      ],
      monitoringTitle: 'प्रभाव निगरानी',
      monitoringDescription: 'वास्तविक समय ट्रैकिंग और पारदर्शी रिपोर्टिंग',
      monitoringFeatures: [
        { icon: <FileText className="h-5 w-5" />, label: 'मासिक रिपोर्ट', status: '✓' },
        { icon: <Camera className="h-5 w-5" />, label: 'फोटो प्रलेखन', status: '✓' },
        { icon: <Video className="h-5 w-5" />, label: 'वीडियो अपडेट', status: '✓' },
        { icon: <DollarSign className="h-5 w-5" />, label: 'वित्तीय पारदर्शिता', status: '✓' },
        { icon: <MessageSquare className="h-5 w-5" />, label: 'लाभार्थी प्रतिक्रिया', status: '✓' },
        { icon: <Award className="h-5 w-5" />, label: 'प्रभाव मूल्यांकन', status: '✓' },
      ],
      ctaTitle: 'क्या आप ग्रामीण भारत को बदलने के लिए तैयार हैं?',
      ctaDescription:
        'हमारे साथ जुड़ें और ग्रामीण समुदायों को सशक्त बनाते हुए स्थायी आजीविका बनाएं। आपकी सीएसआर साझेदारी हजारों किसान परिवारों के जीवन में वास्तविक बदलाव ला सकती है, साथ ही पूर्ण नियामक अनुपालन सुनिश्चित करती है।',
      ctaButtons: {
        download: 'प्रस्ताव डाउनलोड करें',
        schedule: 'बैठक शेड्यूल करें',
      },
      ctaStats: [
        { value: '24/7', label: 'समर्थन उपलब्ध' },
        { value: '100%', label: 'अनुपालन की गारंटी' },
        { value: '∞', label: 'स्केलेबल प्रभाव' },
      ],
    },
  };

  const content = translations[language];

  return (
    <section id="csr" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-green-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-lg">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            {content.headerTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {content.headerDescription}
          </p>
        </div>

        {/* CSR Categories */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              {content.categoriesTitle}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content.categoriesDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.csrCategories.map((category, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-white/50`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 mb-3">
                      {category.compliance}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {category.title}
                    </h4>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-800">
                      {category.stats}
                    </span>
                    <ArrowRight className={`h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-all duration-300 ${activeCard === index ? 'translate-x-1' : ''}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proposal Highlights */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              {content.proposalTitle}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content.proposalDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.proposalHighlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {highlight.icon}
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-900 mb-3 font-mono">
                    {highlight.value}
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {highlight.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-3">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {highlight.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner */}
        <div className="mb-24">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {content.whyPartnerTitle}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {content.whyPartnerDescription}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                {content.whyPartner.map((reason, index) => (
                  <div key={index} className="group flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{reason.title}</h4>
                      <p className="text-black text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-white shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{content.monitoringTitle}</h4>
                    <p className="text-gray-300 text-sm">{content.monitoringDescription}</p>
                  </div>
                  
                  <div className="space-y-4">
                    {content.monitoringFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="text-white/80">{feature.icon}</div>
                          <span className="text-white font-medium">{feature.label}</span>
                        </div>
                        <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                          <span className="text-white font-bold text-sm">{feature.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Star className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-6">
                {content.ctaTitle}
              </h3>
              
              <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                {content.ctaDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  <a href="https://in.docworkspace.com/d/sIH6ci483mLnowwY?sa=601.1074">{content.ctaButtons.download}</a>
                </button>
                <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <Calendar className="h-5 w-5 group-hover:animate-pulse" />
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6QaJPgsmQpI-B9F3B8EF4Bd_HaueCv7PKqkFyTd91gEpy7Q/viewform">{content.ctaButtons.schedule}</a>
            
                </button>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {content.ctaStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSR;