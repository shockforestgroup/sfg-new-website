import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './ImageWithTextOverlay.css';


const ImageWithTextOverlay = ({ src, alt, overlayText }) => {
    return (
        <div className="image-container"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // This will make sure the container takes the full height of the viewport
                overflow: 'hidden' // This will hide any part of the image that overflows the container
            }}>
            <img
                src={src}
                alt={alt}
                className="image"
                style={{ height: "100vh", width: "auto", objectFit: 'cover' }}
            />
            {overlayText && <div className="overlay-text">{overlayText}</div>}
        </div>
    );
};


export default ImageWithTextOverlay