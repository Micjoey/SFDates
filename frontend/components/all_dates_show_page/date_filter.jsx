
import React from 'react'

const dateFilter = (allDates, checkedBoxes, setCheckedBox, setCurrentDateList, dateType = ["cost", "date_type", "date_number", "location"]) => {
    const originalDates = allDates
    const originalDatesArray = Object.values(originalDates)
    let dateList = Object.values(allDates)
    let dateListHash = {}
    let values = setValues(dateType, checkedBoxes)
    checkedBoxes = changeCheckBoxes(checkedBoxes, values, setCheckedBox)
    dateList = setFilteredDates(values, originalDatesArray)
    for (let x = 1; x <= dateList.length; x++) {
        dateListHash[x] = dateList[x - 1]
    }
    setCurrentDateList(dateListHash)
}

const changeCheckBoxes = (checkedBoxes, newCheckedBoxes, setCheckedBoxes) => {
    Object.keys(newCheckedBoxes).forEach(check => {
        checkedBoxes[check] = true
    })
    setCheckedBoxes(checkedBoxes)
    return checkedBoxes;
}

const setValues = (dateType) => {
    let values = {}
    dateType.forEach(type => {
        const checkbox = document.querySelectorAll(`input[name=${type}]:checked`)
        if (checkbox.length > 0) {
            values[type] = []
            checkbox.forEach((checkbox) => {
                values[type].push(checkbox.value)
            })
        }
    })
    return values
}

const setFilteredDates = (values, dateList) => {
    let newDateList = dateList
    let keys
    if (values) {
        keys = Object.keys(values)
        keys.forEach(key => {
            let toFilterParts = values[key]
            for (let x = 0; x < toFilterParts.length; x++) {
                let filterPiece = toFilterParts[x]
                newDateList = newDateList.filter(date => {
                    return (
                        date[key] === filterPiece
                        )
                    })
                }
            })
        }
    return newDateList
}

export default dateFilter

