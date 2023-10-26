import React, { useState, useEffect } from "react"
import './ImageWithTextOverlay.css';

const ImageWithTextOverlay = ({ landscapeSrc, portraitSrc, alt, overlayText }) => {
    // Initialize with a default value
    const [isLandscape, setIsLandscape] = useState(true);

    useEffect(() => {
        // Update the state inside the useEffect hook
        setIsLandscape(window.innerWidth > window.innerHeight);

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
                alignItems: 'flex-start',
                height: '100vh',
                overflow: 'hidden'
            }}>
            <img
                src={isLandscape ? landscapeSrc : portraitSrc}
                alt={alt}
                className="image"
                style={{ height: "95vh", width: "auto", objectFit: 'cover' }}
            />
            {overlayText && <div className="overlay-text">{overlayText}</div>}
        </div>
    );
};

export default ImageWithTextOverlay;
