import React from 'react';
import LoadingScreen from '../misc/loading_screen';



class DateType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            currentDateList: [],
            header: "",
        }
        this.dateAlter = this.dateAlter.bind(this)
        this.headerName = this.headerName.bind(this)
    }

    componentDidMount() {
        const key = Object.keys(this.props.match.params)[0]
        const value = this.props.match.params[key]
        const allDates = this.props.retrieveDates([key, value])
        Promise.all([allDates]).then(() => this.setState({ loaded: true, header: key }))
    }

    dateAlter(ele) {
        if (ele && ele.includes("Date")) {
            ele = ele.split(" ").join(" #")
        }
        return ele
    }

    headerName() {
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
                                {
                                    Object.keys(dates).map(num => (
                                        Object.values(dates[num])
                                            .slice(1,dates[num.length-2])
                                            .map( ele => (
                                                <p className="date-specific">{this.dateAlter(ele)}</p>
                                            )
                                        )
                                    ))  
                                }
                            </div>
                            <div>
                                <h1>
                                    Map Placeholder
                                </h1>
                            </div>
                        </div>
                    {/* {
                            Object.keys(dates).map(num => (
                                Object.values(dates[num]).map( ele => (
                                    <p className="date-specific">{ele}</p>
                                ))
                            ))  
                    }  */}
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
