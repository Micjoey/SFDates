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
                    <div className='filter-bar'>
                        <div className='filter-date-bar'>
                            <h1>Filler Text</h1>
                        </div>
                        <div className='random-date-button'>
                            <h1>Filler Text</h1>
                        </div>

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
