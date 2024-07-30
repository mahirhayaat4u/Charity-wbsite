import React, { useState } from 'react';
// import { IoPersonSharp } from "react-icons/io5";

const reviews = [
  
    {
      "id": 1,
      "text": "Donating here was a wonderful experience!",
      "author": "Alice Smith",
      "title": "Happy Donor",
      "description": "The staff was friendly and the process was smooth. I felt very comfortable.",
      "avatar": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      "id": 2,
      "text": "Highly recommend this organization!",
      "author": "Bob Johnson",
      "title": "Satisfied Supporter",
      "description": "I've donated multiple times and each experience has been fantastic.",
      "avatar": "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      "id": 3,
      "text": "Great cause, great people!",
      "author": "Carol Lee",
      "title": "Proud Contributor",
      "description": "It's wonderful to know my donation is making a difference.",
      "avatar": "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      "id": 4,
      "text": "Quick and easy donation process!",
      "author": "David Brown",
      "title": "Returning Donor",
      "description": "Everything was well-organized and efficient.",
      "avatar": "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      "id": 5,
      "text": "Amazing experience!",
      "author": "Eve Davis",
      "title": "Grateful Donor",
      "description": "The staff was so kind and helpful. I will definitely donate again.",
      "avatar": "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
      "id": 6,
      "text": "I felt very safe and well cared for.",
      "author": "Frank Wilson",
      "title": "Content Donor",
      "description": "The hygiene protocols were excellent and I was treated with respect.",
      "avatar": "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      "id": 7,
      "text": "The best place to donate!",
      "author": "Grace Martinez",
      "title": "Satisfied Donor",
      "description": "The atmosphere was welcoming and the staff was professional.",
      "avatar": "https://randomuser.me/api/portraits/women/7.jpg"
    },
    {
      "id": 8,
      "text": "Fantastic organization!",
      "author": "Henry Anderson",
      "title": "Loyal Donor",
      "description": "I appreciate how they handle everything with care and dedication.",
      "avatar": "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      "id": 9,
      "text": "I'll definitely be back to donate again.",
      "author": "Ivy Thomas",
      "title": "Happy Supporter",
      "description": "It's great to be part of something so impactful.",
      "avatar": "https://randomuser.me/api/portraits/women/9.jpg"
    },
    {
      "id": 10,
      "text": "Wonderful staff and great experience!",
      "author": "Jack White",
      "title": "Grateful Donor",
      "description": "The donation process was seamless and the staff was fantastic.",
      "avatar": "https://randomuser.me/api/portraits/men/10.jpg"
    }
  
  
];

const ReviewSlider = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  

  const handleNext = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentReview((prevReview) => (prevReview - 1 + reviews.length) % reviews.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    } else if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  return (
    <div className="w-11/12 md:w-[30%] mx-auto py-8 mb-8 md:flex md:flex-col md:items-center md:justify-center">
        <h1 className='text-[2rem] text-center text-white mb-8 font-thin'>Reviews From Our Doner</h1>
      <div className="flex md:w-[40rem] items-center justify-between mb-4">
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentReview * 100}%)`
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4 "
              >
                <div className="bg-slate-300 p-4 rounded-lg shadow-xl">
                  <div className="flex items-center mb-4 md:mb-8 md:py-10">
                    <img
                      src={review.avatar}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h2 className="text-lg font-bold">{review.title}</h2>
                      <p className="text-gray-600">{review.author}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                  <p className="text-gray-600">{review.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;