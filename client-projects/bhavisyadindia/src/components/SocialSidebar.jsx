
// import React from 'react';
// import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
// import { SiGmail, SiX } from 'react-icons/si';

// const SocialSidebar = () => {
//   const links = [
//     {
//       icon: <FaWhatsapp />,
//       url: 'https://wa.me/+919792277788',
//       color: 'bg-green-500',
//     },
//     // {
//     //   icon: <SiGmail />,
//     //   url: 'mailto:bhavisyadindia@gmail.com',
//     //   color: 'bg-red-500',
//     // },
//     {
//       icon: <FaInstagram />,
//       url: 'https://www.instagram.com/bhavisyadindia?utm_source=qr&igsh=ZGJxY3Z6dnNpemFx',
//       color: 'bg-pink-500',
//     },
//     {
//       icon: <SiX />,
//       url: 'https://x.com/bhavisyadindia',
//       color: 'bg-black',
//     },
//     {
//       icon: <FaFacebook />,
//       url: 'https://www.facebook.com/share/16ttEG2DNy/',
//       color: 'bg-blue-600',
//     },
//   ];

//   return (
//     <div className="fixed top-1/3 left-0 z-50 flex flex-col space-y-3">
//       {links.map((link, idx) => (
//         <a
//           key={idx}
//           href={link.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`flex items-center justify-center w-12 h-12 rounded-r-full ${link.color} text-white shadow-md hover:scale-110 transition-transform`}
//         >
//           <span className="text-xl">{link.icon}</span>
//         </a>
//       ))}
//     </div>
//   );
// };

// export default SocialSidebar;







// SocialSidebar.jsx
// import React from 'react';
// import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
// import { SiGmail, SiX } from 'react-icons/si';

// const SocialSidebar = ({ language, toggleLanguage }) => {
//   const links = [
//     {
//       icon: <FaWhatsapp />,
//       url: 'https://wa.me/+919792277788',
//       color: 'bg-green-500',
//     },
//     {
//       icon: <FaInstagram />,
//       url: 'https://www.instagram.com/bhavisyadindia?utm_source=qr&igsh=ZGJxY3Z6dnNpemFx',
//       color: 'bg-pink-500',
//     },
//     {
//       icon: <SiX />,
//       url: 'https://x.com/bhavisyadindia',
//       color: 'bg-black',
//     },
//     {
//       icon: <FaFacebook />,
//       url: 'https://www.facebook.com/share/16ttEG2DNy/',
//       color: 'bg-blue-600',
//     },
//   ];

//   return (
//     <div className="fixed top-1/3 left-0 z-50 flex flex-col space-y-3">
//       <button
//         onClick={toggleLanguage}
//         className="flex items-center justify-center w-12 h-12 rounded-r-full bg-gray-500 text-white shadow-md hover:scale-110 transition-transform"
//         title="Toggle Language"
//       >
//         {language === 'en' ? 'हिन्दी' : 'English'}
//       </button>
//       {links.map((link, idx) => (
//         <a
//           key={idx}
//           href={link.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`flex items-center justify-center w-12 h-12 rounded-r-full ${link.color} text-white shadow-md hover:scale-110 transition-transform`}
//         >
//           <span className="text-xl">{link.icon}</span>
//         </a>
//       ))}
//     </div>
//   );
// };

// export default SocialSidebar;


import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiGmail, SiX } from 'react-icons/si';
import { MdTranslate } from 'react-icons/md'; // Language toggle icon

const SocialSidebar = ({ language, toggleLanguage }) => {
  const links = [
    {
      icon: <FaWhatsapp />,
      url: 'https://wa.me/+919792277788',
      color: 'bg-green-500',
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/bhavisyadindia?utm_source=qr&igsh=ZGJxY3Z6dnNpemFx',
      color: 'bg-pink-500',
    },
    {
      icon: <SiX />,
      url: 'https://x.com/bhavisyadindia',
      color: 'bg-black',
    },
    {
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/share/16ttEG2DNy/',
      color: 'bg-blue-600',
    },
  ];

  return (
    <div className="fixed top-1/3 left-0 z-50 flex flex-col space-y-3">
      <button
        onClick={toggleLanguage}
        className="flex items-center justify-center w-12 h-12 rounded-r-full bg-gray-500 text-white shadow-md hover:scale-110 transition-transform"
        title={`Switch to ${language === 'en' ? 'Hindi' : 'English'}`}
      >
        <MdTranslate className="text-xl" />
      </button>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-12 h-12 rounded-r-full ${link.color} text-white shadow-md hover:scale-110 transition-transform`}
        >
          <span className="text-xl">{link.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
