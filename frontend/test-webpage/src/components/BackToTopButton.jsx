/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { 
    AiOutlineArrowUp
    
} from 'react-icons/ai'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const scrollHandler = () => {
      
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };


    window.addEventListener('scroll', scrollHandler);

    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    isVisible && (
      <div
        className="fixed bottom-4 right-4 p-2
         bg-primary rounded-full cursor-pointer hover:scale-105 duration-500"
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp size={40} className=' 
        text-white' />
      </div>
    )
  );
};

export default BackToTopButton;
