

// import React, { useState, useEffect } from 'react';
// import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
// import { motion, AnimatePresence } from 'framer-motion';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Team', href: '#team' },
//     { name: 'Impact', href: '#impact' },
//     { name: 'CSR', href: '#csr' },
//     { name: 'Contact', href: '#contact' },
//   ];

// return (
//   <>
//     {/* Fixed Wrapper for Top Bar + Header */}
//     <div className="fixed w-full z-50">
//       {/* Top Bar */}
//       <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2 px-4 text-sm border-b border-slate-700">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center space-x-8">
//             <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
//               <PhoneIcon className="h-4 w-4" />
//               <span>+91 8090547100</span>
//             </div>
//             <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
//               <EnvelopeIcon className="h-4 w-4" />
//               <span>info.founder@bhavisyadindia.com</span>
//             </div>
//           </div>
//           <div className="hidden md:block text-slate-300">
//             <span>Amethi District, Uttar Pradesh, India</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header
//         className={`transition-all duration-500 ${
//           isScrolled
//             ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200'
//             : 'bg-white/90 backdrop-blur-md'
//         }`}
//       >
//         <nav className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center py-2">
//             {/* Logo Section */}
//             <div className="flex items-center space-x-3 group">
//               <div className="p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white">
//                 <img
//                   src="/image-removebg-preview.png"
//                   alt="Bhavisyad India Logo"
//                   className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain"
//                 />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
//                   Bhavisyad India
//                 </h1>
//                 <p className="text-xs text-slate-500 font-medium">Rural Development Company</p>
//               </div>
//             </div>

//             {/* Nav Items */}
//             <div className="hidden md:flex items-center space-x-1">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="text-slate-700 hover:text-blue-600 font-medium px-4 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//               <a
//                 href="#contact"
//                 className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ml-4"
//               >
//                 Partner with Us
//               </a>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button
//                 aria-label="Toggle menu"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-slate-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-all"
//               >
//                 {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Nav */}
//           <AnimatePresence>
//             {isMenuOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 py-4 rounded-b-2xl shadow-xl"
//               >
//                 <div className="flex flex-col space-y-2">
//                   {navItems.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="text-slate-700 hover:text-blue-600 font-medium px-4 py-3 rounded-xl hover:bg-blue-50 transition-all mx-2"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                   <div className="px-4 pt-2">
//                     <a
//                       href="#contact"
//                       className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 w-full block text-center"
//                     >
//                       Partner with Us
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </nav>
//       </header>
//     </div>

//     {/* Push Page Down So Content Not Hidden Behind Fixed Header */}
//     <div className="h-[132px] md:h-[144px]"></div>
//   </>
// );

// };

// export default Header;





// // Header.jsx
// import React, { useState, useEffect } from 'react';
// import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
// import { motion, AnimatePresence } from 'framer-motion';


// const Header = ({ language }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Language-specific content
//   const translations = {
//     en: {
//       companyName: 'Bhavisyad India',
//       tagline: 'Rural Development Company',
//       contactPhone: '+91 8090547100',
//       contactEmail: 'info.founder@bhavisyadindia.com',
//       location: 'Amethi District, Uttar Pradesh, India',
//       navItems: [
//         { name: 'Home', href: '#home' },
//         { name: 'About', href: '#about' },
//         { name: 'Projects', href: '#projects' },
//         { name: 'Team', href: '#team' },
//         { name: 'Impact', href: '#impact' },
//         { name: 'Gallery', href: '/gallery' },
//         { name: 'CSR', href: '#csr' },
//         { name: 'Contact', href: '#contact' },
//       ],
//       partnerButton: 'Partner with Us',
//     },
//     hi: {
//       companyName: 'भविष्यद इंडिया',
//       tagline: 'ग्रामीण विकास कंपनी',
//       contactPhone: '+91 8090547100',
//       contactEmail: 'info.founder@bhavisyadindia.com',
//       location: 'अमेठी जिला, उत्तर प्रदेश, भारत',
//       navItems: [
//         { name: 'होम', href: '#home' },
//         { name: 'हमारे बारे में', href: '#about' },
//         { name: 'प्रोजेक्ट्स', href: '#projects' },
//         { name: 'टीम', href: '#team' },
//         { name: 'प्रभाव', href: '#impact' },
//         { name: 'Gallery', href: '/gallery' },
//         { name: 'सीएसआर', href: '#csr' },
//         { name: 'संपर्क', href: '#contact' },
//       ],
//       partnerButton: 'हमारे साथ साझेदारी करें',
//     },
//   };

//   const content = translations[language];

//   return (
//     <>
//       <div className="fixed w-full z-50">
//         <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2 px-4 text-sm border-b border-slate-700">
//           <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//             <div className="flex items-center space-x-8">
//               <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
//                 <PhoneIcon className="h-4 w-4" />
//                 <span>{content.contactPhone}</span>
//               </div>
//               <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
//                 <EnvelopeIcon className="h-4 w-4" />
//                 <span>{content.contactEmail}</span>
//               </div>
//             </div>
//             <div className="hidden md:block text-slate-300">
//               <span>{content.location}</span>
//             </div>
//           </div>
//         </div>

//         <header
//           className={`transition-all duration-500 ${
//             isScrolled
//               ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200'
//               : 'bg-white/90 backdrop-blur-md'
//           }`}
//         >
//           <nav className="max-w-7xl mx-auto px-4">
//             <div className="flex justify-between items-center py-2">
//               <div className="flex items-center space-x-3 group">
//                 <div className="p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white">
//                   <img
//                     src="/image-removebg-preview.png"
//                     alt={`${content.companyName} Logo`}
//                     className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain"
//                   />
//                 </div>
//                 <div>
//                   <h1 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
//                     {content.companyName}
//                   </h1>
//                   <p className="text-xs text-slate-500 font-semibold">{content.tagline}</p>
//                 </div>
//               </div>

