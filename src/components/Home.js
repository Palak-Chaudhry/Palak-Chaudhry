import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import logo from '../img/profile_picture.jpg';
import { HomePageBackground , HomeContainer , StyledText , ImageContainer , SocialLinks , SocialIcon } from '../styles/style';


const Home = () => {
  return (
    <HomePageBackground>
      <HomeContainer id="home">
        <StyledText>
          <h1>Hi, my name is</h1>
          <h2>Palak Chaudhry.</h2>
          <ReactTyped
            className="typed-bio"
            strings={[
              "I'm a computational biologist.",
              "I'm a data scientist.",
            ]}
            typeSpeed={40}
            backSpeed={50}
            backDelay={1000}
            loop
          />
          <SocialLinks>
            <SocialIcon href="https://www.linkedin.com/in/palak-chaudhry-8a4b8b161/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://github.com/Palak-Chaudhry" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
          </SocialLinks>
        </StyledText>
        <ImageContainer>
          <div className="wrapper">
            <img
              className="img"
              src={logo}
              alt="Headshot"
              width={500}
            quality={95}
            />
          </div>
        </ImageContainer>
      </HomeContainer>
    </HomePageBackground>
  );
};

export default Home;
