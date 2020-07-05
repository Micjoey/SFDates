import React from 'react'


const grabUniqAspectOfDate = (allDates, uniqAspect) => {
    // Grabs all date information and then grabs unique data
    const dates = Object.values(allDates)
    const dateType = [...new Set(dates.map(date => date[uniqAspect]))]
    // Sorts the data based off of what type of data it is
    switch (uniqAspect) {
        case "date_type":
            return dateType.sort()
        case "location":
            return dateType.sort()
        case "cost":
            return dateType.sort((a, b) => a.length - b.length);
        case "date_number":
            return dateType.sort((a, b) => a.length - b.length);
        default:
            return dateType;
    }
}

export default grabUniqAspectOfDate