import React from 'react'

const noDates = () => (
    <>
        <div className="inner-date-specific-container">
            <div className="title-info-container">
                <h4 className="title-for-date">Sorry! No dates match that criteria yet!</h4>
                <div className="date-information-container">
                    <p className="info-for-date-title">Please try a different filter combination or try again later. </p>
                </div>
                <div className="date-information-container">
                    <p className="info-for-date-title">Thanks! </p>
                </div>

            </div>
        </div>
    </>
)

export default noDates;