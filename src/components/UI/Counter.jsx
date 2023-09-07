import { useState, useEffect } from 'react';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const incrementAmount = initialValue > 10000 ? 20000 : initialValue > 1000 ? 1000 : 50;

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`counter-${initialValue}`);
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, initialValue]);

  useEffect(() => {
    if (isVisible && count < initialValue) {
      const timeout = setTimeout(() => {
        setCount((prevCount) => prevCount + (prevCount + incrementAmount <= initialValue ? incrementAmount : initialValue - prevCount));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, count, initialValue, incrementAmount]);

  return (
    <div className='counter d-flex flex-row justify-content-center align-items-center m-4' id={`counter-${initialValue}`}>
      <p className='counter-text display-4 fw-bolder'>{count}</p>
    </div>
  );
};

export default Counter;
