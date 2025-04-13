import styled from 'styled-components';
import "./banner.css";
import ban01 from '../../assets/img/pod01.png';
import ban02 from '../../assets/img/pod02.png';
import ban03 from '../../assets/img/pod03.png';
import ban04 from '../../assets/img/pod04.png';

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #B4D4FF, #E6E6FA); // Already matches
  z-index: 12;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const BannerComponent = styled.p`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Lora', serif;
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  
  img {
    border-radius: 8px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
  
  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <SectionWrapper>
      <Container id="up">
        <BannerComponent>
          <img src={ban01} className="ban-pic"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
          </img>
        </BannerComponent>
        <BannerComponent>
        <img src={ban02} className="ban-pic"
             data-scroll
             data-scroll-direction="horizontal"
             data-scroll-speed="-6"
             data-scroll-target="#up"
          >
          </img>
        </BannerComponent>
        <BannerComponent>
        <img src={ban03} className="ban-pic"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
          </img>
        </BannerComponent>
        <BannerComponent>
        <img src={ban04} className="ban-pic"
           data-scroll
           data-scroll-direction="horizontal"
           data-scroll-speed="-4"
           data-scroll-target="#up"
          >
          </img>
        </BannerComponent>
      </Container>
    </SectionWrapper>
  );
};

export default Banner;