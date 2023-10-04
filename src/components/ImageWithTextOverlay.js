import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './ImageWithTextOverlay.css';

const ImageWithTextOverlay = ({ landscapeSrc, portraitSrc, alt, overlayText }) => {
    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setIsLandscape(window.innerWidth > window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="image-container"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                overflow: 'hidden'
            }}>
            <img
                src={isLandscape ? landscapeSrc : portraitSrc}
                alt={alt}
                className="image"
                style={{ height: "100vh", width: "auto", objectFit: 'cover' }}
            />
            {overlayText && <div className="overlay-text">{overlayText}</div>}
        </div>
    );
};

export default ImageWithTextOverlay;
