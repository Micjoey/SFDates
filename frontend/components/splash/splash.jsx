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
                    <div className='random-date-information'>
                        <ul>
                            <h3>Title - Terra Linda Sleepy Hollow Hike</h3>
                        </ul>
                        <ul>
                            <h4>Location - San Rafeal</h4>
                        </ul>
                        <ul>
                            <p>Cost - $</p> 
                        </ul>
                        <ul>
                            <p>Type of Date - Hike</p>
                        </ul>
                        <ul>
                            <p>Date Number - #1</p>
                        </ul>
                        <ul>
                            
                        </ul>
                        <p></p>
                    </div>
                    <div className='random-date-image'>
                        <img src="" alt="Filler"/>
                    </div>
                </div>
            </div>
        )
    }

}


export default Splash;
