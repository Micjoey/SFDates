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
                <div class="date-information-container">
                    <p class="info-for-date-title">Date Number: </p><p class="info-for-date">${date.date_number}</p>
                </div>
                <div class="date-information-container">
                    <p class="info-for-date-title">Type: </p> <p class="info-for-date"> ${date.date_type}</p>
                </div>
                <div class="date-information-container">
                    <p class="info-for-date-title">Cost: </p><p class="info-for-date">${date.cost}</p>
                </div>
                <div class="date-information-container">
                    <p class="info-for-date-title">Location: </p><p class="info-for-date">${date.location}</p>
                </div>
                <div class="date-information-container">
                    <p class="info-for-date-title">Description: </p><p class="info-for-date">${date.description}</p>
                </div>
                <div class="date-information-container">
                    <p class="info-for-date-title">Creator: </p><p class="info-for-date">${date.creator}</p>
                </div>
                <div class="date-information-container">
                    <p class="info-for-date-title">Website: </p><p class="info-for-date"><a href=${date.creator_contact} target="_blank">
                        ${date.creator_contact}
                    </a></p>
                </div>
            </div>
        `).appendTo(".one-specific-info-container")
    } else {
        $(`<div class="inner-date-specific-container">
                <h4 class="title-for-single-date">${date.title}</h4>
                <div class="date-information-container">
                    <p class="info-for-date-title">Date Number: </p><p class="info-for-date">${date.date_number}</p>
                </div>
                <div class="date-information-container">
                    <p class="info-for-date-title">Type: </p> <p class="info-for-date"> ${date.date_type}</p>
                </div>
                <div class="date-information-container">
                    <p class="info-for-date-title">Cost: </p><p class="info-for-date">${date.cost}</p>
                </div>
                <div class="date-information-container">
                    <p class="info-for-date-title">Location: </p><p class="info-for-date">${date.location}</p>
                </div>
                <div class="date-information-container">
                    <p class="info-for-date-title">Description: </p><p class="info-for-date">${date.description}</p>
                </div>
            </div>
        `).appendTo(".one-specific-info-container")
    }    
}

export default displayOneDatesInformation


    // < h4 className = "title-for-date" > { date.title }</h4 >
        