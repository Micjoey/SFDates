import React from 'react';
import { Link } from 'react-router-dom';


const AllDatesButton = ({match}) => (
        <div className="filter-bar">
            <div id='all-dates-button'>
                <button onClick={() => window.location.href="#/datesuggestions/"}>All Dates</button>
            </div>
        </div>

)
export default (AllDatesButton)



