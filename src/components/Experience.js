import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { srConfig } from '../config';
import { KEY_CODES } from '../utils';
import sr from '../utils/sr';
import { usePrefersReducedMotion } from '../hooks';
import * as S from '../styles/style'
import {workexperiences, researchexperiences, researchpapers} from './personalDetails';

const Experience = () => {
  const [activeResearchTabId, setActiveResearchTabId] = useState(0);
  const [activeWorkTabId, setActiveWorkTabId] = useState(0);
  const [activePaperTabId, setActivePaperTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [expandedDescriptions, setExpandedDescriptions] = useState({
    research: {},
    work: {},
    papers: {}
  });

  const toggleDescription = (sectionType, index) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [sectionType]: {
        ...prev[sectionType],
        [index]: !prev[sectionType][index]
      }
    }));
  };

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

  const nodeRefs = useRef(researchexperiences.map(() => React.createRef()));
  const nodeRefs2 = useRef(workexperiences.map(() => React.createRef()));
  

  return (
    <S.PageBackground>
    <S.ExperienceSection id="experience">
      <S.StyledExperienceSection>
        <S.StyledTitle>Research Experience</S.StyledTitle>
        <div className='inner'>
            <S.StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
              {researchexperiences &&
              researchexperiences.map(({ frontmatter }, i) => {
                const { company } = frontmatter;
                return (
                  <S.StyledTabButton
                    key={i}
                    isActive={activeResearchTabId === i}
                    onClick={() => setActiveResearchTabId(i)}
                    ref={el => (tabs.current[i] = el)}
                    id={`research-tab-${i}`}
                    role="tab"
                    tabIndex={activeResearchTabId === i ? '0' : '-1'}
                    aria-selected={activeResearchTabId === i}
                    aria-controls={`research-panel-${i}`}>
                    <span>{company}</span>
                  </S.StyledTabButton>
                );
              })}
              <S.StyledHighlight activeTabId={activeResearchTabId} />
            </S.StyledTabList>

            <S.StyledTabPanels>
            {researchexperiences &&
            researchexperiences.map(({ frontmatter, html }, i) => (
              <CSSTransition key={i} in={activeResearchTabId === i} timeout={250} classNames="fade" nodeRef={nodeRefs.current[i]}>
                <S.StyledTabPanel className='exp'
                  ref={nodeRefs.current[i]}
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeResearchTabId === i ? '0' : '-1'}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeResearchTabId !== i}
                  hidden={activeResearchTabId !== i}>
                  <h3><span><br></br>{frontmatter.title}</span></h3>
                  <h4>
                    <span>{frontmatter.company}</span>
                    <span className="professor" style={{ fontStyle: 'italic' }}> under {frontmatter.professor}</span>
                 </h4>
                  <p className="range">{frontmatter.duration}</p>
                  {frontmatter.project && frontmatter.project.map((project, projectIndex) => (
                  <div key={projectIndex}>
                    <p className="project">{project}</p>
                    <ul className="description">
                      {(expandedDescriptions.research[i] ? frontmatter.description[projectIndex] : frontmatter.description[projectIndex].slice(0, 0)).map((item, descIndex) => (
                        <li key={descIndex}>{item}</li>
                      ))}
                    </ul>
                    {frontmatter.description[projectIndex].length > 0 && (
                      <S.StyledButtonExperience className="description-toggle" onClick={() => toggleDescription('research', i)}>
                        {expandedDescriptions.research[i] ? 'See less' : 'See more'}
                      </S.StyledButtonExperience>
                    )}
                  </div>
                ))}
              </S.StyledTabPanel>
              </CSSTransition>
            ))}
          </S.StyledTabPanels>
          </div>

          {/* <StyledTitle>Research Papers</StyledTitle> */}
        <div className='inner'>
            <S.StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
              {researchpapers &&
              researchpapers.map(({ frontmatter }, i) => {
                const { year } = frontmatter;
                return (
                  <S.StyledTabButton
                    key={i}
                    isActive={activePaperTabId === i}
                    onClick={() => setActiveResearchTabId(i)}
                    ref={el => (tabs.current[i] = el)}
                    id={`research-tab-${i}`}
                    role="tab"
                    tabIndex={activePaperTabId === i ? '0' : '-1'}
                    aria-selected={activePaperTabId === i}
                    aria-controls={`research-panel-${i}`}>
                    <span>{year}</span>
                  </S.StyledTabButton>
                );
              })}
              <S.StyledHighlight activeTabId={activePaperTabId} />
            </S.StyledTabList>

            <S.StyledTabPanels>
            {researchpapers &&
            researchpapers.map(({ frontmatter, html }, i) => (
              <CSSTransition key={i} in={activePaperTabId === i} timeout={250} classNames="fade" nodeRef={nodeRefs.current[i]}>
                <S.StyledTabPanel className='exp'
                  ref={nodeRefs.current[i]}
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activePaperTabId === i ? '0' : '-1'}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activePaperTabId !== i}
                  hidden={activePaperTabId !== i}>
                  <ul>
                    <li>
                      {frontmatter.title}
                      <S.StyledButtonExperience href={frontmatter.url} target="_blank" rel="noopener noreferrer">
                        View Paper
                      </S.StyledButtonExperience>
                    </li>
                  </ul>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </S.StyledTabPanel>
              </CSSTransition>
            ))}
          </S.StyledTabPanels>
          </div>
      </S.StyledExperienceSection>
      <S.StyledExperienceSection>
        <S.StyledTitle>Work Experience</S.StyledTitle>
        <div className='inner'>
            <S.StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
              {workexperiences &&
              workexperiences.map(({ frontmatter }, i) => {
                const { company } = frontmatter;
                return (
                <S.StyledTabButton
                  key={i}
                  isActive={activeWorkTabId === i}
                  onClick={() => setActiveWorkTabId(i)}
                  ref={el => (tabs.current[i] = el)}
                  id={`work-tab-${i}`}
                  role="tab"
                  tabIndex={activeWorkTabId === i ? '0' : '-1'}
                  aria-selected={activeWorkTabId === i}
                  aria-controls={`work-panel-${i}`}>
                  <span>{company}</span>
                </S.StyledTabButton>
                );
              })}
              <S.StyledHighlight activeTabId={activeWorkTabId} />
            </S.StyledTabList>

            <S.StyledTabPanels>
            {workexperiences &&
            workexperiences.map(({ frontmatter, html }, i) => (
              <CSSTransition key={i} in={activeWorkTabId === i} timeout={250} classNames="fade" nodeRef={nodeRefs.current[i]}>
                <S.StyledTabPanel className='exp'
                  ref={nodeRefs2.current[i]}
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeWorkTabId === i ? '0' : '-1'}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeWorkTabId !== i}
                  hidden={activeWorkTabId !== i}>
                  <h3><span><br></br>{frontmatter.title}</span></h3>
                  <h4>
                    <span>{frontmatter.company}</span>
                 </h4>
                  <p className="range">{frontmatter.duration}</p>
                  <ul className="description">
                    {frontmatter.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </S.StyledTabPanel>
              </CSSTransition>
            ))}
          </S.StyledTabPanels>
          </div>
      </S.StyledExperienceSection>
    </S.ExperienceSection>
    </S.PageBackground>
  );
};

export default Experience;