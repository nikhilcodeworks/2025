// import React, { useState } from "react";
// import {
//   BeakerIcon,
//   CurrencyRupeeIcon,
//   UserGroupIcon,
//   ChevronRightIcon,
//   SparklesIcon,
//   ClockIcon,
//   TruckIcon,
//   GlobeAltIcon,
//   BoltIcon,
//   BuildingStorefrontIcon,
//   ArrowTrendingUpIcon,
// } from "@heroicons/react/24/outline";

// const Projects = () => {
//   const [active, setActive] = useState("bggy");

//   const projects = {
//     bggy: {
//       title: "BGGY - Dairy Hubs",
//       subtitle: "SHG-Based Dairy & Organic Model",
//       description:
//         "Village-level dairy hubs powered by youth and SHGs for organized milk collection, cow waste utilization, and dignified income generation through sustainable practices.",
//       stats: {
//         budget: "₹93.85 Cr",
//         duration: "3 Years",
//         beneficiaries: "11000+ Families",
//       },
//       features: [
//         "13640 Indigenous Breed producing milk Augmentation of  136,400 Ltr/day",
//         "136.4 tons of compost annually",
//         "₹15000-20000 avg. income per SHG member",
//         "Veterinary + training support",
//       ],
//       icon: TruckIcon,
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
//       accentColor: "text-blue-600",
//     },
//     organic: {
//       title: "Organic Farming",
//       subtitle: "Cow-Based Organic Agriculture",
//       description:
//         "Certified farms using cow dung & urine to grow chemical-free food, training local farmers in sustainable agricultural practices.",
//       stats: {
//         budget: "₹75 Lakh",
//         duration: "18 Months",
//         beneficiaries: "500+ Farmers",
//       },
//       features: [
//         "Cow-based soil management systems",
//         "Demo plots and direct market linkage",
//         "High-value crop cultivation",
//         "Organic certification support",
//       ],
//       icon: GlobeAltIcon,
//       color: "from-green-500 to-emerald-500",
//       bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
//       accentColor: "text-green-600",
//     },
//     energy: {
//       title: "Bio-Energy",
//       subtitle: "Cow Dung to Energy",
//       description:
//         "Biogas and clean fuel from cow dung and biomass for sustainable rural electrification and energy independence.",
//       stats: {
//         budget: "₹50 Lakh",
//         duration: "15 Months",
//         beneficiaries: "200+ Households",
//       },
//       features: [
//         "Biogas & compost plants installation",
//         "Cow dung to electricity conversion",
//         "Zero-waste circular systems",
//         "Community energy training",
//       ],
//       icon: BoltIcon,
//       color: "from-yellow-500 to-orange-500",
//       bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
//       accentColor: "text-yellow-600",
//     },
//     employment: {
//       title: "Women-Led Enterprises",
//       subtitle: "Aloe Vera, Dairy, Garlic Processing",
//       description:
//         "Village-based women-owned processing units generating rural jobs and value-added products through skill development.",
//       stats: {
//         budget: "₹40 Lakh",
//         duration: "12 Months",
//         beneficiaries: "150+ Women",
//       },
//       features: [
//         "Micro-enterprises in aloe vera, dairy",
//         "Women-led SHGs empowerment",
//         "Comprehensive skill development",
//         "Market linkage support",
//       ],
//       icon: BuildingStorefrontIcon,
//       color: "from-purple-500 to-pink-500",
//       bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
//       accentColor: "text-purple-600",
//     },
//   };

//   const tabs = Object.keys(projects);

