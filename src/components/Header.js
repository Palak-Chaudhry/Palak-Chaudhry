import React from 'react';
import logo from '../img/Logo.png'; // Adjust path if necessary
import {StyledHeader,StyledNav,StyledLinks,StyledLink,StyledButton,StyledImage} from '../styles/style';
import resumePDF from './Palak_PhD_Resume.pdf';

export const ResumeLink = (
  <a className="resume-button" href={resumePDF} target="_blank" rel="noopener noreferrer">
    Resume
  </a>
);
function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLinks>
          <StyledLink to="home" smooth={true} duration={500}>Home</StyledLink>
          <StyledLink to="about" smooth={true} duration={500}>About</StyledLink>
          <StyledLink to="experience" smooth={true} duration={500}>Experience</StyledLink>
          <StyledLink to="projects" smooth={true} duration={500}>Projects</StyledLink>
          <StyledLink to="contact" smooth={true} duration={500}>Contact</StyledLink>
          <StyledButton className='resume-button'>{ResumeLink}</StyledButton>
        </StyledLinks>
      </StyledNav>
      <StyledImage src={logo} alt="Your Image" />
    </StyledHeader>
  );
}

export default Header;
