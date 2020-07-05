import React from 'react'
import { Link } from 'react-router-dom'

const IterateOverDates = ({ dates }) => {

    return(
        <>
            <div className="inner-date-specific-container">
                {Object.values(dates).map((date, key) => (
                    <div className="title-info-container" key={key}>
                        <h4 className="title-for-date">{date.title}</h4>
                        <p className="info-for-date">Date Number: {date.date_number}</p>
                        <p className="info-for-date">Type: {date.date_type}</p>
                        <p className="info-for-date">Cost: {date.cost}</p>
                        <p className="info-for-date">Location: {date.location}</p>
                        {thirdParty(date)}
                        <p className="info-for-date">Description: {date.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default IterateOverDates


const thirdParty = (date) => {
    const dateCreator = date.creator
    const thirdParty = dateCreator === "7x7" || 
        dateCreator === "Amy Copperman/Daisy Barringer" ||
        dateCreator === "Anna Roth" ||
        dateCreator === "Daisy Barringer"
    if (thirdParty) {
        return (
            <>
                <p className="date-website-link">Creator: {dateCreator}</p>
                <p className="date-website-link">
                    Website Location:
                    {<a href={date.creator_contact} target="_blank">
                         {date.creator_contact}
                    </a>}
                </p>
            </>
        )
    } else {
        return;
    }
}