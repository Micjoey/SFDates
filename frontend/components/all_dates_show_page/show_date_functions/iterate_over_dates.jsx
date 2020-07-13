import React from 'react'
import displayOneDatesInformation from './display_one_dates_information'
import noDates from './no_dates'

const IterateOverDates = ({ dates }) => {
    let dateArray = Object.values(dates)
    if (dateArray.length) {
        return (
            <>
                <div className="inner-date-specific-container">
                    {dateArray.map((date, key) => (
                        <div className="title-info-container" key={key}
                            onMouseEnter={() => displayOneDatesInformation(date)}
                        // onMouseLeave={() => ($('.one-specific-info-container').empty())}
                        >
                            <h4 className="title-for-date">{date.title}</h4>
                            <div className="date-information-container">
                                <p className="info-for-date-title">Date Number: </p><p className="info-for-date">{date.date_number}</p>
                            </div>
                            <div className="date-information-container">
                                <p className="info-for-date-title">Type: </p> <p className="info-for-date"> {date.date_type}</p>
                            </div>
                            <div className="date-information-container">
                                <p className="info-for-date-title">Cost: </p><p className="info-for-date">{date.cost}</p>
                            </div>
                            <div className="date-information-container">
                                <p className="info-for-date-title">Location: </p><p className="info-for-date">{date.location}</p>
                            </div>
                            {/* {thirdParty(date)} */}
                            {/* <p className="info-for-date">Description: {date.description}</p> */}
                        </div>
                    ))}
                </div>
            </>
        )
    } else {
        return (
            noDates()
        )
    }
    
}

export default IterateOverDates
