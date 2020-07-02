import React, {useState, useEffect} from 'react';
import IterateOverDates from './iterate_over_dates'

import dateFilter from './date_filter'
import LoadingScreen from '../misc/loading_screen';
import { openModal } from '../../actions/model_actions';

export const RenderDates = ({match}) => {
    const [currentDateList, setCurrentDateList] = useState({}) // Current list of dates
    const [originalDateList, setOriginalDateList] = useState({}) // Main list of dates
    const [loaded, setLoaded] = useState({isLoaded: false}) // loading screen for information
    useEffect(() => {
        const fetchDates = async () => {
            const result = await fetch(`/api/datesuggestions/`)
            const body = await result.json();
            setCurrentDateList(body);
            setOriginalDateList(body)
            setLoaded({isLoaded: true})
        }
        fetchDates()
    }, [checkedBox])
    
    const [checkedBox, setCheckedBox] = useState({
        cost: false,
        date_number: false,
        location: false,
        date_type: false
    })

    if (loaded.isLoaded) {
        return (
            <div className='background-color'>
                <div className="date-specific-parent-container">
                    <div className="date-specific-filter">
                        <button onClick={() => dateFilter(currentDateList, originalDateList, checkedBox, setCheckedBox, setCurrentDateList)}> Filter By:</button>
                        <div className="specific-filter">
                            <p>Cost: </p>
                            <div>
                                {dropDownMenu(grabUniqAspectOfDate(originalDateList, "cost"), "cost-date-drop-down", "cost")}
                            </div>
                        </div>
                        <div className="specific-filter">
                            <p>Date Number: </p>
                            <div>
                                {dropDownMenu(grabUniqAspectOfDate(originalDateList, "date_number"),"datenumber-date-drop-down", "date_number")}
                            </div>
                        </div>
                        <div className="specific-filter">
                            <p>Location: </p>
                            <div className="location-filter">
                                {dropDownMenu(grabUniqAspectOfDate(originalDateList, "location"),"location-date-drop-down", "location")}
                            </div>
                        </div>
                        <div className="specific-filter">
                            <p>Location: </p>
                            <div>
                                {dropDownMenu(grabUniqAspectOfDate(originalDateList, "location"),"location-date-drop-down", "location")}
                            </div>
                        </div>
                        <button onClick={() => resetFilter(originalDateList, setCurrentDateList)}> Reset Search:</button>
                    </div>
                    <div className="date-specific-info">
                        <div className="date-specific-info-container">
                            <IterateOverDates dates={currentDateList} />
                        </div>
                        <div className="map-container">
                            <h1>
                                <p>Map Placeholder</p>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <LoadingScreen/>
        )
    }
}





const resetFilter = (originalDateList, setCurrentDateList) => {
    // resets the current search filter to the original list.
    setCurrentDateList(originalDateList)
}

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
            return dateType.sort()
        default:
            return dateType;
    }
}


const dropDown = (className) => {
    const currentDiv = document.getElementById(`${className}`)
    if (currentDiv.style.display === "none" || currentDiv.style.display === "") {
        currentDiv.style.display = "block"
    } else {
        currentDiv.style.display = "none"
    }
}

const dropDownMenu = (menu, id, type = "default") => {
    // creates the dropdown of all the filters
    let firstFourItems = []
    for (let x=0; x < 4; x++) {
        firstFourItems.push(menu[x])
    }
    if (menu.length < 5) {
        // if menu length is less than four then wont have an additional button to make it bigger
        return (
            <div id={id} className="date-drop-down">
                <ul>
                    {firstFourItems.map((item, idx) => (
                        <li key={`${item} - ${idx}`}>
                            <input id={`${type}${idx + 1}`} type="checkbox" name={type} value={`${item}`} />
                            <label for={`${type}${idx + 1}`}>{item}</label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else {
        // has a button that pulls up a modal which filters additionally
        return (
            <div id={id} className="date-drop-down">
                <ul>
                    {firstFourItems.map((item, idx) => (
                        <li key={`${item} - ${idx}`}>
                            <input id={`${type}${idx + 1}`} type="checkbox" name={type} value={`${item}`} />
                            <label for={`${type}${idx + 1}`}>{item}</label>
                        </li>
                    ))}
                </ul>
                <button onClick={(modal, idName) => openModal('date number', 'date-number-filter')}>Date Number</button>
                <button onClick={(id, menu) => openModal(id, id, menu)}>See more</button>

            </div>
        )
    }
}

// openModal('date number', 'date-number-filter', allDates)