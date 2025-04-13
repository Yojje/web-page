import styled from 'styled-components';
import Video from '../assets/video.mp4';
import { motion } from 'framer-motion';
import "./cover.css";

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const OverLay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.7)`};
`;

// Updated positioning to left bottom
const TitleContainer = styled(motion.div)`
  position: absolute;
  bottom: 3%;
  left: 3%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Title = styled(motion.h1)`
  color: ${props => props.theme.text};
  text-align: left;
  font-size: 6rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const StyledButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: white;
  color: black;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-family: 'Albert Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #000000;
  }
`;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3,
      duration: 0.5,
    },
  },
};

const CoverVideo = () => {
  return (
    <SectionWrapper>
      <OverLay />
      <TitleContainer
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <Title variants={itemVariants} className="cover-head-vid">
          YOJE
        </Title>
        <StyledButton
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </StyledButton>
      </TitleContainer>
      <video src={Video} type="video/mp4" autoPlay muted loop />
    </SectionWrapper>
  );
};

export default CoverVideo;