//               <div className="hidden md:flex items-center space-x-1">
//                 {content.navItems.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="text-slate-700 hover:text-blue-600 font-medium px-4 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200"
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//                 <a
//                   href="#contact"
//                   className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ml-4"
//                 >
//                   {content.partnerButton}
//                 </a>
//               </div>

//               <div className="md:hidden">
//                 <button
//                   aria-label="Toggle menu"
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   className="text-slate-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-all"
//                 >
//                   {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
//                 </button>
//               </div>
//             </div>

//             <AnimatePresence>
//               {isMenuOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 py-4 rounded-b-2xl shadow-xl"
//                 >
//                   <div className="flex flex-col space-y-2">
//                     {content.navItems.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className="text-slate-700 hover:text-blue-600 font-medium px-4 py-3 rounded-xl hover:bg-blue-50 transition-all mx-2"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                     <div className="px-4 pt-2">
//                       <a
//                         href="#contact"
//                         className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 w-full block text-center"
//                       >
//                         {content.partnerButton}
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </nav>
//         </header>
//       </div>

//       <div className="h-[132px] md:h-[144px]"></div>
//     </>
//   );
// };

// export default Header;



// Header.jsx
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isGalleryPage = location.pathname === '/gallery';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      companyName: 'Bhavisyad India',
      tagline: 'Rural Development Company',
      contactPhone: '+91 8090547100',
      contactEmail: 'info.founder@bhavisyadindia.com',
      location: 'Amethi District, Uttar Pradesh, India',
      navItems: [
        { name: 'Home', href: '#home', type: 'anchor' },
        { name: 'About', href: '#about', type: 'anchor' },
        { name: 'Projects', href: '#projects', type: 'anchor' },
        { name: 'Team', href: '#team', type: 'anchor' },
        { name: 'Impact', href: '#impact', type: 'anchor' },
        { name: 'Gallery', href: '/gallery', type: 'route' },
        { name: 'CSR', href: '#csr', type: 'anchor' },
        // { name: 'Contact', href: '#contact', type: 'anchor' },
      ],
      partnerButton: 'Partner with Us',
    },
    hi: {
      companyName: 'भविष्यद इंडिया',
      tagline: 'ग्रामीण विकास कंपनी',
      contactPhone: '+91 8090547100',
      contactEmail: 'info.founder@bhavisyadindia.com',
      location: 'अमेठी जिला, उत्तर प्रदेश, भारत',
      navItems: [
        { name: 'होम', href: '#home', type: 'anchor' },
        { name: 'हमारे बारे में', href: '#about', type: 'anchor' },
        { name: 'प्रोजेक्ट्स', href: '#projects', type: 'anchor' },
        { name: 'टीम', href: '#team', type: 'anchor' },
        { name: 'प्रभाव', href: '#impact', type: 'anchor' },
        { name: 'गैलरी', href: '/gallery', type: 'route' },
        { name: 'सीएसआर', href: '#csr', type: 'anchor' },
        // { name: 'संपर्क', href: '#contact', type: 'anchor' },
      ],
      partnerButton: 'हमारे साथ साझेदारी करें',
    },
  };

  const content = translations[language];

  const handleNavClick = (item) => {
    setIsMenuOpen(false);

    if (item.type === 'route') {
      navigate(item.href);
    } else {
      if (isGalleryPage) {
        navigate(`/${item.href}`);
      } else {
        const el = document.getElementById(item.href.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate(`/${item.href}`); // fallback
        }
      }
    }
  };

  const renderNavItem = (item) => (
    <button
      key={item.name}
      onClick={() => handleNavClick(item)}
      className="text-slate-700 hover:text-blue-600 font-medium px-4 py-3 rounded-xl hover:bg-blue-50 transition-all mx-2"
    >
      {item.name}
    </button>
  );

  return (
    <>
      <div className="fixed w-full z-50">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2 px-4 text-sm border-b border-slate-700">
  <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-2 sm:space-y-0">
      <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
        <PhoneIcon className="h-4 w-4" />
        <span>{content.contactPhone}</span>
      </div>
      <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
        <EnvelopeIcon className="h-4 w-4" />
        <span className="break-all">{content.contactEmail}</span>
      </div>
    </div>
    <div className="hidden md:block text-slate-300">
      <span>{content.location}</span>
    </div>
  </div>
</div>

        <header
          className={`transition-all duration-500 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200'
              : 'bg-white/90 backdrop-blur-md'
          }`}
        >
          <nav className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white">
                  <img
                    src="/image-removebg-preview.png"
                    alt={`${content.companyName} Logo`}
                    className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {content.companyName}
                  </h1>
                  <p className="text-xs text-slate-500 font-semibold">{content.tagline}</p>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                {content.navItems.map(renderNavItem)}
                <button
                  onClick={() => handleNavClick({ href: '#contact', type: 'anchor' })}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ml-4"
                >
                  {content.partnerButton}
                </button>
              </div>

              <div className="md:hidden">
                <button
                  aria-label="Toggle menu"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-slate-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-all"
                >
                  {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 py-4 rounded-b-2xl shadow-xl"
                >
                  <div className="flex flex-col space-y-2">
                    {content.navItems.map(renderNavItem)}
                    <div className="px-4 pt-2">
                      <button
                        onClick={() => handleNavClick({ href: '#contact', type: 'anchor' })}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 w-full block text-center"
                      >
                        {content.partnerButton}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </header>
      </div>

      <div className="h-[132px] md:h-[144px]"></div>
    </>
  );
};

export default Header;
