import React, { useState } from 'react';
import LoadingScreen from '../misc/loading_screen'
import { Link } from 'react-router-dom';
import FilterBarContainer from '../filterbar/filter_bar_container';




class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            totalCount: 0,
            randomDate: 0,
            allDates: null,
        }
        this.randomDate = this.randomDate.bind(this)
        this.toggleDisplay = this.toggleDisplay.bind(this)
    }

    componentDidMount() {
        const allDates = this.props.retrieveDates()
        Promise.all([allDates])
            .then(() => this.setState({loaded: true, allDates: this.props.dates, totalCount: this.props.dates.length}))
        
    }

    toggleDisplay(div) {
        div = div[0]
        const outerDiv = document.getElementsByClassName("random-date-box")[0]
        if (div && div.style.display === '') {
            div.style.display = "block"
            outerDiv.style = "background-color: darkkhaki;"
        } else {
            div.style.display = ''
            outerDiv.style = "background-color: null;"
        } 
    }

    randomDate() {
        let randNum = Math.floor(Math.random() * this.state.totalCount)
        let randomDate = Object.values(this.state.allDates[randNum])
        const randomDateEdited = randomDate.slice(1,randomDate.length-1)
        randomDateEdited[0].toUpperCase();
        return randomDateEdited
    }



    render() {
        let dateInfo
        let toggleDiv
        if (this.state.loaded) {
            dateInfo = [`Title`, `Location`, `Address`, `Date Number`, `Date Type`, `Cost`,  `Description`]
            toggleDiv = document.getElementsByClassName("random-date-information")
            return (
                <div className='splash-page'>
                    <div className='background-img'>
                        <FilterBarContainer />
                    </div>
                    {/* random date box */}
                    {/* random date box */}
                    <div className="website-info">
                        <div className="website-info-text">
                            <p className="website-info-greeting">
                                Welcome to the SF Dates!
                            </p>
                            <div>
                                <p className="website-info-paragraph">
                                    I stumbled upon the idea of creating a website that suggests dates when I was trying to figure out date ideas in San Francisco. As I am sure you would have done in the same situation as myself - I went to the best two resources I had: Google and my friends. 

                                    Per usual, when searching over the web, there were ideas, but not necessarily the options I wanted. I was hoping to find something that was in between me and my date and also unique. My friends made great suggestions, but once again, I wasn't sure. 

                                    I wanted something to suggest to me a date idea based on what date I am on and a convenient location for both parties. 

                                    So I created this website. 

                                    I hope that this website will allow people in the Bay Area to find date ideas with relative ease. You are on a second date and need ideas in the Richmond district; {<Link to="">we got you</Link>}. Want to go on a hike; we got you. Been dating awhile and want to go on a random date, we got you. 
                                </p>
                            </div>
                        </div>
                        <br>
                        </br>
                        <div className='random-date-box'>
                            <button
                                onClick={() => this.toggleDisplay(toggleDiv)}
                                className="random-date-button"
                            >
                                Random Date
                            </button>
                          
                                <div className='random-date-information'>
                                    {this.randomDate().map((info, idx) => (
                                        <ul key={idx} id="random-date">
                                            <p className="specific-date-title"> {dateInfo[idx]}: </p>
                                            <p className="specific-date-information"> {info}</p>
                                        </ul>
                                    ))}
                                </div>

                          
                            {/* <div className='random-date-image'>
                            <img src="" alt="Filler"/>
                        </div> */}
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
