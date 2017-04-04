import React, {PropTypes} from 'react';
import './Carousel.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Carousel = ({imageSrc}) =>(
  <div className={'carousel-frame'}>
    <ReactCSSTransitionGroup
      transitionName="carousel"
      transitionEnterTimeout={2000}
      transitionLeaveTimeout={2000}>
      <img className={'carousel-img'} src={imageSrc} key={imageSrc} alt={imageSrc}/>
    </ReactCSSTransitionGroup>
  </div>
);

Carousel.propTypes = {
  imageSrc: PropTypes.string.isRequired
};

export default Carousel;
