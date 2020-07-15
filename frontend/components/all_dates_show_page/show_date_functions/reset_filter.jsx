import React from 'react'  
import switchSearchButton from './switch_search_button'

const resetFilter = (originalDateList, setCurrentDateList) => {
    // resets the current search filter to the original list.
    setCurrentDateList(originalDateList)
    let dateType = ["cost", "date_type", "date_number", "location"]
    dateType.forEach(type => {
        const checkbox = document.querySelectorAll(`input[name=${type}]:checked`)
        if (checkbox.length > 0) {
            checkbox.forEach((checkbox) => {
                checkbox.checked = false
            })
        }
    })
    document.getElementsByClassName("search-by-filter-button")[0].innerHTML = "Search By:"
}

export default resetFilter