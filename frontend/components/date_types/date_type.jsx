import React from 'react';
import LoadingScreen from '../misc/loading_screen';



class DateType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            currentDateList: [],
            header: "",
            keys: [],
        }
        this.dateAlter = this.dateAlter.bind(this)
        this.headerName = this.headerName.bind(this)
        this.generateKeyNumber = this.generateKeyNumber.bind(this)
        this.renderDates = this.renderDates.bind(this)
        this.capitalize = this.capitalize.bind(this)
    }

    componentDidMount() {
        const key = Object.keys(this.props.match.params)[0]
        const value = this.props.match.params[key]
        const allDates = this.props.retrieveDates([key, value])
        Promise.all([allDates]).then(() => this.setState({ loaded: true, header: key }))
    }

    renderDates() {
        const dates = this.props.dates
        const values = Object.values(dates)
        return(
            values.map((date, i) => {
                    let values = Object.values(date)
                    values = values.slice(1, values.length-1)
                    let titles = Object.keys(date)
                    titles = titles.slice(1, titles.length-1)
                    return (
                        <div className="inner-date-specific-container" key={Math.random() * Math.random(100)}>
                            {
                                titles.map((title,idx) => {
                                    title = this.dateAlter(title)
                                    return(  
                                        <div className="title-info-container" key={`${values[idx]}`}>
                                                <p 
                                                    key={`${title}-${values[idx]}`}
                                                    className="title-for-date"
                                                >{title}: </p>
                                                <p 
                                                    key={`${values[idx]}-${title}`}
                                                    className="info-for-date"
                                                >{values[idx]}</p>
                                            </div>
                                    )
                                }
                                )
                            }
                        </div >
                    )
                }       
            )
        )
    }
    capitalize(sentence) {
        let splitter
        if (sentence.includes("_")) {
            splitter = "_"
        } else {
            splitter = " "
        }
        sentence = sentence
        .split(splitter)
        .map(word => {
                if (!word.includes("#")) {
                    return word = word[0].toUpperCase() + word.slice(1, word.length)
                } else {
                    return word = word.slice(0,1) + word[1].toUpperCase() + word.slice(2, word.length)
                }
            })
        sentence = sentence.join(" ")
        return sentence
    }
    dateAlter(ele) {
        switch (ele) {
            case "title":
                return ele = "Title"
            case "location":
                return ele = "Location"
            case "title":
                return ele = "Title"
            case "date_number":
                ele = ele.split("_").join(" #")
                return ele = this.capitalize(ele)
            case "address_location":
                return ele = this.capitalize(ele)
            case "date_type":
                return ele = this.capitalize(ele) 
            case "cost":
                return ele = this.capitalize(ele) 
            case "description":
                return ele = this.capitalize(ele) 
            default:
                break;
        }
        return ele
    }

    generateKeyNumber() {
        let random = Math.random() * Math.random()
        let checker = false
        while (!checker) {
            if (this.state.keys.includes(random)) {
                checker = false;
                random = Math.random() * Math.random() * 2000
            } else {
                this.state.keys.push(random)
                checker = true
            }
        }
        return random
    }

    headerName() {
        // this.props.generateKeyNumber()
        const key = this.state.header
        switch (key) {
            case "date_type":
                return (
                    <h1 className="date-specific-header">
                         Welcome to Date Type Suggestions!
                    </h1>
                )
            case "cost":
                return (
                    <h1 className="date-specific-header"> 
                        Welcome to date cost Suggestions!
                    </h1>
                )
            case "location":
                return (
                    <h1 className="date-specific-header"> 
                        Welcome to Location Suggestions!
                    </h1>
                )
            case "date_number":
                return (
                    <h1 className="date-specific-header"> 
                        Welcome to Date Number Suggestions!
                    </h1>
                )
            default:
                return (
                    <h1> 
                        Welcome!
                    </h1>
                )
        }
    }

    render() {
        let dates = []
        if (this.state.loaded) {
            dates = this.props.dates
            return (
                <div className='background-color'>
                    <div className="date-specific-parent-container">
                        <div className="date-specific-header-container">
                            {this.headerName()}
                        </div>
                        {/* Going to be a seperate function in time */}
                        <div className="date-specific-filter">
                            <div>
                                filter bar header
                            </div>
                            <button>
                                filter 1
                            </button>
                            <button>
                                filter 1
                            </button>
                            <button>
                                filter 1
                            </button>
                            {/* ----------------------------------- */}
                        </div>
                        <div className="date-specific-info">
                            <div className="date-specific-info-container">
                                {this.renderDates()}
                                {/* {
                                    Object.keys(dates).map((num,idx) => {
                                        return (
                                            <div className="inner-date-specific-container" key={this.generateKeyNumber()}>
                                                {Object.values(dates[num])
                                                    .slice(1,dates[num.length-2])
                                                    .map( ele => (
                                                            
                                                        )
                                                    )}
                                            </div>
                                        )
                                    })  
                                } */}
                            </div>
                            <div className="map-container">
                                <h1>
                                    <p>Map Placeholder</p>
                                </h1>
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

export default DateType
