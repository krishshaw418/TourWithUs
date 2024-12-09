import React from 'react';
import PropTypes from 'prop-types';

const ExampleCarouselImage = ({ src, alt = 'Carousel Image', caption = null }) => {
    return (
        <div>
            <img
                className="d-block w-100"
                src={src}
                alt={alt}
            />
            {caption && (
                <div className="carousel-caption d-none d-md-block">
                    <h5>{caption}</h5>
                </div>
            )}
        </div>
    );
};

ExampleCarouselImage.propTypes = {
    src: PropTypes.string.isRequired,    // Image source
    alt: PropTypes.string,               // Alt text for accessibility
    caption: PropTypes.string            // Optional caption
};

export default ExampleCarouselImage;
