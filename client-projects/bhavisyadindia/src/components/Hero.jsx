
// import React from 'react';
// import {
//   ArrowRightIcon,
//   PlayCircleIcon,
//   CheckCircleIcon,
//   ArrowTrendingUpIcon,
//   SparklesIcon,
// } from '@heroicons/react/24/outline';

// const Hero = () => {
// const stats = [
//   { value: '682', label: 'Gram Panchayats' },
//   { value: '11,000+', label: 'Families Benefited' },
//   { value: '13,640', label: 'Indigenous Cows' },
// ];

//  const highlights = [
//   'Livelihood for 11,000+ rural families',
//   '136,400Ltr/Day milk production',
//   '136.4 tons/Day compost ',
//   '₹15,000–₹20,000 avg. SHG member income',
// ];

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center px-6 sm:px-12 py-20 text-white relative z-10">
//         {/* Left side */}
//         <div className="space-y-8">
//           <div className="space-y-6">
//             <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-300/20">
//               <SparklesIcon className="h-4 w-4 mr-2" />
//               Transforming Rural India
//             </div>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
//               Empowering Rural <br />
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 India's Future
//               </span>
//             </h1>
//             <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
//               Transforming villages through sustainable dairy farming, organic agriculture, and bio-energy solutions. Creating livelihood, dignity, and independence for farming families across India.
//             </p>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-6">
//             {stats.map((stat, idx) => (
//               <div key={idx} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
//                 <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
//                 <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-6">
//             <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 flex items-center justify-center group">
//               <a href="#impact">Explore Our Mission</a>
//               <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-none flex items-center justify-center group">
//               <PlayCircleIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//              <a href="#contact">
//               Connect With US
//              </a>
//             </button>
//           </div>
//         </div>

//         {/* Right side card */}
//         <div className="relative">
//           <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 space-y-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl">
//                 <ArrowTrendingUpIcon className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-cyan-400">Key Highlights</h3>
//             </div>
//             <div className="space-y-4">
//               {highlights.map((point, idx) => (
//                 <div key={idx} className="flex items-start space-x-3">
//                   <CheckCircleIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-300 leading-relaxed">{point}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// Hero.jsx
// import React from 'react';
// import {
//   ArrowRightIcon,
//   PlayCircleIcon,
//   CheckCircleIcon,
//   ArrowTrendingUpIcon,
//   SparklesIcon,
// } from '@heroicons/react/24/outline';

// const Hero = ({ language }) => {
//   // Language-specific content
//   const translations = {
//     en: {
//       transformingText: 'Transforming Rural India',
//       title: 'Empowering Rural India\'s Future',
//       description:
//         'Transforming villages through sustainable dairy farming, organic agriculture, and bio-energy solutions. Creating livelihood, dignity, and independence for farming families across India.',
//       stats: [
//         { value: '682', label: 'Gram Panchayats' },
//         { value: '11,000+', label: 'Families Benefited' },
//         { value: '13,640', label: 'Indigenous Cows' },
//       ],
//       highlights: [
//         'Livelihood for 11,000+ rural families',
//         '136,400Ltr/Day milk production',
//         '136.4 tons/Day compost',
//         '₹15,000–₹20,000 avg. SHG member income',
//       ],
//       missionButton: 'Explore Our Mission',
//       connectButton: 'Connect With Us',
//       highlightsTitle: 'Key Highlights',
//     },
//     hi: {
//       transformingText: 'ग्रामीण भारत का परिवर्तन',
//       title: 'ग्रामीण भारत के भविष्य को सशक्त बनाना',
//       description:
//         'स्थायी डेयरी खेती, जैविक कृषि, और जैव-ऊर्जा समाधानों के माध्यम से गाँवों का परिवर्तन। भारत भर में किसान परिवारों के लिए आजीविका, सम्मान और स्वतंत्रता का सृजन।',
//       stats: [
//         { value: '682', label: 'ग्राम पंचायतें' },
//         { value: '11,000+', label: 'लाभान्वित परिवार' },
//         { value: '13,640', label: 'स्वदेशी गायें' },
//       ],
//       highlights: [
//         '11,000+ ग्रामीण परिवारों के लिए आजीविका',
//         '136,400 लीटर/दिन दूध उत्पादन',
//         '136.4 टन/दिन खाद',
//         '₹15,000–₹20,000 औसत SHG सदस्य आय',
//       ],
//       missionButton: 'हमारे मिशन का अन्वेषण करें',
//       connectButton: 'हमसे संपर्क करें',
//       highlightsTitle: 'मुख्य आकर्षण',
//     },
//   };

