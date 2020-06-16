import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { openModal } from '../../actions/model_actions';
import DateNumberFilter from './date_number_filter'




class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            allDates: [],
        }
        // this.resetAllBooks = this.resetAllBooks.bind(this)
    }


    render() {
        if (!this.props.dates) return null;
        let allDates
        (this.state.allDates.length < 1) ? allDates = this.props.dates : allDates = this.state.allDates
        return (
            <div>
                <div className='filter-bar'>
                    {DateNumberFilter(allDates, this.props.openModal)}
                </div>
            </div>
        )
    }

}


export default (FilterBar);