//   return (
//     <section id="projects" className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="flex justify-center mb-6">
//             <div className="relative">
//               <SparklesIcon className="h-12 w-12 text-blue-600 animate-pulse" />
//               <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping"></div>
//             </div>
//           </div>
//           <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4">
//             Our Projects
//           </h2>
//           <p className="text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
//             Comprehensive rural development initiatives led by community participation and sustainable innovation
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {tabs.map((tab) => {
//             const project = projects[tab];
//             const IconComponent = project.icon;
//             return (
//               <button
//                 key={tab}
//                 onClick={() => setActive(tab)}
//                 className={`group relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
//                   active === tab
//                     ? `bg-gradient-to-r ${project.color} text-white shadow-lg shadow-blue-500/25`
//                     : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm"
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   <IconComponent className="h-4 w-4" />
//                   <span>{project.title}</span>
//                 </div>
//                 {active === tab && (
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl"></div>
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         {/* Project Card */}
//         <div className={`${projects[active].bgColor} border border-gray-200 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden`}>
//           {/* Card Background Pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-transparent"></div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 relative z-10">
//             {/* Left Section */}
//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${projects[active].color} p-4 shadow-lg`}>
//                   {React.createElement(projects[active].icon, {
//                     className: "h-8 w-8 text-white",
//                   })}
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-1">
//                     {projects[active].title}
//                   </h3>
//                   <p className={`${projects[active].accentColor} font-semibold text-lg`}>
//                     {projects[active].subtitle}
//                   </p>
//                 </div>
//               </div>

//               <p className="text-gray-600 text-lg leading-relaxed">
//                 {projects[active].description}
//               </p>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-6 pt-6">
//                 <div className="text-center group">
//                   <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
//                     <CurrencyRupeeIcon className="h-6 w-6 text-white" />
//                   </div>
//                   <p className="text-lg font-bold text-gray-900">
//                     {projects[active].stats.budget}
//                   </p>
//                   <p className="text-sm text-gray-500 font-medium">Budget</p>
//                 </div>
//                 <div className="text-center group">
//                   <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
//                     <ClockIcon className="h-6 w-6 text-white" />
//                   </div>
//                   <p className="text-lg font-bold text-gray-900">
//                     {projects[active].stats.duration}
//                   </p>
//                   <p className="text-sm text-gray-500 font-medium">Duration</p>
//                 </div>
//                 <div className="text-center group">
//                   <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
//                     <UserGroupIcon className="h-6 w-6 text-white" />
//                   </div>
//                   <p className="text-lg font-bold text-gray-900">
//                     {projects[active].stats.beneficiaries}
//                   </p>
//                   <p className="text-sm text-gray-500 font-medium">Impact</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Section */}
//             <div className="space-y-6">
//               <div className="flex items-center gap-3">
//                 <ArrowTrendingUpIcon className={`h-6 w-6 ${projects[active].accentColor}`} />
//                 <h4 className="text-2xl font-bold text-gray-900">Key Features</h4>
//               </div>
              
//               <div className="space-y-4">
//                 {projects[active].features.map((feature, i) => (
//                   <div
//                     key={i}
//                     className="group flex items-start gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md"
//                   >
//                     <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${projects[active].color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
//                       <ChevronRightIcon className="h-4 w-4 text-white" />
//                     </div>
//                     <p className="text-gray-700 font-medium text-base leading-relaxed">
//                       {feature}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* Action Button */}
//               <div className="pt-6">
//                 <button className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r ${projects[active].color} text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2`}>
//                   <span>Learn More</span>
//                   <ChevronRightIcon className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
// Projects.jsx
import React, { useState } from "react";
import {
  BeakerIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  ChevronRightIcon,
  SparklesIcon,
  ClockIcon,
  TruckIcon,
  GlobeAltIcon,
  BoltIcon,
  BuildingStorefrontIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { TreePine } from 'lucide-react';
import { GiCow } from "react-icons/gi";

const Projects = ({ language }) => {
  const [active, setActive] = useState("bggy");

  // Language-specific content
  const translations = {
    en: {
      headerTitle: "Our Projects",
      headerDescription:
        "Comprehensive rural development initiatives led by community participation and sustainable innovation",
      projects: {
        bggy: {
          title: "BGGY - Dairy Hubs",
          subtitle: "SHG-Based Dairy & Organic Model",
          description:
            "Village-level dairy hubs powered by youth and SHGs for organized milk collection, cow waste utilization, and dignified income generation through sustainable practices.",
          stats: {
            budget: "₹93.85 Cr",
            duration: "3 Years",
            beneficiaries: "11000+ Families",
            labels: {
              budget: "Budget",
              duration: "Duration",
              impact: "Impact",
            },
          },
          features: [
            "13640 Indigenous Breed producing milk Augmentation of  136,400 Ltr/day",
            "136.4 tons/day organic waste management",
            "₹15000-20000 avg. income per SHG member",
            "Veterinary + training support",
          ],
          icon: GiCow,
          color: "from-blue-500 to-cyan-500",
          bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
          accentColor: "text-blue-600",
        },
        organic: {
          title: "Organic Farming",
          subtitle: "Cow-Based Organic Agriculture",
          description:
            "Certified farms using cow dung & urine to grow chemical-free food, training local farmers in sustainable agricultural practices.",
          stats: {
            budget: "₹75 Lakh",
            duration: "18 Months",
            beneficiaries: "500+ Farmers",
            labels: {
              budget: "Budget",
              duration: "Duration",
              impact: "Impact",
            },
          },
          features: [
            "Cow-based soil management systems",
            "Demo plots and direct market linkage",
            "High-value crop cultivation",
            "Organic certification support",
          ],
          icon: TreePine,
          color: "from-green-500 to-emerald-500",
          bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
          accentColor: "text-green-600",
        },
        energy: {
          title: "Bio-Energy",
          subtitle: "Cow Dung to Energy",
          description:
            "Biogas and clean fuel from cow dung and biomass for sustainable rural electrification and energy independence.",
          stats: {
            budget: "₹10 cr",
            duration: "15 Months",
            beneficiaries: "2000+ Households",
            labels: {
              budget: "Budget",
              duration: "Duration",
              impact: "Impact",
            },
          },
          features: [
            "Biogas & compost plants installation",
            "Cow dung to electricity conversion",
            "Zero-waste circular systems",
            "Community energy training",
          ],
          icon: BoltIcon,
          color: "from-yellow-500 to-orange-500",
          bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
          accentColor: "text-yellow-600",
        },
        employment: {
          title: "Women-Led Enterprises",
          subtitle: "Aloe Vera, Dairy, Garlic Processing",
          description:
            "Village-based women-owned processing units generating rural jobs and value-added products through skill development.",
          stats: {
            budget: "₹40 Lakh",
            duration: "12 Months",
            beneficiaries: "150+ Women",
            labels: {
              budget: "Budget",
              duration: "Duration",
              impact: "Impact",
            },
          },
          features: [
            "Micro-enterprises in aloe vera, dairy",
            "Women-led SHGs empowerment",
            "Comprehensive skill development",
            "Market linkage support",
          ],
          icon: BuildingStorefrontIcon,
          color: "from-purple-500 to-pink-500",
          bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
          accentColor: "text-purple-600",
        },
      },
      learnMore: "Learn More",
      keyFeatures: "Key Features",
    },
    hi: {
      headerTitle: "हमारे प्रोजेक्ट्स",
      headerDescription:
        "सामुदायिक भागीदारी और स्थायी नवाचार द्वारा संचालित व्यापक ग्रामीण विकास पहल",
      projects: {
        bggy: {
          title: "बीजीजीवाई - डेयरी हब",
          subtitle: "एसएचजी-आधारित डेयरी और जैविक मॉडल",
          description:
            "युवाओं और स्वयं सहायता समूहों द्वारा संचालित ग्राम-स्तरीय डेयरी हब, संगठित दूध संग्रह, गोबर उपयोग, और स्थायी प्रथाओं के माध्यम से सम्मानजनक आय सृजन के लिए।",
          stats: {
            budget: "₹93.85 करोड़",
            duration: "3 वर्ष",
            beneficiaries: "11000+ परिवार",
            labels: {
              budget: "बजट",
              duration: "अवधि",
              impact: "प्रभाव",
            },
          },
          features: [
            "13640 देसी नस्ल की गायें, प्रतिदिन 136,400 लीटर दूध उत्पादन",
            "हर दिन 136.4 टन जैविक कचरे का पर्यावरण के अनुकूल समाधान",
            "प्रति एसएचजी सदस्य ₹15000-20000 औसत आय",
            "पशु चिकित्सा + प्रशिक्षण समर्थन",
          ],
          icon: GiCow,
          color: "from-blue-500 to-cyan-500",
          bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
          accentColor: "text-blue-600",
        },
        organic: {
          title: "जैविक खेती",
          subtitle: "गाय-आधारित जैविक कृषि",
          description:
            "गाय के गोबर और मूत्र का उपयोग करके प्रमाणित फार्मों पर रसायन-मुक्त भोजन उगाना, स्थानीय किसानों को स्थायी कृषि प्रथाओं में प्रशिक्षण देना।",
          stats: {
            budget: "₹75 लाख",
            duration: "18 महीने",
            beneficiaries: "500+ किसान",
            labels: {
              budget: "बजट",
              duration: "अवधि",
              impact: "प्रभाव",
            },
          },
          features: [
            "गाय-आधारित मृदा प्रबंधन प्रणालियाँ",
            "प्रदर्शन भूखंड और प्रत्यक्ष बाजार लिंकेज",
            "उच्च-मूल्य वाली फसल खेती",
            "जैविक प्रमाणन समर्थन",
          ],
          icon: TreePine,
          color: "from-green-500 to-emerald-500",
          bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
          accentColor: "text-green-600",
        },
        energy: {
          title: "जैव-ऊर्जा",
          subtitle: "गोबर से ऊर्जा",
          description:
            "गाय के गोबर और बायोमास से बायोगैस और स्वच्छ ईंधन, ग्रामीण विद्युतीकरण और ऊर्जा स्वतंत्रता के लिए।",
          stats: {
            budget: "₹10 करोड़",
            duration: "15 महीने",
            beneficiaries: "2000+ परिवार",
            labels: {
              budget: "बजट",
              duration: "अवधि",
              impact: "प्रभाव",
            },
          },
          features: [
            "बायोगैस और खाद संयंत्र स्थापना",
            "गोबर से बिजली में रूपांतरण",
            "शून्य-अपशिष्ट चक्रीय प्रणालियाँ",
            "सामुदायिक ऊर्जा प्रशिक्षण",
          ],
          icon: BoltIcon,
          color: "from-yellow-500 to-orange-500",
          bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
          accentColor: "text-yellow-600",
        },
        employment: {
          title: "महिला-नेतृत्व वाली उद्यम",
          subtitle: "एलोवेरा, डेयरी, लहसुन प्रसंस्करण",
          description:
            "कौशल विकास के माध्यम से ग्रामीण रोजगार और मूल्यवर्धित उत्पादों को उत्पन्न करने वाली गाँव-आधारित महिला-स्वामित्व वाली प्रसंस्करण इकाइयाँ।",
          stats: {
            budget: "₹40 लाख",
            duration: "12 महीने",
            beneficiaries: "150+ महिलाएँ",
            labels: {
              budget: "बजट",
              duration: "अवधि",
              impact: "प्रभाव",
            },
          },
          features: [
            "एलोवेरा, डेयरी में सूक्ष्म-उद्यम",
            "महिला-नेतृत्व वाली स्वयं सहायता समूह सशक्तिकरण",
            "व्यापक कौशल विकास",
            "बाजार लिंकेज समर्थन",
          ],
          icon: BuildingStorefrontIcon,
          color: "from-purple-500 to-pink-500",
          bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
          accentColor: "text-purple-600",
        },
      },
      learnMore: "और जानें",
      keyFeatures: "मुख्य विशेषताएँ",
    },
  };

  const content = translations[language];
  const tabs = Object.keys(content.projects);

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <SparklesIcon className="h-12 w-12 text-blue-600 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping"></div>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4">
            {content.headerTitle}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            {content.headerDescription}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const project = content.projects[tab];
            const IconComponent = project.icon;
            return (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`group relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  active === tab
                    ? `bg-gradient-to-r ${project.color} text-white shadow-lg shadow-blue-500/25`
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-2">
                  <IconComponent className="h-4 w-4" />
                  <span>{project.title}</span>
                </div>
                {active === tab && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Project Card */}
        <div className={`${content.projects[active].bgColor} border border-gray-200 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden`}>
          {/* Card Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            {/* Left Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${content.projects[active].color} p-4 shadow-lg`}>
                  {React.createElement(content.projects[active].icon, {
                    className: "h-8 w-8 text-white",
                  })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">
                    {content.projects[active].title}
                  </h3>
                  <p className={`${content.projects[active].accentColor} font-semibold text-lg`}>
                    {content.projects[active].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {content.projects[active].description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                    <CurrencyRupeeIcon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    {content.projects[active].stats.budget}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    {content.projects[active].stats.labels.budget}
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                    <ClockIcon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    {content.projects[active].stats.duration}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    {content.projects[active].stats.labels.duration}
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                    <UserGroupIcon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    {content.projects[active].stats.beneficiaries}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    {content.projects[active].stats.labels.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <ArrowTrendingUpIcon className={`h-6 w-6 ${content.projects[active].accentColor}`} />
                <h4 className="text-2xl font-bold text-gray-900">{content.keyFeatures}</h4>
              </div>

              <div className="space-y-4">
                {content.projects[active].features.map((feature, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${content.projects[active].color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <ChevronRightIcon className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium text-base leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r ${content.projects[active].color} text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2`}
                >
                  <span>{content.learnMore}</span>
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;