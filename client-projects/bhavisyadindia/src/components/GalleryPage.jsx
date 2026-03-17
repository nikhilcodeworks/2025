// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';

// const GalleryPage = () => {
//   const images = [
//     '/gallery/img1.jpg',
//     '/gallery/img2.jpg',
//     '/gallery/img3.jpg',
//     '/gallery/img4.jpg',
//   ];

//   const videos = [
//     'https://drive.google.com/file/d/1hkVW-zm98UaOfYQsQtanUh66VxTeZOZy/view?usp=sharing',
//     'https://www.youtube.com/embed/dQw4w9WgXcQ',
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Gallery</h2>

//       {/* Image Slider */}
//       <Slider {...sliderSettings}>
//         {images.map((img, idx) => (
//           <div key={idx} className="h-64 md:h-96 overflow-hidden rounded-xl">
//             <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </Slider>

//       {/* Videos Section */}
//       <h3 className="text-2xl font-semibold mt-12 mb-4 text-gray-700">Videos</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {videos.map((video, idx) => (
//           <div key={idx} className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
//             <iframe
//               width="100%"
//               height="100%"
//               src={video}
//               title={`video-${idx}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ))}
//       </div>

//       {/* Images Grid */}
//       <h3 className="text-2xl font-semibold mt-12 mb-4 text-gray-700">Images</h3>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {images.map((img, idx) => (
//           <div key={idx} className="overflow-hidden rounded-lg shadow-md">
//             <img src={img} alt={`Gallery ${idx}`} className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GalleryPage = () => {
  const images = [
    '/gallery/img1.jpg',
    '/gallery/img2.jpg',
    '/gallery/img3.jpg',
    '/gallery/img4.jpg',
    '/gallery/img5.jpeg'
  ];

 

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true, // 🔁 Added prev/next
    pauseOnHover: true,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Gallery</h2>

      {/* Image Slider */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-700"></h3>
      <Slider {...sliderSettings}>
        {images.map((img, idx) => (
          <div key={idx} className="h-64 md:h-96 overflow-hidden rounded-xl">
            <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider>

      {/* Video Slider */}
      {/* <h3 className="text-2xl font-semibold mt-12 mb-4 text-gray-700">Video Slider</h3>
      <Slider {...sliderSettings}>
        {videos.map((video, idx) => (
          <div key={idx} className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={video}
              title={`video-${idx}`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider> */}

      {/* Image Grid */}
      <h3 className="text-2xl font-semibold mt-12 mb-4 text-gray-700">Images</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              alt={`Gallery ${idx}`}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
