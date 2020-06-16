import React from 'react'
import { Link } from 'react-router-dom';



function DateNumberFilter() {
    const dateNumber = ['Date #1', 'Date #2', 'Date #3', 'Date #4 or More']
    return (
        <div className="dropdown-menu">
            {dateNumber.map((dateNumber, i) => (
                <ul className="dropdown-menu-items" key={i}>
                    <Link to={`/datenumber/${i+1}`} className="no-link">{dateNumber}</Link>
                </ul>
            ))}
        </div>
    )
}


export default (DateNumberFilter);

