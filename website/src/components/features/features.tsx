import React from 'react';
import FeatureBox from '../feature-box/feature-box'

const Features = () => {
    return (
        <div className = "features-container" id="writing">
            <h1 id = "features-title">Features</h1>
            <div id = "features-box">
            <FeatureBox></FeatureBox>
            <FeatureBox></FeatureBox>
            <FeatureBox></FeatureBox>
            <FeatureBox></FeatureBox>
            </div>
        </div>
    )
}

export default Features;