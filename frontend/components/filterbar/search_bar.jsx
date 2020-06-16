import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { openModal } from '../../actions/model_actions';




class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateSearch: '',
            dates: [],
            loaded: false,
            allDates: this.props.allDates,
        }
        this.dropDownToggle = this.dropDownToggle.bind(this)
        this.clearState = this.clearState.bind(this)
        // this.resetAllBooks = this.resetAllBooks.bind(this)
    }

    componentDidMount() {
       this.props.retrieveDates()
    }



    render() {
        return (
            <div>
                <div className='filter-bar'>
                    <div id='filter-date-bar'>
                        <button onClick={() => this.props.openModal('date number', 'filter-date-bar')}>Date Number</button>
                    </div>
                    <div id='filler'>
                        <button onClick={() => this.props.openModal('location', 'filler')}>Filler</button>
                    </div>
                </div>
            </div>
        ) 
    } 
    
}


export default (SearchBar);
