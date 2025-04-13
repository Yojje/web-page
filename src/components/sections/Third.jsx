import styled from 'styled-components'; 
import "./new.css";

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background: linear-gradient(to bottom, #B4D4FF, #E6E6FA);
  display: flex;
  margin: 0 auto;
  color: #000000;
  font-family: 'Albert Sans', sans-serif;
`;

const TextWrapper = styled.div`
  z-index: 10;
`;

const LeftContainer = styled.div`
  width: 100%;
  text-align:center;
  top: 20%;
  left:50%
  transform: translateX(-40%);
  font-size:1.4em;
  position: absolute;
  text-transform:uppercase;
  z-index: 10;
`;

const Home = () => {
  return (
    <SectionWrapper id="fixed-target" className="about">
      

      <LeftContainer
        data-scroll
        data-scroll-sticky
        data-croll-direction="#fixed-target"
      >
     <p className="end-tezxt"
        data-scroll data-scroll-speed="-2">
          At Yoje, we believe yoga is for everyone. <br />
          Our platform connects you with experienced instructors <br />
          who provide personalized guidance to help you <br />
          achieve your wellness goals, wherever you are.
      </p> 
      </LeftContainer>
       
      <TextWrapper >
        <p className="header-sl-new"
        data-scroll data-scroll-speed="-2">JOIN TODAY</p> 
      </TextWrapper>
    </SectionWrapper>
  );
};

export default Home;
