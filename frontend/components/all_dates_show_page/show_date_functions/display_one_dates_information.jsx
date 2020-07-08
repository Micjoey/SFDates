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
        $(`<div class="inner-date-specific-container">
                <h4 class="title-for-single-date">${date.title}</h4>
                <p class="info-for-single-date"> Date Number: ${date.date_number}</p>
                <p class="info-for-single-date">Type: ${date.date_type}</p>
                <p class="info-for-single-date">Cost: ${date.cost}</p>
                <p class="info-for-single-date">Location: ${date.location}</p>
                <p class="info-for-single-date">Description: ${date.description}</p>
                <p class="date-website-link">Creator: ${date.creator}</p>
                <p class="date-website-link">Website Location:
                    <a href=${date.creator_contact} target="_blank">
                        ${date.creator_contact}
                    </a>
                </p>
            </div>
        `).appendTo(".one-specific-info-container")
    } else {
        $(`<div class="inner-date-specific-container">
                <h4 class="title-for-single-date">${date.title}</h4>
                <p class="info-for-single-date">Date Number: ${date.date_number}</p>
                <p class="info-for-single-date">Type: ${date.date_type}</p>
                <p class="info-for-single-date">Cost: ${date.cost}</p>
                <p class="info-for-single-date">Location: ${date.location}</p>
                <p class="info-for-single-date">Description: ${date.description}</p>
            </div>
        `).appendTo(".one-specific-info-container")
    }    
}

export default displayOneDatesInformation


