import React from 'react';
import LoadingScreen from '../../misc/loading_screen'
import { Link } from 'react-router-dom';




class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            totalCount: 0,
            randomDate: null,
            allDates: null,
        }
        this.randomDate = this.randomDate.bind(this)
    }

    componentDidMount() {
        const allDates = this.props.retrieveDates()
        Promise.all([allDates]).then(() => this.setState({loaded: true, allDates: this.props.dates}))
    }

    randomDate() {
        const randNum = Math.floor(Math.random() * this.state.totalCount)
        const randomDate = Object.values(this.state.allDates[randNum])
        const randomDateEdited = randomDate.slice(1,randomDate.length-2)
        randomDateEdited[0].toUpperCase();
        return randomDateEdited
    }



    render() {
        let dateInfo
        if (this.state.loaded) {
            dateInfo = [`Title`, `Location`, `Address`, `Date Number`, `Date Type`, `Cost`,  `Description`]
            return (
                <div className='splash-page'>
                    <div className='background-img'>
                        
                    </div>
                    {/* random date box */}
                    {/* <div className='random-date-box'>
                        <div className='random-date-information'>
                            {this.randomDate().map((info, idx) => (
                                <ul key={idx}>
                                    <p className="specific-date-title"> {dateInfo[idx]}: </p> 
                                    <p className="specific-date-information"> {info}</p>
                                </ul>
                            ))}
                        </div>
                        <div className='random-date-image'>
                            <img src="" alt="Filler"/>
                        </div>
                    </div> */}
                    {/* random date box */}
                    <div className="website-info">
                        <div className="website-info-text">
                            <p className="website-info-greeting">
                                Welcome to the SF Dates!
                            </p>
                            <div>
                            <p className="website-info-paragraph">
                                I stumbled upon this idea when I was trying to figure out date ideas in San Francisco. As I am sure you would have done in the same situation as myself - I went to the best two resources I had: Google and my friends. 

                                Per usual, when searching over the web, there were ideas, but not necessarily the options I wanted. I was hoping to find something that was in between me and my date and also unique. My friends made great suggestions, but once again, I wasn't sure. 

                                I wanted something to suggest to me a date idea based on what date I am on and a convenient location for both parties. 

                                So I created this website. 

                                I hope that this website will allow people in the Bay Area to find date ideas with relative ease. You are on a second date and need ideas in the Richmond district; {<Link to="">we got you</Link>}. Want to go on a hike; we got you. Been dating awhile and want to go on a random date, we got you. 
                            </p>

                            </div>
                        </div>
                        
                    </div>
                </div>
            ) 
        } else {
            return (
                <div>
                    {LoadingScreen()}
                </div>
            )
        }
    }

}


export default Splash;
