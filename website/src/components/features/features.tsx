import React from 'react';
import FeatureBox from '../feature-box/feature-box';





const Features = () => {
    return (
        <div className = "features-container" id="writing">
            <h1 id = "features-title">Features</h1>
            <div id = "features-box">
            <FeatureBox title = "Tutorials" paragraph = "This is a paragraph talking about what the new features are going to be and when they will be released."></FeatureBox>
            <FeatureBox title = "Safety" paragraph = "This is a paragraph talking about what the new features are going to be and when they will be released."></FeatureBox>
            <FeatureBox title = "Earn Crypto" paragraph = "This is a paragraph talking about what the new features are going to be and when they will be released."></FeatureBox>
            <FeatureBox title = "More to Come" paragraph = "This is a paragraph talking about what the new features are going to be and when they will be released."></FeatureBox>
            </div>
        </div>
    )
}

export default Features;