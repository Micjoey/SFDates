import React from 'react';
// import SignUpFormContainer from '../session_form/signup_form_container'



class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='splash-page'>
                <div className='background-img'>
                    <div>
                        {/* <img src={image_url('color-sf-bridge.jpg')} alt=""/> */}
                    </div>
                    <div className='filter-date-bar'>

                    </div>
                    <div className='random-date-button'>

                    </div>
                </div>
                <div className='random-date-box'>
                    <div className='random-date-information'></div>
                    <div className='random-date-image'></div>
                </div>
            </div>
        )
    }

}


export default Splash;
