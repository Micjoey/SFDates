import React from 'react'



function DateNumberFilter() {
    const dateNumber = ['Date #1', 'Date #2', 'Date #3', 'Date #4 or More']
    return (
        <div className="dropwdown-menu">
            {dateNumber.map((dateNumber, i) => (
                <ul className="date-number-filter" key={i}>
                    {dateNumber}
                </ul>
            ))}
        </div>
    )
}


export default (DateNumberFilter);

