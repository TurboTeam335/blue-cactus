import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './PageTransition.css'; // You will create this CSS file
import AboutPage1 from './AboutPage1';
import AboutPage2 from './AboutPage2';
import AboutPage3 from './AboutPage3';
import AboutPage4 from './AboutPage4';

const Page = ({ page, direction }) => {
  const { imgSrc, title, paragraph, layoutType } = page;

  const pageComponent = () => {
    switch (layoutType) {
      case 'layout1':
        return (
          <AboutPage1
            className='fade-in'
            imgSrc={imgSrc}
            title={title}
            paragraph={paragraph}
          />
        );
      case 'layout2':
        return (
          <AboutPage2
            className='fade-in'
            imgSrc={imgSrc}
            title={title}
            paragraph={paragraph}
          />
        );
      case 'layout3':
        return (
          <AboutPage3
            className='fade-in'
            imgSrc={imgSrc}
            title={title}
            paragraph={paragraph}
          />
        );
      case 'layout4':
        return (
          <AboutPage4
            className='fade-in'
            imgSrc={imgSrc}
            title={title}
            paragraph={paragraph}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='slide-container'>
      <TransitionGroup>
        <CSSTransition
          key={page.layoutType}
          in={true} // This should always be true as each page component mounts
          appear={true} 
          timeout={300}
          classNames={direction === 'right' ? 'slide' : 'slide-from-left'}
        >
          <div className='slide'>{pageComponent()}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Page;
