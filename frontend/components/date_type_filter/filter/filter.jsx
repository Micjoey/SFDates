import React, { useEffect, useState } from 'react'


export const DateFilter = ({dates}) => {
    const [checkedBox, setCheckedBox] = useState({
        costFilter: false, 
        dateNumberFilter: false,
        locationFilter: false,
        dateTypeFilter: false
    })
    const key = Object.keys(match.params)[0]
    const value = match.params[key]
    const [currentDateList, setCurrentDateList] = useState({})
    useEffect(() => {
        const fetchDates = async () => {
            const result = await fetch(`/api/datesuggestions/?${key}=${value}`)
            const body = await result.json();
            setCurrentDateList(body);
        }
        fetchDates()
    }, [key])
    debugger
}


const costFilter = (filteredDates) => {
    
}

const dateNumberFilter = (filteredDates) => {

}

const locationFilter = (filteredDates) => {

}

const dateTypeFilter = (filteredDates) => {

}
