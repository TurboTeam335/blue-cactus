import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './PageTransition.css'; 

const Page = ({ page, direction }) => {
  return (
    <div className='slide-container'>
      <TransitionGroup>
        <CSSTransition
          key={page.key} // Correctly use the key here
          in={true}
          appear={true}
          timeout={300}
          classNames={direction === 'right' ? 'slide' : 'slide-from-left'}
        >
          <div className='slide'>{page.component}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Page;
