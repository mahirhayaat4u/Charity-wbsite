import React, { useState } from 'react';

const reviews = [
  {
    id: 1,
    text: 'This is a great product!',
    author: 'John Doe',
    title: 'Satisfied Customer',
    description: 'I love this product, its amazing!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    text: 'I love this product!',
    author: 'Jane Doe',
    title: 'Happy Customer',
    description: 'This product is so good, I recommend it!',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    text: 'This product is amazing!',
    author: 'Bob Smith',
    title: 'Delighted Customer',
    description: 'Im so happy with this product, its perfect!',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
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
    <div className="w-11/12 md:w-[30%] mx-auto py-8 mb-8 ">
    <h1 className='text-[2rem] text-center mb-8 font-thin'>Reviews From Different People</h1>
      <div className="flex items-center justify-between mb-4">
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
                <div className="bg-green-100 p-4 rounded-lg shadow-xl">
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
            className="h-6 w-6"
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