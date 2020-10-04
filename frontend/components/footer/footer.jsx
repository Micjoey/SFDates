import React from 'react';

// linkedin tracker: https://bit.ly/3ivEr6L
// portfolio tracker: https://bit.ly/2F0FCgR
// github tracker: https://bit.ly/2SoUmsL
class Footer extends React.Component {
    render() {
        return (
            <div className="footer-inner">
                <a href="https://bit.ly/3ivEr6L" rel="noopener noreferrer" target="_blank" >
                    <img className="footer-linkedin" src={images.linkedin}/>
                </a>
                <a href="https://bit.ly/2SoUmsL" rel="noopener noreferrer" target="_blank" >
                    <img src={images.github} className="footer-github" />
                </a>
                <a href="https://bit.ly/2F0FCgR" id="footerLink" rel="noopener noreferrer" target='_blank'>Personal Portfolio</a>
            </div>
        );
    }
};

export default Footer;