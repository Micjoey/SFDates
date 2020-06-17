import React from 'react';
import LoadingScreen from '../../misc/loading_screen';



class DateType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
        }
    }

    componentDidMount() {
        // const dateMount = this.props.retrieveDate(this.props.match.params.dateNumber)
        const allDates = this.props.retrieveDates()
        Promise.all([allDates]).then(() => this.setState({ loaded: true }))
    }

    render() {
        if (this.state.loaded) {
            return (
                <div className='background-color'>
                    <p>Test</p>
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
