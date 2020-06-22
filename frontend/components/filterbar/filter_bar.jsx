import React from 'react';





class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            allDates: [],
        }
        // this.resetAllBooks = this.resetAllBooks.bind(this)
    }

    componentDidMount() {
        const dates = this.props.dates
        Promise.all([dates]).then(dates => this.setState({allDates: dates, loaded: true}))
    }


    render() {
        if (!this.props.dates) return null;
        let allDates = Object.values(this.props.dates)
        return (
            <div className="filter-bar">
                <div id='date-number-filter'>
                    <button onClick={() => this.props.openModal('date number', 'date-number-filter', allDates)}>Date Number</button>
                </div>
                <div id='date-location-filter'>
                    <button onClick={() => this.props.openModal('location', 'date-location-filter', allDates)}>Date Location</button>
                </div>
                <div id='date-cost-filter'>
                    <button onClick={() => this.props.openModal('cost', 'date-cost-filter', allDates)}>Date Cost</button>
                </div>
                <div id='date-type-filter'>
                    <button onClick={() => this.props.openModal('type', 'date-type-filter', allDates)}>Date Type</button>
                </div>
            </div>
        )
    }

}


export default (FilterBar);
