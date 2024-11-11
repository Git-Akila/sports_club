import React from 'react';
import { IoIosArrowDropupCircle } from "react-icons/io";



  const buttonAnimation = `
  @keyframes gradientAnimation {
    0% {
      background: linear-gradient(45deg, #007BFF, #00CFFF);
    }
    50% {
      background: linear-gradient(45deg, #00CFFF, #FF5733);
    }
    100% {
      background: linear-gradient(45deg, #FF5733, #007BFF);
    }
  }
  `;
const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to top
    });
  };

  return (<>
    <style>{buttonAnimation}</style> {/* Inject the animation styles */}
    <button 
      onClick={scrollToTop} 
      style={buttonStyle} 
      aria-label="Scroll to top"
    >
      <IoIosArrowDropupCircle />
    </button></>
  );
};

// Style for the button
const buttonStyle1 = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  padding: '10px',
  fontSize: '18px',
  cursor: 'pointer',
  zIndex: 1000,
};


const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: 'linear-gradient(45deg, #007BFF, #00CFFF)', // Initial background gradient
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    fontSize: '18px',
    cursor: 'pointer',
    zIndex: 1000,
    animation: 'gradientAnimation 3s infinite alternate', // Apply gradient animation
  };
  

export default ScrollToTopButton;
