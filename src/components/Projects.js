import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { srConfig } from '../config';
import sr from '../utils/sr';
import { Icon } from '../components/icons';
import { usePrefersReducedMotion } from '../hooks';
import { projects } from './personalDetails';
import {PageBackground, StyledProjectsSection, StyledTitle, StyledProject,StyledButtonExperience} from '../styles/style'

const Projects = () => {

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [prefersReducedMotion]);

  const GRID_LIMIT = 6;
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const projectInner = project => {
    const { frontmatter, html } = project;
    const { github, external, title, tech } = frontmatter;

    return (
      <div className="project-inner">
        <header>
          <h3 className="project-title">
            <a href={external} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>

          <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
        </header>
        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        <div className="project-top">
            <div className="project-links">
              {github && (
                <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                  <Icon name="GitHub" />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  aria-label="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="External" />
                </a>
              )}
            </div>
          </div>  
        </footer>      
      </div>
    );
  };

  return (
    <PageBackground>
    <StyledProjectsSection>
      <StyledTitle>Some Projects</StyledTitle>
      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map((project, i) => (
                <StyledProject key={i}>{projectInner(project)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map((project, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    {projectInner(project)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      <StyledButtonExperience onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </StyledButtonExperience>
    </StyledProjectsSection>
    </PageBackground>
  );
};

export default Projects;
