import React from 'react'
import { Link } from 'react-router-dom'
import thirdParty from './is_third_party'
import displayOneDatesInformation from './display_one_dates_information'

const IterateOverDates = ({ dates }) => {

    return(
        <>
            <div className="inner-date-specific-container">
                {Object.values(dates).map((date, key) => (
                    <div className="title-info-container" key={key} 
                        onMouseEnter={() => displayOneDatesInformation(date)} 
                        // onMouseLeave={() => ($('.one-specific-info-container').empty())}
                    >
                            <h4 className="title-for-date">{date.title}</h4>
                            <p className="info-for-date">Date Number: {date.date_number}</p>
                            <p className="info-for-date">Type: {date.date_type}</p>
                            <p className="info-for-date">Cost: {date.cost}</p>
                            <p className="info-for-date">Location: {date.location}</p>
                            {/* {thirdParty(date)} */}
                            {/* <p className="info-for-date">Description: {date.description}</p> */}
                    </div>
                ))}
            </div>
        </>
    )
}

export default IterateOverDates
