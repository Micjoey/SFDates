import React from 'react'
import { Link } from 'react-router-dom';



function DateNumberFilter() {
    const dateNumber = ['Date #1', 'Date #2', 'Date #3', 'Date #4 or More']
    return (
        <div className="dropwdown-menu">
            {dateNumber.map((dateNumber, i) => (
                <ul className="date-number-filter" key={i}>
                    <Link to={`/datenumber/${i+1}`}>{dateNumber}</Link>
                </ul>
            ))}
        </div>
    )
}


export default (DateNumberFilter);

