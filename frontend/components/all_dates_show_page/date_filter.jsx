
import React, { useState, useEffect } from 'react'

const dateFilter = (allDates, originalDates, checkedBoxes, setCheckedBox, setCurrentDateList, dateType = ["cost", "date_type", "date_number", "location"]) =>   { 
    const originalDatesArray = Object.values(originalDates)
    let dateList = Object.values(allDates)
    let dateListHash = {}
    let values = setValues(dateType)
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

const setFilteredDates = (values = {}, dateList) => {
    let newDateListArray = Object.values(dateList)
    let keys = Object.keys(values)
    if (keys.length) {
        newDateListArray = [];
        keys.forEach(key => {
            let toFilterParts = values[key]
            for (let x = 0; x < toFilterParts.length; x++) {
                let filterPiece = toFilterParts[x]
                if (newDateListArray.length) {
                    newDateListArray = newDateListArray.filter(date => date[key] === filterPiece)
                } else {
                    newDateListArray = dateList.filter(date => date[key] === filterPiece)
                }
            }
        })
    }

    return [...new Set(newDateListArray)]
}

export default dateFilter

