import React from 'react';
import styled from 'styled-components';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import "./foot.css";

const SectionWrapper = styled.section`
  min-height: 40vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #B4D4FF, #E6E6FA); // Same as Third.jsx
  color:rgb(108, 106, 106);
  position: relative;
  bottom: 0;
  margin-top: auto;
  padding: 2rem 0;
`;

const FooterNav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const NavColumn = styled.div`
  h4 {
    color: #333333;
    margin-bottom: 1.5rem;
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: rgba(#666666, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 0.9em;
    letter-spacing: 0.02em;

    &:hover {
      color: #3E6D9C;
    }
  }
`;

const Bottom = styled.div`
  font-family: 'Albert Sans', sans-serif;
  color: #555555;
  font-size: 0.9em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  position: relative;
  border-top: 1px solid rgba(102, 102, 102, 0.1);
  padding-top: 2rem;

  .credit {
    color: #555555 !important; // Added important to override any conflicting styles
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }
  
  .links a {
    color: #666666;
    
    &:hover {
      color: #3E6D9C;
    }
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  return (
    <SectionWrapper>
      <FooterNav>
        <NavColumn>
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </NavColumn>
        
        <NavColumn>
          <h4>For Instructors</h4>
          <ul>
            <li><a href="/teach">Become an Instructor</a></li>
            <li><a href="/resources">Teacher Resources</a></li>
            <li><a href="/guidelines">Teaching Guidelines</a></li>
            <li><a href="/instructor-faq">Instructor FAQ</a></li>
          </ul>
        </NavColumn>

        <NavColumn>
          <h4>For Students</h4>
          <ul>
            <li><a href="/classes">Browse Classes</a></li>
            <li><a href="/pricing">Membership Plans</a></li>
            <li><a href="/gift-cards">Gift Cards</a></li>
            <li><a href="/student-support">Student Support</a></li>
          </ul>
        </NavColumn>

        <NavColumn>
          <h4>Connect</h4>
          <ul>
            <li><a href="https://instagram.com/yoje" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com/yoje" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/yoje" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com/company/yoje" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </NavColumn>
      </FooterNav>

      <Bottom>
        <span className="credit">
          &copy; {new Date().getFullYear()} Yoje. All Rights Reserved.
        </span>
        <span className="links">
          <a href="/privacy" style={{ marginRight: '1rem' }}>Privacy Policy</a>
          <a href="/terms" style={{ marginRight: '1rem' }}>Terms of Service</a>
        </span>
      </Bottom>
    </SectionWrapper>
  );
};

export default Footer;