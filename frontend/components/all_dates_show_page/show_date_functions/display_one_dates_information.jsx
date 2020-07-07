import React from 'react'
import { Link } from 'react-router-dom'
import thirdParty from './is_third_party'

const displayOneDatesInformation = (date) => {

    // debugger
    $(`<div className="inner-date-specific-container">
                    <div className="title-info-container">
                        <h4 className="title-for-date">${date.title}</h4>
                        <p className="info-for-date">Date Number: ${date.date_number}</p>
                        <p className="info-for-date">Type: ${date.date_type}</p>
                        <p className="info-for-date">Cost: ${date.cost}</p>
                        <p className="info-for-date">Location: ${date.location}</p>
                        ${thirdParty(date)}
                        <p className="info-for-date">Description: ${date.description}</p>
                    </div>
            </div>
    `).appendTo(".one-specific-info-container")
}

export default displayOneDatesInformation


