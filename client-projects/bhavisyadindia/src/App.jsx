// import React from 'react';
// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="*"
//           element={
//             <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-fadeIn">
//               <div className="bg-white/90 p-10 rounded-3xl shadow-2xl text-center transform animate-scaleUp max-w-xl">
//                 <div className="flex items-center justify-center mb-6">
//                   <div className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-100 animate-pulse">
//                     <span className="text-5xl"></span>
//                   </div>
//                 </div>
//                 <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Website is under maintenance </h1>
//                 <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
//                  We will be live again shortly!
//                 </p>
//               </div>
//             </div>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Team from './components/Team';
import Impact from './components/Impact';
import CSR from './components/CSR';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import GalleryPage from './components/GalleryPage'; // <-- make sure path is correct
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <Router>
      <div className="App">
        <SocialSidebar language={language} toggleLanguage={toggleLanguage} />
        <Header language={language} />
        
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <Hero language={language} />
                <About language={language} />
                <Projects language={language} />
                <Team language={language} />
                <Impact language={language} />
                <CSR language={language} />
                <Contact language={language} />
              </>
            }
          />

          {/* Gallery Page Route */}
          <Route path="/gallery" element={<GalleryPage />} />
           <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
