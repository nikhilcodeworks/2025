// import React, { useState } from 'react';
// import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon, SparklesIcon, HeartIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     organization: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const handleSubmit = async () => {
//     setIsSubmitting(true);
    
//     // Simulate submission
//     setTimeout(() => {
//       console.log('Form submitted:', formData);
//       setFormData({ name: '', email: '', organization: '', message: '' });
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <EnvelopeIcon className="h-7 w-7" />,
//       title: "Email",
//       value: "bhavisyadindia@gmail.com",
//       description: "Send us your queries and partnership proposals",
//       color: "from-purple-500 to-pink-500",
//       bgColor: "bg-purple-50"
//     },
//     {
//       icon: <PhoneIcon className="h-7 w-7" />,
//       title: "Phone",
//       value: "+91 8090547100",
//       description: "Direct contact with our founder",
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "bg-blue-50"
//     },
//     {
//       icon: <MapPinIcon className="h-7 w-7" />,
//       title: "Location",
//       value: "Amethi District",
//       description: "Uttar Pradesh, India",
//       color: "from-green-500 to-emerald-500",
//       bgColor: "bg-green-50"
//     }
//   ];

//   const FloatingElement = ({ delay, children }) => (
//     <div 
//       className="absolute animate-pulse"
//       style={{
//         animationDelay: `${delay}s`,
//         animationDuration: '3s'
//       }}
//     >
//       {children}
//     </div>
//   );

//   return (
//     <section id="contact" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <FloatingElement delay={0}>
//           <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
//         </FloatingElement>
//         <FloatingElement delay={1}>
//           <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
//         </FloatingElement>
//         <FloatingElement delay={2}>
//           <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
//         </FloatingElement>
//       </div>

//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
//         <div className="absolute inset-0" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30h30v30H30V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//         }}></div>
//       </div>

//       <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header Section */}
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 backdrop-blur-sm border border-white/10">
//               <SparklesIcon className="h-6 w-6 text-purple-300 mr-2" />
//               <span className="text-purple-300 font-medium">Let's Connect</span>
//             </div>
            
//             <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight">
//               Transform India
//               <span className="block text-4xl lg:text-5xl mt-2">Together</span>
//             </h2>
            
//             <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//               Ready to be part of something bigger? Let's discuss how we can collaborate to create 
//               lasting change in rural India through innovation and partnership.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16 items-start">
//             {/* Contact Information */}
//             <div className="space-y-8">
//               {/* Intro Card */}
//               <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
//                 <div className="flex items-center mb-6">
//                   <RocketLaunchIcon className="h-8 w-8 text-purple-400 mr-3" />
//                   <h3 className="text-3xl font-bold text-white">Let's Build the Future</h3>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed text-lg">
//                   We're not just another NGO. We're a movement of changemakers, innovators, and 
//                   dreamers working to transform rural India. Join us in creating sustainable solutions 
//                   that empower communities and drive real impact.
//                 </p>
//               </div>

//               {/* Contact Cards */}
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <div 
//                     key={index} 
//                     className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 ${
//                       hoveredCard === index ? 'z-10' : ''
//                     }`}
//                     onMouseEnter={() => setHoveredCard(index)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                    
//                     <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500">
//                       <div className="flex items-start space-x-4">
//                         <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
//                           {info.icon}
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-bold text-white mb-2 text-lg group-hover:text-purple-200 transition-colors">{info.title}</h4>
//                           <p className="text-xl text-purple-300 font-semibold mb-2 group-hover:text-purple-200 transition-colors">{info.value}</p>
//                           <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{info.description}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Founder Message */}
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                
//                 <div className="relative bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500">
//                   <div className="flex items-center mb-6">
//                     <HeartIcon className="h-8 w-8 text-orange-400 mr-3" />
//                     <h4 className="text-2xl font-bold text-white">Message from Our Founder</h4>
//                   </div>
//                   <blockquote className="text-gray-200 italic mb-6 text-lg leading-relaxed">
//                     "We don't seek charity. We seek collaboration in nation-building. Your support can help 
//                     create real jobs, cleaner environments, and empowered communities that no longer wait for outside help."
//                   </blockquote>
//                   <p className="text-orange-300 font-medium">- Priyanshu Shukla, Founder & CEO</p>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              
//               <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 hover:border-white/30 transition-all duration-500">
//                 <h3 className="text-3xl font-bold text-white mb-8 text-center">Send us a Message</h3>
                
