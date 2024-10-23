import React, { useState } from 'react';
import './Slideshow.css';  

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 10;  
  const baseURL = 'https://picsum.photos/300/200?image=';

  
  const nextImage = () => {
    if (currentIndex < totalImages - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  
  const backToStart = () => {
    setCurrentIndex(0);
  };

  return (
    <div>
      {}
      <img
        src={`${baseURL}${currentIndex}`}
        alt={`Slide ${currentIndex}`}
        style={{ width: '300px', height: '200px' }}
      />
      <div>
        {}
        <p>{`Hình ảnh: ${currentIndex + 1} / ${totalImages}`}</p>
        
        {}
        <button onClick={prevImage} className="button-pink">Previous</button>
        <button onClick={nextImage} className="button-pink" disabled={currentIndex >= totalImages - 1}>Next</button>
        <button onClick={backToStart} className="button-pink">Back to Start</button>
      </div>
    </div>
  );
};

export default Slideshow;
