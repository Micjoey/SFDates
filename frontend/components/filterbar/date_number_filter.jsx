import React from 'react'



function DateNumberFilter(allDates, openModal) {
    let uniqueDateNumbers = getUniqueDateNumbers(allDates)
    return (
        <div>
            <div id='date-number-filter'>
                <button onClick={() => openModal('location', 'date-number-filter')}>Filler</button>
            </div>
        </div>
    )
}


function getUniqueDateNumbers(allDates) {
    
}


export default DateNumberFilter;