import React from 'react';
import LoadingScreen from '../../misc/loading_screen';



class DateType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            currentDateList: [],
        }
    }

    componentDidMount() {
        const key = Object.keys(this.props.match.params)[0]
        const value = this.props.match.params[key]
        const allDates = this.props.retrieveDates([key, value])
        Promise.all([allDates]).then(() => this.setState({ loaded: true }))
    }


    render() {
        let dates = []
        if (this.state.loaded) {
            dates = this.props.dates
            return (
                <div className='background-color'>
                   {
                        Object.keys(dates).map(num => (
                            Object.values(dates[num]).map( ele => (
                                <p className="test">{ele}</p>
                            ))
                        ))  
                   } 
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
