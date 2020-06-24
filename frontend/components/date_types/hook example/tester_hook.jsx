import React from 'react'

const IterateOverDates = ({ dates }) => (
    <>
        {Object.values(dates).map((date, key) => (
            <div key={key}>
                <h4>{date.title}</h4>
                <p>{date.description}</p>
            </div>
        ))}
    </>
)

export default IterateOverDates