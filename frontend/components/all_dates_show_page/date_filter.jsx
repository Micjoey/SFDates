
import React from 'react'

const dateFilter = (filteredDates, checkedBoxes, setCheckedBox, setCurrentDateList, dateType = ["cost", "date_type", "date_number", "location"]) => {
    let dateList = Object.values(filteredDates)
    let dateListHash = {}
    let values = setValues(dateType, checkedBoxes)
    checkedBoxes = changeCheckBoxes(checkedBoxes, values, setCheckedBox)
    dateList = setFilteredDates(values, dateList)
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
    let keys
    if (values) {
        keys = Object.keys(values)
        keys.forEach(key => {
            let toFilterParts = values[key]
            for (let x = 0; x < toFilterParts.length; x++) {
                let filterPiece = toFilterParts[x]
                dateList = dateList.filter(date => {
                    return (
                        date[key] === filterPiece
                        )
                    })
                }
            })
        }
    return dateList
}

export default dateFilter

// import React from 'react'

// const dateFilter = (filteredDates, checkedBoxes, setCheckedBox, dateType = ["cost", "date_type", "date_number", "location"]) => {
//     let dateList = Object.values(filteredDates)
//     let dateListHash = {}
//     let values = setValues(dateType, checkedBoxes)
//     checkedBoxes = changeCheckBoxes(checkedBoxes, Object.values(values), setCheckedBox)
//     dateList = setFilteredDates(values, checkedBoxes)
//     for (let x = 1; x <= dateList.length; x++) {
//         dateListHash[x] = dateList[x - 1]
//     }
//     return [dateListHash, checkedBoxes]
// }

// const changeCheckBoxes = (checkedBoxes, newCheckedBoxes, setCheckedBoxes) => {
//     Object.keys(newCheckedBoxes).forEach(check => {
//         checkedBoxes[check] = true
//     })
//     setCheckedBoxes(checkedBoxes)
//     return checkedBoxes;
// }

// const setValues = (dateType) => {
//     let values = {}
//     dateType.forEach(type => {
//         const checkbox = document.querySelectorAll(`input[name=${type}]:checked`)
//         console.log(checkbox, !!checkbox)
//         debugger
//         if (checkbox.length) {
//             values[type] = []
//             checkbox.forEach((checkbox) => {
//                 values[type].push(checkbox.value)
//             })
//         }
//     })
//     return values
// }

// const setFilteredDates = (values) => {
//     debugger
//     let dateList
//     let keys
//     if (values) {
//         keys = Object.keys(values)
//         keys.forEach(key => {
//             let toFilterParts = values[key]
//             for (let x = 0; x < toFilterParts.length; x++) {
//                 let filterPiece = toFilterParts[x]
//                 dateList = dateList.filter(date => {
//                     return (
//                         date[key] === filterPiece
//                     )
//                 })
//             }
//         })
//     }
//     return dateList
// }

// export default dateFilter