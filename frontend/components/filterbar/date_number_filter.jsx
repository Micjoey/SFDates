import React from 'react'
import { connect } from 'react-redux';



function DateNumberFilter() {
    const dateNumber = ['Date #1', 'Date #2', 'Date #3', 'Date #4 or More']
    return (
        <div className="dropwdown-menu">
            {dateNumber.map((dateNumber, i) => (
                <ul key={i}>
                    {dateNumber}
                </ul>
            ))}
        </div>
    )
}


export default (DateNumberFilter);

