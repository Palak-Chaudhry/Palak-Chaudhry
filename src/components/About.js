import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { srConfig } from '../config';
import { KEY_CODES } from '../utils';
import sr from '../utils/sr';
import { usePrefersReducedMotion } from '../hooks';
import * as S from '../styles/style';
import { jobsData, skillCategories } from './personalDetails';

const About = () => {
  
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  const nodeRefs = useRef(jobsData.map(() => React.createRef()));

  return (
    <S.PageBackground>
      <S.AboutSection id="about">
        <S.StyledJobsSection id="jobs" ref={revealContainer}>
          <S.AboutTextBoxContainer>
          <div className='wrapper'>
          <S.StyledTitle>About me</S.StyledTitle>
          <S.StyledContent>
            I am a passionate computational biologist with expertise in bioinformatics and data science. 
            My research focuses on integrating multi-modal biological data to uncover insights into complex 
            biological systems. I have experience in developing machine learning models for drug discovery 
            and analyzing single-cell RNA sequencing data. With a strong background in both wet lab techniques 
            and computational methods, I bridge the gap between biology and computer science to drive 
            innovation in the field of computational biology.
          </S.StyledContent>
          </div>
          </S.AboutTextBoxContainer>
          <br></br>
          <S.AboutTextBoxContainer>
          <div className='wrapper'>
          <S.StyledTitle><div className='study'>Where I've studied</div></S.StyledTitle>
          <div className='inner'>
            <S.StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
              {jobsData &&
              jobsData.map(({ frontmatter }, i) => {
                const { degree } = frontmatter;
                return (
                  <S.StyledTabButton
                    key={i}
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    ref={el => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role="tab"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-selected={activeTabId === i}
                    aria-controls={`panel-${i}`}>
                    <span>{degree}</span>
                  </S.StyledTabButton>
                );
              })}
              <S.StyledHighlight activeTabId={activeTabId} />
            </S.StyledTabList>

            <S.StyledTabPanels>
            {jobsData &&
            jobsData.map(({ frontmatter, html }, i) => (
              <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade" nodeRef={nodeRefs.current[i]}>
                <S.StyledTabPanel
                  ref={nodeRefs.current[i]}
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  hidden={activeTabId !== i}>
                  <h3>
                    <span>{frontmatter.school}</span>
                    <span className="title"><br></br>{frontmatter.title}</span>
                  </h3>
                  <p className="range">{frontmatter.range}</p>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </S.StyledTabPanel>
              </CSSTransition>
            ))}
          </S.StyledTabPanels>
          </div>
          </div>
          </S.AboutTextBoxContainer>
          <br></br>
          <S.AboutTextBoxContainer>
          <div className='wrapper'>
          <S.StyledTitle><div className='skill'>Skills I've acquired</div></S.StyledTitle>
          <S.StyledSkill>
            {skillCategories.map((category, index) => (
              <S.SkillCategory key={index}>
                <h3 className='main-skill'>{category.title}</h3>
                <ul className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </S.SkillCategory>
            ))}
          </S.StyledSkill>
          </div>
          </S.AboutTextBoxContainer>
      </S.StyledJobsSection>
      </S.AboutSection>
    </S.PageBackground>
  );
}

export default About;