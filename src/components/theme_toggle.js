import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/theme_context';
import styled, { keyframes } from 'styled-components';
import { FaSun, FaMoon, FaCloud, FaStar } from 'react-icons/fa';

const float = keyframes`
  20%, 80% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const ToggleButton = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 30px;
  background: ${props => (props.darkMode ? '#333' : '#4d91ff')};
  cursor: pointer;
  transition: background 0.5s;
  overflow: hidden;
`;

const ToggleIcon = styled.div`
  position: absolute;
  top: 5px;
  left: ${props => (props.darkMode ? '35px' : '5px')};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: left 0.5s, color 0.5s;
  animation: ${float} 10s infinite ease-in-out;
`;

const Cloud = styled(FaCloud)`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #fff;
  opacity: 0.7;
  animation: ${float} 3s infinite ease-in-out;
`;

const Star = styled(FaStar)`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #fff;
  opacity: 0.7;
  animation: ${float} 3s infinite ease-in-out;
  transform: scale(0.5);
`;

const generateRandomElements = (Element, count, maxWidth, maxHeight) => {
    return Array.from({ length: count }).map((_, index) => {
      const size = Math.random() * 10 + 10;
      const top = Math.random() * maxHeight;
      const left = Math.random() * maxWidth;
  
      return (
        <Element
          key={index}
          size={size}
          style={{ top: `${top}px`, left: `${left}px` }}
        />
      );
    });
  };

const ThemeToggle = () => {
  const { toggleTheme, darkTheme } = useContext(ThemeContext);
  const [clouds, setClouds] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setClouds(generateRandomElements(Cloud, 4, 50, 25));
    setStars(generateRandomElements(Star, 3, -30, 20));
  }, []);

  return (
    <ToggleButton darkMode={darkTheme} onClick={toggleTheme}>
    <ToggleIcon darkMode={darkTheme}>
      {darkTheme ? <FaMoon color="#f0f0f0" /> : <FaSun color="#ffc107" />}

      {!darkTheme && clouds}
      {darkTheme && stars}
    </ToggleIcon>
  </ToggleButton>
  );
};

export default ThemeToggle;