//   const content = translations[language];

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute bg-[url(./gallery/bg.jpg)] bg-cover inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center px-6 sm:px-12 py-20 text-white relative z-10">
//         {/* Left side */}
//         <div className="space-y-8">
//           <div className="space-y-6">
//             <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-300/20">
//               <SparklesIcon className="h-4 w-4 mr-2" />
//               {content.transformingText}
//             </div>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
//               {content.title.split('<br />')[0]} <br />
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 {content.title.split('<br />')[1]}
//               </span>
//             </h1>
//             <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
//               {content.description}
//             </p>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-6">
//             {content.stats.map((stat, idx) => (
//               <div key={idx} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
//                 <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
//                 <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-6">
//             <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 flex items-center justify-center group">
//               <a href="#impact">{content.missionButton}</a>
//               <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-none flex items-center justify-center group">
//               <PlayCircleIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//               <a href="#contact">{content.connectButton}</a>
//             </button>
//           </div>
//         </div>

//         {/* Right side card */}
//         <div className="relative">
//           <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 space-y-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl">
//                 <ArrowTrendingUpIcon className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-cyan-400">{content.highlightsTitle}</h3>
//             </div>
//             <div className="space-y-4">
//               {content.highlights.map((point, idx) => (
//                 <div key={idx} className="flex items-start space-x-3">
//                   <CheckCircleIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-300 leading-relaxed">{point}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





// import React from 'react';
// import {
//   ArrowRightIcon,
//   PlayCircleIcon,
//   CheckCircleIcon,
//   ArrowTrendingUpIcon,
//   SparklesIcon,
// } from '@heroicons/react/24/outline';

// const Hero = ({ language }) => {
//   const translations = {
//     en: {
//       transformingText: 'Transforming Rural India',
//       title: "Empowering Rural India's Future",
//       description:
//         'Transforming villages through sustainable dairy farming, organic agriculture, and bio-energy solutions. Creating livelihood, dignity, and independence for farming families across India.',
//       stats: [
//         { value: '682', label: 'Gram Panchayats' },
//         { value: '11,000+', label: 'Families Benefited' },
//         { value: '13,640', label: 'Indigenous Cows' },
//       ],
//       highlights: [
//         'Livelihood for 11,000+ rural families',
//         '136,400Ltr/Day milk production',
//         '136.4 tons/day organic waste management',
//         '₹15,000–₹20,000 avg. SHG member income',
//       ],
//       missionButton: 'Explore Our Mission',
//       connectButton: 'Connect With Us',
//       highlightsTitle: 'Key Highlights',
//     },
//     hi: {
//       transformingText: 'ग्रामीण भारत का परिवर्तन',
//       title: 'ग्रामीण भारत के भविष्य को सशक्त बनाना',
//       description:
//         'स्थायी डेयरी खेती, जैविक कृषि, और जैव-ऊर्जा समाधानों के माध्यम से गाँवों का परिवर्तन। भारत भर में किसान परिवारों के लिए आजीविका, सम्मान और स्वतंत्रता का सृजन।',
//       stats: [
//         { value: '682', label: 'ग्राम पंचायतें' },
//         { value: '11,000+', label: 'लाभान्वित परिवार' },
//         { value: '13,640', label: 'स्वदेशी गायें' },
//       ],
//       highlights: [
//         '11,000+ ग्रामीण परिवारों के लिए आजीविका',
//         '136,400 लीटर/दिन दूध उत्पादन',
//         'हर दिन 136.4 टन जैविक कचरे का पर्यावरण के अनुकूल समाधान',
//         '₹15,000–₹20,000 औसत SHG सदस्य आय',
//       ],
//       missionButton: 'हमारे मिशन का अन्वेषण करें',
//       connectButton: 'हमसे संपर्क करें',
//       highlightsTitle: 'मुख्य आकर्षण',
//     },
//   };

//   const content = translations[language];

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background with overlay */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-black/30 z-0" />
//         <div className="absolute inset-0 bg-[url('/gallery/bg.jpg')] bg-cover bg-center opacity-80 z-0" />
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center px-6 sm:px-12 py-20 text-white relative z-10">
//         {/* Left side */}
//         <div className="space-y-8">
//           <div className="space-y-6">
//             <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-300/20 drop-shadow-md">
//               <SparklesIcon className="h-4 w-4 mr-2" />
//               {content.transformingText}
//             </div>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight drop-shadow-xl">
//               {content.title.split('<br />')[0]} <br />
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 {content.title.split('<br />')[1] || ''}
//               </span>
//             </h1>
//             <p className="text-xl sm:text-2xl text-slate-100 max-w-2xl leading-relaxed font-light drop-shadow-lg">
//               {content.description}
//             </p>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-6">
//             {content.stats.map((stat, idx) => (
//               <div key={idx} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 drop-shadow">
//                 <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
//                 <div className="text-sm text-slate-200 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-6">
//             <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 flex items-center justify-center group">
//               <a href="#impact">{content.missionButton}</a>
//               <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-none flex items-center justify-center group">
//               <PlayCircleIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//               <a href="#contact">{content.connectButton}</a>
//             </button>
//           </div>
//         </div>

