import React from 'react';
import './App.css';

const AdSection = () => {
    return (
        <section id="ad-banner" className="ad-banner-section">

            <div className="ad-content-wrapper" data-aos="zoom-in" data-aos-duration="800">
                <img 
                    src={"AD.png"}   // The path to ad image
                    alt={"Promotional Image for CookMate App"}
                    className="ad-image"
                />

            </div>

            <div className="ad-text-content" data-aos="zoom-in" data-aos-duration="800">
                    <h2>Real-time heat monitoring for safer and smarter cooking</h2>
            </div>

        </section>
    );
};

export default AdSection;