import React from 'react'

const IterateOverDates = ({ dates }) => (
    <>
    <div className="inner-date-specific-container">
        {Object.values(dates).map((date, key) => (
            <div className="title-info-container" key={key}>
                <h4 className="title-for-date">Title: {date.title}</h4>
                <p className="info-for-date">Cost: {date.cost}</p>
                <p className="info-for-date">Location: {date.location}</p>
                <p className="info-for-date">Type: {date.date_type}</p>
                <p className="info-for-date">Description: {date.description}</p>
            </div>
        ))}
    </div>
    </>
)

export default IterateOverDates