//                 <div className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                       Your Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
//                       placeholder="Enter your full name"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                       Your Phone Number
//                     </label>
//                     <input
//                       type="text"
//                       id="phone"
//                       name="phone"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
//                       placeholder="Your phone number"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
//                       placeholder="Enter your email address"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
//                       Organization
//                     </label>
//                     <input
//                       type="text"
//                       id="organization"
//                       name="organization"
//                       value={formData.organization}
//                       onChange={handleChange}
//                       className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
//                       placeholder="Your company or organization"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10 resize-none"
//                       placeholder="Tell us about your interest in partnering with us..."
//                     />
//                   </div>

//                   <button
//                     onClick={handleSubmit}
//                     disabled={isSubmitting}
//                     className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="relative flex items-center">
//                       {isSubmitting ? (
//                         <>
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <PaperAirplaneIcon className="h-5 w-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
//                           Send Message
//                         </>
//                       )}
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;






// Contact.jsx


// import React, { useState } from 'react';
// import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon, SparklesIcon, HeartIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

// const Contact = ({ language }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     organization: '',
//     message: '',
//     phone: '', // Added phone to formData
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const handleSubmit = async () => {
//     setIsSubmitting(true);
    
//     // Simulate submission
//     setTimeout(() => {
//       console.log('Form submitted:', formData);
//       setFormData({ name: '', email: '', organization: '', message: '', phone: '' });
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Language-specific content
//   const translations = {
//     en: {
//       headerTitle: 'Transform India Together',
//       headerSubtitle: "Let's Connect",
//       headerDescription:
//         'Ready to be part of something bigger? Let’s discuss how we can collaborate to create lasting change in rural India through innovation and partnership.',
//       introTitle: "Let's Build the Future",
//       introDescription:
//         "We're not just another NGO. We're a movement of changemakers, innovators, and dreamers working to transform rural India. Join us in creating sustainable solutions that empower communities and drive real impact.",
//       contactInfo: [
//         {
//           icon: <EnvelopeIcon className="h-7 w-7" />,
//           title: 'Email',
//           value: 'bhavisyadindia@gmail.com',
//           description: 'Send us your queries and partnership proposals',
//           color: 'from-purple-500 to-pink-500',
//           bgColor: 'bg-purple-50',
//         },
//         {
//           icon: <PhoneIcon className="h-7 w-7" />,
//           title: 'Phone',
//           value: '+91 8090547100',
//           description: 'Direct contact with our founder',
//           color: 'from-blue-500 to-cyan-500',
//           bgColor: 'bg-blue-50',
//         },
//         {
//           icon: <MapPinIcon className="h-7 w-7" />,
//           title: 'Location',
//           value: 'Amethi District',
//           description: 'Uttar Pradesh, India',
//           color: 'from-green-500 to-emerald-500',
//           bgColor: 'bg-green-50',
//         },
//       ],
//       founderMessageTitle: 'Message from Our Founder',
//       founderMessage:
//         '"We don’t seek charity. We seek collaboration in nation-building. Your support can help create real jobs, cleaner environments, and empowered communities that no longer wait for outside help."',
//       founderSignature: '- Priyanshu Shukla, Founder & CEO',
//       formTitle: 'Send us a Message',
//       formLabels: {
//         name: 'Your Name *',
//         phone: 'Your Phone Number',
//         email: 'Email Address *',
//         organization: 'Organization',
//         message: 'Message *',
//       },
//       formPlaceholders: {
//         name: 'Enter your full name',
//         phone: 'Your phone number',
//         email: 'Enter your email address',
//         organization: 'Your company or organization',
//         message: 'Tell us about your interest in partnering with us...',
//       },
//       submitButton: 'Send Message',
//       submittingText: 'Sending...',
//     },
//     hi: {
//       headerTitle: 'भारत को एक साथ बदलें',
//       headerSubtitle: 'आइए जुड़ें',
//       headerDescription:
//         'क्या आप किसी बड़े बदलाव का हिस्सा बनने के लिए तैयार हैं? आइए चर्चा करें कि हम नवाचार और साझेदारी के माध्यम से ग्रामीण भारत में स्थायी परिवर्तन कैसे ला सकते हैं।',
//       introTitle: 'आइए भविष्य का निर्माण करें',
//       introDescription:
//         'हम सिर्फ एक और एनजीओ नहीं हैं। हम परिवर्तनकारी, नवप्रवर्तक और सपने देखने वालों का एक आंदोलन हैं, जो ग्रामीण भारत को बदलने के लिए काम कर रहे हैं। हमारे साथ जुड़ें और समुदायों को सशक्त बनाने वाली स्थायी समाधान बनाएं जो वास्तविक प्रभाव डालें।',
//       contactInfo: [
//         {
//           icon: <EnvelopeIcon className="h-7 w-7" />,
//           title: 'ईमेल',
//           value: 'bhavisyadindia@gmail.com',
//           description: 'हमें अपनी पूछताछ और साझेदारी प्रस्ताव भेजें',
//           color: 'from-purple-500 to-pink-500',
//           bgColor: 'bg-purple-50',
//         },
//         {
//           icon: <PhoneIcon className="h-7 w-7" />,
//           title: 'फोन',
//           value: '+91 8090547100',
//           description: 'हमारे संस्थापक के साथ सीधा संपर्क',
//           color: 'from-blue-500 to-cyan-500',
//           bgColor: 'bg-blue-50',
//         },
//         {
//           icon: <MapPinIcon className="h-7 w-7" />,
//           title: 'स्थान',
//           value: 'अमेठी जिला',
//           description: 'उत्तर प्रदेश, भारत',
//           color: 'from-green-500 to-emerald-500',
//           bgColor: 'bg-green-50',
//         },
//       ],
//       founderMessageTitle: 'हमारे संस्थापक का संदेश',
//       founderMessage:
//         '"हम दान की तलाश नहीं करते। हम राष्ट्र-निर्माण में सहयोग की तलाश करते हैं। आपका समर्थन वास्तविक नौकरियां, स्वच्छ पर्यावरण और सशक्त समुदाय बनाने में मदद कर सकता है जो अब बाहरी सहायता की प्रतीक्षा नहीं करते।"',
//       founderSignature: '- प्रियांशु शुक्ला, संस्थापक और सीईओ',
//       formTitle: 'हमें एक संदेश भेजें',
//       formLabels: {
//         name: 'आपका नाम *',
//         phone: 'आपका फोन नंबर',
//         email: 'ईमेल पता *',
//         organization: 'संगठन',
//         message: 'संदेश *',
//       },
//       formPlaceholders: {
//         name: 'अपना पूरा नाम दर्ज करें',
//         phone: 'आपका फोन नंबर',
//         email: 'अपना ईमेल पता दर्ज करें',
//         organization: 'आपकी कंपनी या संगठन',
//         message: 'हमें अपनी साझेदारी में रुचि के बारे में बताएं...',
//       },
//       submitButton: 'संदेश भेजें',
//       submittingText: 'भेजा जा रहा है...',
//     },
//   };

//   const content = translations[language];

//   const FloatingElement = ({ delay, children }) => (
//     <div 
//       className="absolute animate-pulse"
//       style={{
//         animationDelay: `${delay}s`,
//         animationDuration: '3s'
//       }}
//     >
//       {children}
//     </div>
//   );

//   return (
//     <section id="contact" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <FloatingElement delay={0}>
//           <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
//         </FloatingElement>
//         <FloatingElement delay={1}>
//           <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
//         </FloatingElement>
//         <FloatingElement delay={2}>
//           <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
//         </FloatingElement>
//       </div>

//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
//         <div className="absolute inset-0" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30h30v30H30V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//         }}></div>
//       </div>

//       <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header Section */}
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 backdrop-blur-sm border border-white/10">
//               <SparklesIcon className="h-6 w-6 text-purple-300 mr-2" />
//               <span className="text-purple-300 font-medium">{content.headerSubtitle}</span>
//             </div>
            
//             <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight">
//               {content.headerTitle.split('\n').map((line, index) => (
//                 <span key={index} className={index === 1 ? 'block text-4xl lg:text-5xl mt-2' : ''}>
//                   {line}
//                 </span>
//               ))}
//             </h2>
            
//             <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//               {content.headerDescription}
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16 items-start">
//             {/* Contact Information */}
//             <div className="space-y-8">
//               {/* Intro Card */}
//               <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
//                 <div className="flex items-center mb-6">
//                   <RocketLaunchIcon className="h-8 w-8 text-purple-400 mr-3" />
//                   <h3 className="text-3xl font-bold text-white">{content.introTitle}</h3>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed text-lg">
//                   {content.introDescription}
//                 </p>
//               </div>

//               {/* Contact Cards */}
//               <div className="space-y-6">
//                 {content.contactInfo.map((info, index) => (
//                   <div 
//                     key={index} 
//                     className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 ${
//                       hoveredCard === index ? 'z-10' : ''
//                     }`}
//                     onMouseEnter={() => setHoveredCard(index)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                    
//                     <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500">
//                       <div className="flex items-start space-x-4">
//                         <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
//                           {info.icon}
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-bold text-white mb-2 text-lg group-hover:text-purple-200 transition-colors">{info.title}</h4>
//                           <p className="text-xl text-purple-300 font-semibold mb-2 group-hover:text-purple-200 transition-colors">{info.value}</p>
//                           <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{info.description}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Founder Message */}
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                
//                 <div className="relative bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500">
//                   <div className="flex items-center mb-6">
//                     <HeartIcon className="h-8 w-8 text-orange-400 mr-3" />
//                     <h4 className="text-2xl font-bold text-white">{content.founderMessageTitle}</h4>
//                   </div>
//                   <blockquote className="text-gray-200 italic mb-6 text-lg leading-relaxed">
//                     {content.founderMessage}
//                   </blockquote>
//                   <p className="text-orange-300 font-medium">{content.founderSignature}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              
//               <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 hover:border-white/30 transition-all duration-500">
//                 <h3 className="text-3xl font-bold text-white mb-8 text-center">{content.formTitle}</h3>
                
//                 <div className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                       {content.formLabels.name}
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
//                       placeholder={content.formPlaceholders.name}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
//                       {content.formLabels.phone}
//                     </label>
//                     <input
//                       type="text"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
//                       placeholder={content.formPlaceholders.phone}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                       {content.formLabels.email}
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
//                       placeholder={content.formPlaceholders.email}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
//                       {content.formLabels.organization}
//                     </label>
//                     <input
//                       type="text"
//                       id="organization"
//                       name="organization"
//                       value={formData.organization}
//                       onChange={handleChange}
//                       className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
//                       placeholder={content.formPlaceholders.organization}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                       {content.formLabels.message}
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10 resize-none"
//                       placeholder={content.formPlaceholders.message}
//                     />
//                   </div>
//                   <button
//                     onClick={handleSubmit}
//                     disabled={isSubmitting}
//                     className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="relative flex items-center">
//                       {isSubmitting ? (
//                         <>
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
//                           {content.submittingText}
//                         </>
//                       ) : (
//                         <>
//                           <PaperAirplaneIcon className="h-5 w-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
//                           {content.submitButton}
//                         </>
//                       )}
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;








import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon, SparklesIcon, HeartIcon, RocketLaunchIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const Contact = ({ language = 'en' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [submitResult, setSubmitResult] = useState('');
  const [submitStatus, setSubmitStatus] = useState(''); 

  const handleSubmit = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    setIsSubmitting(true);
    setSubmitResult('');
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("organization", formData.organization);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("subject", `New Contact Form Submission from ${formData.name}`);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitResult("Message sent successfully! We'll get back to you soon.");
        setSubmitStatus('success');
        setFormData({ name: '', email: '', organization: '', message: '', phone: '' });
      } else {
        console.log("Error", data);
        setSubmitResult(data.message || "Something went wrong. Please try again.");
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitResult("Network error. Please check your connection and try again.");
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear the result message after 5 seconds
      setTimeout(() => {
        setSubmitResult('');
        setSubmitStatus('');
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 
  const translations = {
    en: {
      headerTitle: 'Transform India Together',
      headerSubtitle: "Let's Connect",
      headerDescription:
        'Ready to be part of something bigger? Let’s discuss how we can collaborate to create lasting change in rural India through innovation and partnership.',
      introTitle: "Let's Build the Future",
      introDescription:
        "We're not just another NGO. We're a movement of changemakers, innovators, and dreamers working to transform rural India. Join us in creating sustainable solutions that empower communities and drive real impact.",
      contactInfo: [
        {
          icon: <EnvelopeIcon className="h-7 w-7" />,
          title: 'Email',
          value: 'bhavisyadindia@gmail.com',
          description: 'Send us your queries and partnership proposals',
          color: 'from-purple-500 to-pink-500',
          bgColor: 'bg-purple-50',
        },
        {
          icon: <PhoneIcon className="h-7 w-7" />,
          title: 'Phone',
          value: '+91 8090547100',
          description: 'Direct contact with our founder',
          color: 'from-blue-500 to-cyan-500',
          bgColor: 'bg-blue-50',
        },
        {
          icon: <MapPinIcon className="h-7 w-7" />,
          title: 'Location',
          value: 'Amethi District',
          description: 'Uttar Pradesh, India',
          color: 'from-green-500 to-emerald-500',
          bgColor: 'bg-green-50',
        },
      ],
      founderMessageTitle: 'Message from Our Founder',
      founderMessage:
        '"We don’t seek charity. We seek collaboration in nation-building. Your support can help create real jobs, cleaner environments, and empowered communities that no longer wait for outside help."',
      founderSignature: '- Priyanshu Shukla, Founder & CEO',
      formTitle: 'Send us a Message',
      formLabels: {
        name: 'Your Name *',
        phone: 'Your Phone Number',
        email: 'Email Address *',
        organization: 'Organization',
        message: 'Message *',
      },
      formPlaceholders: {
        name: 'Enter your full name',
        phone: 'Your phone number',
        email: 'Enter your email address',
        organization: 'Your company or organization',
        message: 'Tell us about your interest in partnering with us...',
      },
      submitButton: 'Send Message',
      submittingText: 'Sending...',
    },
    hi: {
      headerTitle: 'भारत को एक साथ बदलें',
      headerSubtitle: 'आइए जुड़ें',
      headerDescription:
        'क्या आप किसी बड़े बदलाव का हिस्सा बनने के लिए तैयार हैं? आइए चर्चा करें कि हम नवाचार और साझेदारी के माध्यम से ग्रामीण भारत में स्थायी परिवर्तन कैसे ला सकते हैं।',
      introTitle: 'आइए भविष्य का निर्माण करें',
      introDescription:
        'हम सिर्फ एक और एनजीओ नहीं हैं। हम परिवर्तनकारी, नवप्रवर्तक और सपने देखने वालों का एक आंदोलन हैं, जो ग्रामीण भारत को बदलने के लिए काम कर रहे हैं। हमारे साथ जुड़ें और समुदायों को सशक्त बनाने वाली स्थायी समाधान बनाएं जो वास्तविक प्रभाव डालें।',
      contactInfo: [
        {
          icon: <EnvelopeIcon className="h-7 w-7" />,
          title: 'ईमेल',
          value: 'bhavisyadindia@gmail.com',
          description: 'हमें अपनी पूछताछ और साझेदारी प्रस्ताव भेजें',
          color: 'from-purple-500 to-pink-500',
          bgColor: 'bg-purple-50',
        },
        {
          icon: <PhoneIcon className="h-7 w-7" />,
          title: 'फोन',
          value: '+91 8090547100',
          description: 'हमारे संस्थापक के साथ सीधा संपर्क',
          color: 'from-blue-500 to-cyan-500',
          bgColor: 'bg-blue-50',
        },
        {
          icon: <MapPinIcon className="h-7 w-7" />,
          title: 'स्थान',
          value: 'अमेठी जिला',
          description: 'उत्तर प्रदेश, भारत',
          color: 'from-green-500 to-emerald-500',
          bgColor: 'bg-green-50',
        },
      ],
      founderMessageTitle: 'हमारे संस्थापक का संदेश',
      founderMessage:
        '"हम दान की तलाश नहीं करते। हम राष्ट्र-निर्माण में सहयोग की तलाश करते हैं। आपका समर्थन वास्तविक नौकरियां, स्वच्छ पर्यावरण और सशक्त समुदाय बनाने में मदद कर सकता है जो अब बाहरी सहायता की प्रतीक्षा नहीं करते।"',
      founderSignature: '- प्रियांशु शुक्ला, संस्थापक और सीईओ',
      formTitle: 'हमें एक संदेश भेजें',
      formLabels: {
        name: 'आपका नाम *',
        phone: 'आपका फोन नंबर',
        email: 'ईमेल पता *',
        organization: 'संगठन',
        message: 'संदेश *',
      },
      formPlaceholders: {
        name: 'अपना पूरा नाम दर्ज करें',
        phone: 'आपका फोन नंबर',
        email: 'अपना ईमेल पता दर्ज करें',
        organization: 'आपकी कंपनी या संगठन',
        message: 'हमें अपनी साझेदारी में रुचि के बारे में बताएं...',
      },
      submitButton: 'संदेश भेजें',
      submittingText: 'भेजा जा रहा है...',
    },
  };
  
 

  const content = translations[language];

  const FloatingElement = ({ delay, children }) => (
    <div 
      className="absolute animate-pulse"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      {children}
    </div>
  );

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </FloatingElement>
        <FloatingElement delay={1}>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
        </FloatingElement>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30h30v30H30V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 backdrop-blur-sm border border-white/10">
              <SparklesIcon className="h-6 w-6 text-purple-300 mr-2" />
              <span className="text-purple-300 font-medium">{content.headerSubtitle}</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight">
              {content.headerTitle.split('\n').map((line, index) => (
                <span key={index} className={index === 1 ? 'block text-4xl lg:text-5xl mt-2' : ''}>
                  {line}
                </span>
              ))}
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {content.headerDescription}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Intro Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <RocketLaunchIcon className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-3xl font-bold text-white">{content.introTitle}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {content.introDescription}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {content.contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 ${
                      hoveredCard === index ? 'z-10' : ''
                    }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                    
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500">
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-2 text-lg group-hover:text-purple-200 transition-colors">{info.title}</h4>
                          <p className="text-xl text-purple-300 font-semibold mb-2 group-hover:text-purple-200 transition-colors">{info.value}</p>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder Message */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <HeartIcon className="h-8 w-8 text-orange-400 mr-3" />
                    <h4 className="text-2xl font-bold text-white">{content.founderMessageTitle}</h4>
                  </div>
                  <blockquote className="text-gray-200 italic mb-6 text-lg leading-relaxed">
                    {content.founderMessage}
                  </blockquote>
                  <p className="text-orange-300 font-medium">{content.founderSignature}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 hover:border-white/30 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">{content.formTitle}</h3>
                
                {/* Success/Error Message */}
                {submitResult && (
                  <div className={`mb-6 p-4 rounded-xl border ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/10 border-green-500/30 text-green-300' 
                      : 'bg-red-500/10 border-red-500/30 text-red-300'
                  } backdrop-blur-sm flex items-center`}>
                    {submitStatus === 'success' ? (
                      <CheckCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                    ) : (
                      <ExclamationTriangleIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                    )}
                    <span>{submitResult}</span>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {content.formLabels.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
                      placeholder={content.formPlaceholders.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      {content.formLabels.phone}
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
                      placeholder={content.formPlaceholders.phone}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {content.formLabels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
                      placeholder={content.formPlaceholders.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                      {content.formLabels.organization}
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10"
                      placeholder={content.formPlaceholders.organization}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      {content.formLabels.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm hover:bg-white/10 resize-none"
                      placeholder={content.formPlaceholders.message}
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          {content.submittingText}
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="h-5 w-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                          {content.submitButton}
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;