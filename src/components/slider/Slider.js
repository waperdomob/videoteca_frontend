import React, { useState } from 'react';
import cx from 'classnames';
import SliderContext from '../context/SliderContext'
import Content from './Content'
import SlideButton from './SlideButton'
import SliderWrapper from './SliderWrapper'
import useSliding from './useSliding'
import useSizeElement from './useSizeElement'
import './Slider.scss'

import { useNavigate } from "react-router-dom";



const Slider = ({ children, activeSlide, ...props }) => {
  const history = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
  } = useSliding(width, React.Children.count(children));

  const handleSelect = video => {
    setCurrentSlide(video);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
    history,
  };
    return (
        <SliderContext.Provider value={contextValue}>
          <SliderWrapper>
            <div
              className={cx('slider', { 'slider--open': currentSlide != null })}
            >
              <div ref={containerRef} className="slider__container" {...slideProps}>{children}</div>
            </div>
            {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
            {hasNext && <SlideButton onClick={handleNext} type="next" />}
          </SliderWrapper>
          {currentSlide && <Content video={currentSlide} verVideo={props.verVideo} onClose={handleClose} />}
        </SliderContext.Provider>
      );
   
  
};

export default Slider;