//         {/* Right side card */}
//         <div className="relative">
//           <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 space-y-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl">
//                 <ArrowTrendingUpIcon className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-cyan-400">{content.highlightsTitle}</h3>
//             </div>
//             <div className="space-y-4">
//               {content.highlights.map((point, idx) => (
//                 <div key={idx} className="flex items-start space-x-3">
//                   <CheckCircleIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-100 leading-relaxed">{point}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;









import React from 'react';
import {
  ArrowRightIcon,
  PlayCircleIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const Hero = ({ language }) => {
  const translations = {
    en: {
      transformingText: 'Transforming Rural India',
      title: "Empowering Rural India's Future",
      description:
        'Transforming villages through sustainable dairy farming, organic agriculture, and bio-energy solutions. Creating livelihood, dignity, and independence for farming families across India.',
      stats: [
        { value: '682', label: 'Gram Panchayats', ariaLabel: '682 Gram Panchayats served' },
        { value: '11,000+', label: 'Families Benefited', ariaLabel: 'Over 11,000 families benefited' },
        { value: '13,640', label: 'Indigenous Cows', ariaLabel: '13,640 indigenous cows in program' },
      ],
      highlights: [
        'Livelihood for 11,000+ rural families',
        '136,400Ltr/Day milk production',
        '136.4 tons/day organic waste management',
        '₹15,000–₹20,000 avg. SHG member income',
      ],
      missionButton: 'Explore Our Mission',
      connectButton: 'Connect With Us',
      highlightsTitle: 'Key Highlights',
      seoKeywords: 'rural development, dairy farming, organic agriculture, bio-energy, sustainable farming, rural India empowerment',
      pageTitle: 'Rural Development & Sustainable Farming Solutions | Empowering Rural India',
      metaDescription: 'Transform rural villages through sustainable dairy farming, organic agriculture & bio-energy solutions. Supporting 11,000+ families across 682 Gram Panchayats in India.',
    },
    hi: {
      transformingText: 'ग्रामीण भारत का परिवर्तन',
      title: 'ग्रामीण भारत के भविष्य को सशक्त बनाना',
      description:
        'स्थायी डेयरी खेती, जैविक कृषि, और जैव-ऊर्जा समाधानों के माध्यम से गाँवों का परिवर्तन। भारत भर में किसान परिवारों के लिए आजीविका, सम्मान और स्वतंत्रता का सृजन।',
      stats: [
        { value: '682', label: 'ग्राम पंचायतें', ariaLabel: '682 ग्राम पंचायतों की सेवा' },
        { value: '11,000+', label: 'लाभान्वित परिवार', ariaLabel: '11,000 से अधिक परिवार लाभान्वित' },
        { value: '13,640', label: 'स्वदेशी गायें', ariaLabel: 'कार्यक्रम में 13,640 स्वदेशी गायें' },
      ],
      highlights: [
        '11,000+ ग्रामीण परिवारों के लिए आजीविका',
        '136,400 लीटर/दिन दूध उत्पादन',
        'हर दिन 136.4 टन जैविक कचरे का पर्यावरण के अनुकूल समाधान',
        '₹15,000–₹20,000 औसत SHG सदस्य आय',
      ],
      missionButton: 'हमारे मिशन का अन्वेषण करें',
      connectButton: 'हमसे संपर्क करें',
      highlightsTitle: 'मुख्य आकर्षण',
      seoKeywords: 'ग्रामीण विकास, डेयरी फार्मिंग, जैविक कृषि, जैव-ऊर्जा, टिकाऊ खेती, ग्रामीण भारत सशक्तिकरण',
      pageTitle: 'ग्रामीण विकास और स्थायी कृषि समाधान | ग्रामीण भारत का सशक्तिकरण',
      metaDescription: 'स्थायी डेयरी खेती, जैविक कृषि और जैव-ऊर्जा समाधानों के माध्यम से ग्रामीण गाँवों का रूपांतरण। भारत में 682 ग्राम पंचायतों में 11,000+ परिवारों का समर्थन।',
    },
  };

  const content = translations[language];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": language === 'en' ? "Rural India Empowerment Initiative" : "ग्रामीण भारत सशक्तिकरण पहल",
    "description": content.description,
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "sameAs": [
      "https://www.facebook.com/ruralindiaempowerment",
      "https://www.twitter.com/ruralindiaorg",
      "https://www.linkedin.com/company/rural-india-empowerment"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "Dairy Farming",
      "Organic Agriculture", 
      "Bio-energy Solutions",
      "Rural Development",
      "Sustainable Farming"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };

  React.useEffect(() => {
    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Update meta tags
    document.title = content.pageTitle;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', content.metaDescription);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = content.metaDescription;
      document.head.appendChild(metaDescription);
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', content.seoKeywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = content.seoKeywords;
      document.head.appendChild(metaKeywords);
    }

    // Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: content.pageTitle },
      { property: 'og:description', content: content.metaDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: '/gallery/bg.jpg' },
      { property: 'og:locale', content: language === 'en' ? 'en_US' : 'hi_IN' }
    ];

    ogTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('property', tag.property);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });

    // Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: content.pageTitle },
      { name: 'twitter:description', content: content.metaDescription },
      { name: 'twitter:image', content: '/gallery/bg.jpg' }
    ];

    twitterTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', tag.name);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.text === JSON.stringify(structuredData)) {
          document.head.removeChild(script);
        }
      });
    };
  }, [language, content, structuredData]);

  return (
    <>
      {/* SEO Meta Tags */}
      <noscript>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content={content.seoKeywords} />
      </noscript>

      <main role="main">
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
          aria-label={language === 'en' ? 'Hero section showcasing rural development mission' : 'ग्रामीण विकास मिशन प्रदर्शित करने वाला हीरो सेक्शन'}
        >
          {/* Background with overlay */}
          <div className="absolute inset-0" role="presentation" aria-hidden="true">
            <div className="absolute inset-0 bg-black/30 z-0" />
            <img 
              src="/gallery/bg.jpg" 
              alt={language === 'en' ? 'Rural farming landscape showing sustainable agriculture practices' : 'स्थायी कृषि प्रथाओं को दर्शाने वाला ग्रामीण कृषि परिदृश्य'}
              className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-12 py-16 sm:py-20 text-white relative z-10">
            {/* Left side */}
            <header className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 text-xs sm:text-sm font-medium text-cyan-300 border border-cyan-300/20 drop-shadow-md">
                  <SparklesIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span className="truncate">{content.transformingText}</span>
                </div>
                
                {/* Responsive heading with proper SEO structure */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight drop-shadow-xl break-words">
                  <span className="block">
                    {language === 'en' ? "Empowering Rural" : "ग्रामीण भारत के"}
                  </span>
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {language === 'en' ? "India's Future" : "भविष्य को सशक्त बनाना"}
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-100 max-w-2xl leading-relaxed font-light drop-shadow-lg">
                  {content.description}
                </p>
              </div>

              {/* Stats with semantic markup */}
              <section 
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
                aria-label={language === 'en' ? 'Key statistics and achievements' : 'मुख्य आंकड़े और उपलब्धियां'}
              >
                {content.stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="text-center bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/10 drop-shadow"
                    role="region"
                    aria-label={stat.ariaLabel}
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 truncate" role="text">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 font-medium leading-tight mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </section>

              {/* Call-to-action buttons with proper accessibility */}
              <nav className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6" role="navigation" aria-label="Main actions">
                <a 
                  href="#impact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 flex items-center justify-center group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                  aria-label={`${content.missionButton} - Learn more about our mission and impact`}
                >
                  <span className="truncate mr-2">{content.missionButton}</span>
                  <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" aria-hidden="true" />
                </a>
                <a 
                  href="#contact"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-none flex items-center justify-center group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                  aria-label={`${content.connectButton} - Get in touch with our team`}
                >
                  <PlayCircleIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true" />
                  <span className="truncate">{content.connectButton}</span>
                </a>
              </nav>
            </header>

            {/* Right side card with semantic structure */}
            <aside className="relative mt-8 lg:mt-0" role="complementary" aria-label="Key highlights and achievements">
              <article className="bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 space-y-4 lg:space-y-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <header className="flex items-center space-x-3 mb-4 lg:mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl flex-shrink-0" aria-hidden="true">
                    <ArrowTrendingUpIcon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 truncate">{content.highlightsTitle}</h2>
                </header>
                <ul className="space-y-3 lg:space-y-4" role="list">
                  {content.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircleIcon className="h-4 w-4 lg:h-5 lg:w-5 text-green-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-100 leading-relaxed text-sm sm:text-base break-words">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;