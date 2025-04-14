import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Container = styled.div``;

const TextWrapper = styled(motion.span)`
  .bar-nav {
    position: absolute;
    z-index: 99;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #ffffff; // Changed to white
    border-radius: 20px;
    position: fixed;
    left: 5px;
    top: 10px;
    width: 99%;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // Added subtle shadow
  }

  li a {
    font-family: 'Albert Sans', sans-serif;
    display: block;
    color: #000000; // Changed to black
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  li a:hover {
    color: #666666; // Changed hover color to dark gray
  }

  li a:after {
    background-color: #000000; // Changed to black
  }

  .logo-text {
    font-family: 'Albert Sans', sans-serif;
    font-size: ${props => props.theme.fontxl};
    font-weight: 700;
    color: #000000; // Changed to black
    padding: 0.5rem 1rem;
    letter-spacing: 0.2rem;
    margin-right: auto;
    -webkit-text-fill-color: #000000; // Changed to black
  }`;

const textVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    x: -5,
    transition: {
      duration: 1,
      delay: 2,
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <TextWrapper
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className='bar-nav'>
            <ul>
              <span className="logo-text">Yoje</span>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/instructors">Instructors</a></li>
              <li><a href="/classes">Classes</a></li>
              <li><a className="active" href="/">Home</a></li>
            </ul>
          </div>
        </TextWrapper>
      </Link>
    </Container>
  );
};

export default Logo;