import React from 'react';
import LoadingScreen from '../../misc/loading_screen'
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
        Promise.all([allDates]).then(() => this.setState({loaded: true, allDates: this.props.dates, totalCount: this.props.dates[0].total_count}))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.dates.length !== prevState.totalCount) {
            this.setState({totalCount: prevProps.dates.length})
        }
    }

    randomDate() {
        const randNum = Math.floor(Math.random() * this.state.totalCount)
        const randomDate = Object.values(this.state.allDates[randNum])
        const randomDateEdited = randomDate.slice(1,randomDate.length-2)

        return randomDateEdited
    }



    render() {
        let dateInfo
        if (this.state.loaded) {
            dateInfo = [`Title`, `Location`, `Date_type`, `Cost`, `Date_number`, `Description`]
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
                            {this.randomDate().map((info, idx) => (
                                <ul key={idx}>
                                    <p className="specific-date-title">{dateInfo[idx]}: </p> 
                                    <p className="specific-date-information">{info}</p>
                                </ul>
                            ))}
                        </div>
                        <div className='random-date-image'>
                            <img src="" alt="Filler"/>
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
