import React from 'react';
import LoadingScreen from '../../misc/loading_screen';



class DateType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            currentDateList: [],
        }
        this.getProperKey = this.getProperKey.bind(this)
        this.getProperValue = this.getProperValue.bind(this)
    }

    componentDidMount() {
        // const dateMount = this.props.retrieveDate(this.props.match.params.dateNumber)
        let key = Object.keys(this.props.match.params)[0]
        debugger
        const value = this.props.match.params[key]
        const allDates = this.props.retrieveDates([key, value])
        Promise.all([allDates]).then(() => this.setState({ loaded: true }))
    }

    // clean up the above function with the bottom two

    getProperValue() {
        const params = this.props.match.params
        const key = this.getProperKey(params)
        let value = [];
        if (params[key]) {
            value = params[key]
        } 
        return value
    }

    getProperKey(params) {
        let keys = Object.keys(params)
        const firstKey = keys[0]
        return firstKey
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
