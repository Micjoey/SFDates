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
        return (
            values.map(date => (
                <div className="inner-date-specific-container" key={this.generateKeyNumber()}>
                    <p>Title: {date.title}</p>
                    <p>Location: {date.location}</p>
                    <p>Cost: {date.cost}</p>
                    <p>Type: {date.date_type}</p>
                    <p>Description: {date.description}</p>
                </div>
            ))
        )
    }

    dateAlter(ele) {
        if (ele && ele.includes("Date")) {
            ele = ele.split(" ").join(" #")
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
