import React from 'react'



function DateNumberFilter(allDates, openModal) {
    return (
        <div>
            <div id='date-number-filter'>
                <button onClick={() => openModal('location', 'date-number-filter')}>Filler</button>
            </div>
        </div>
    )
}





export default DateNumberFilter;