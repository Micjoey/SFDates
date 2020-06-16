import React from 'react'
import { Link } from 'react-router-dom';



function CostFilter() {
    const dateNumber = ['None', 'Low', 'Medium', 'Expensive', 'Very Expensive']
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


export default (CostFilter);

