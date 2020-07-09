import React from 'react'

const LocationModal = ({ menu, id, type = "default", ulList }) => {
    return (
        <div id={id} className="test-modal">
            {ulList(menu)}
        </div>
    )
}

export default LocationModal

// <button onClick={() => this.props.openModal('date number', 'date-number-filter', allDates)}>Date Number</button>
