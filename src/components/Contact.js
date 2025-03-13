import React, { useEffect, useRef } from 'react';
import { srConfig, email } from '../config';
import sr from '../utils/sr';
import { usePrefersReducedMotion } from '../hooks';
import {StyledContactSection, StyledTitle, PageBackground} from '../styles/style';



const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <PageBackground>
    <StyledContactSection id="contact" ref={revealContainer}>
      <StyledTitle>What’s Next?</StyledTitle>

      <h2 className="title">Get In Touch</h2>

      <p>
      I'm always looking for opportunities to collaborate on exciting projects. 
      Feel free to connect with me to explore potential collaborations!
      Whether you have a question or just want to say hi, I’ll get back to you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
    </PageBackground>
  );
};

export default Contact;
