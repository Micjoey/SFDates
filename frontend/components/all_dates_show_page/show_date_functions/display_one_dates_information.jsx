import React from 'react'
import { Link } from 'react-router-dom'
import thirdParty from './is_third_party'

const displayOneDatesInformation = (date) => {
    $('.one-specific-info-container').empty()
    const dateCreator = date.creator
    const thirdParty = dateCreator === "7x7" ||
        dateCreator === "Amy Copperman/Daisy Barringer" ||
        dateCreator === "Anna Roth" ||
        dateCreator === "Daisy Barringer"
        
    if (thirdParty) {
        $(`<div className="inner-date-specific-container">
                    <div className="title-info-container">
                        <h4 className="title-for-date">${date.title}</h4>
                        <p className="info-for-date">Date Number: ${date.date_number}</p>
                        <p className="info-for-date">Type: ${date.date_type}</p>
                        <p className="info-for-date">Cost: ${date.cost}</p>
                        <p className="info-for-date">Location: ${date.location}</p>
                        <p className="info-for-date">Description: ${date.description}</p>
                        <p className="date-website-link">Creator: ${date.creator}</p>
                        <p className="date-website-link">Website Location:
                            <a href=${date.creator_contact} target="_blank">
                                ${date.creator_contact}
                            </a>
                        </p>
                    </div>
            </div>
    `).appendTo(".one-specific-info-container")
    } else {
        $(`<div className="inner-date-specific-container">
                    <div className="title-info-container">
                        <h4 className="title-for-date">${date.title}</h4>
                        <p className="info-for-date">Date Number: ${date.date_number}</p>
                        <p className="info-for-date">Type: ${date.date_type}</p>
                        <p className="info-for-date">Cost: ${date.cost}</p>
                        <p className="info-for-date">Location: ${date.location}</p>
                        <p className="info-for-date">Description: ${date.description}</p>
                    </div>
            </div>
        `).appendTo(".one-specific-info-container")
    }    
}

export default displayOneDatesInformation


