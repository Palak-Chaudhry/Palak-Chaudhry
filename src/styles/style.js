import styled from 'styled-components';
import theme from '../styles/theme';
import { Link } from 'react-scroll';
import backgroundImage from '../img/bg4.jpg';

export const PageBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--dark-navy);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  max-width: 1500px;
  padding: 0px;
  margin: 0 auto;
`;

export const AboutTextBoxContainer = styled.div`
  .wrapper {
    &:hover {
      outline: 0;
      display: block;
      position: relative;
      width: 100%;
      border-radius: 0px;
      background-color:rgb(73, 86, 112,0.2);
      padding: 20px;
      transition: var(--transition);
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(-8px, 8px);
      }

      .text-content {
        color: var(--white);
      }
    }

    .text-content {
      position: relative;
      color: var(--navy);
      transition: var(--transition);
    }

    &:after {
      top: 10px;
      left: 10px;
      z-index: -1;
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 0px;
      transition: var(--transition);
    }
  }
`;


//ABOUT

export const StyledTitle = styled.h2`
  color: var(--hot-pink);
  font: var(--font-sans);
  font-size: var(--fz-heading);

  .study {
    font-size: var(--fz-xl);
  }
  .skill {
    font-size: var(--fz-xl);
  }
  .title{
    font-size: var(--fz-xl);
  }
`;

export const StyledContent = styled.div`
  font-size: var(--fz-lg);
  line-height: 1;
  font-family: var(--font-sans);
  color: var(--slate);
`;

//JOB
export const StyledJobsSection = styled.section`
  max-width: 1000px;
  min-height: 100px;

  .inner {
    display: flex;
    min-height: 100px;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 100px;
    }
  }
`;

export const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

export const StyledTabButton = styled.button`
  theme: theme.link;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--pink)' : 'var(--slate)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    theme: ${theme.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`;

export const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--pink);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

export const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    theme: ${theme.fancyList};
    display: column;
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--pink);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 500;
    line-height: 1.5;

    .exp {
        color: var(--lightest-slate);
        font-family: var(--font-sans);
        font-size: var(--fz-xxl);
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    .title {
       color: var(--pink);
       font-size: var(--fz-xl);
       font-family: var(--font-sans);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .project {
    color: var(--pink);
    font-size: var(--fz-lg);
    margin-top: 1rem;
  }
`;
// SKILLS
export const SkillCategory = styled.div`
  h3.main-skill {
    color: var(--pink);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    margin-bottom: 1rem;
  }`;

export const StyledSkill = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  ul.skills-list {
    display: column
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--pink);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

//HEADER 
export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 50;
  padding: 0px 0px;
  width: 100%;
  height: var(--nav-height);
  background: linear-gradient(to bottom, var(--navy), transparent);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

export const StyledNav = styled.nav`
  position: relative;
  top: 25px;
  padding: 0 0px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
`;

export const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  padding: 10px;
  margin: 0 5px;
  text-decoration: none;
  color: var(--lightest-slate);
  font-size: var(--fz-md);
  font-weight: 400;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    color: var(--hot-pink);
  },

  .resume-button {
    theme: ${theme.smallButton};
    margin-left: -10px;
    font-size: var(--fz-md);
  };
`;

export const StyledImage = styled.img`
  position: absolute;
  z-index: 3;
  width: 200px; /* Adjust the width of the image */
  height: 60px; /* Adjust the height of the image */
  margin: 0; 
  top: 25px;
  left: 15px;
`;

export const StyledButton = styled.button`
  display: inline-block;
  color: var(--hot-pink);
  padding: 1px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  transition: transform 0.3s ease;
  height: var(--tab-height);
  border-left: 2px solid var(--hot-pink);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--lightest-slate)' : 'var(--pink)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    theme: ${theme.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
    transform: translateY(-3px);
  }
`;

//CONTACT
export const StyledContactSection = styled.section`
  max-width: 1000px;
  text-align: center;
  min-height: 100vh;
  padding: 200px;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  }
  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    color: var(--white);
  }

  .email-link {
    theme: ${theme.bigButton};
    margin-top: 50px;
  }

`;

//Experience

export const ExperienceSection = styled.section`
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-gap: 80px;
  padding-top: 30px;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 3rem;
  border-radius: var(--border-radius);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const StyledExperienceSection = styled.section`
  max-width: 1200px;
  min-height: 100px;

  .inner {
    display: flex;
    min-height: 100px;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 100px;
    }
  }
`;

export const StyledButtonExperience = styled.a`
  display: inline-block;
  color: var(--hot-pink);
  padding: 1px 2px;
  border-radius: 5px;
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

//HOME

export const HomePageBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(rgba(2, 19, 27, 0.9), rgb(2, 19, 27, 0.9)), url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HomeContainer = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 50px;
  padding-top: 300px;
  min-height: 100vh;
`;

export const StyledText = styled.div`
  h1 {
    margin: 0 0 30px 4px;
    color: var(--hot-pink);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 5vw, var(--fz-lg));
    font-weight: 400;
  }

  h2 {
    color: var(--lightest-slate);
    font-size: clamp(40px, 8vw, 60px);
  }

  .typed-bio {
    color: var(--slate);
    font-size: 3rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 300px;

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: 20%;
    background-color: var(--pink);

    &:hover {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: 20%;
      mix-blend-mode: multiply;
      filter: grascale(100%) contrast(1) opacity(30%);
      transition: var(--transition);
    }

    &:after {
      border: 2px solid var(--hot-pink);
      top: 10px;
      left: 10px;
      z-index: -1;
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 20%;
      transition: var(--transition);
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const SocialIcon = styled.a`
  color: var(--lightest-slate);
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--hot-pink);
  }
`;

//PROJECT

export const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .projects-grid {
    theme: theme.resetList;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 15px;
    position: relative;
    margin-top: 0px;
    list-style-type: none;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    theme: theme.button;
    margin: 80px auto 0;
  }
`;

export const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    theme: theme.boxShadow;
    theme: theme.flexBetween;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: rgb(73, 86, 112,0.2);
    transition: var(--transition);
    overflow: auto;

    &:hover,
    &:focus-within {
      transform: translateY(-7px);
      background-color: var(--navy);
    }
  }

  .project-top {
    theme: theme.flexBetween;
    margin-bottom: 35px;

    .folder {
      color: var(--pink);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--pink);

      a {
        theme: theme.flexCenter;
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--pink);
    font-size: var(--fz-lg);
    font-family: var(--font-mono);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;
    text-align: justify;

    a {
      theme: theme.inlineLink;
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style-type: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;
