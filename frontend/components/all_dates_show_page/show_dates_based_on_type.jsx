import React, {useState, useEffect} from 'react';
import IterateOverDates from './iterate_over_dates'
import HeaderName from './changing_header_name';
import dateFilter from './date_filter'

export const RenderDates = ({match}) => {
    const [currentDateList, setCurrentDateList] = useState({})
    useEffect(() => {
        const fetchDates = async () => {
            const result = await fetch(`/api/datesuggestions/`)
            const body = await result.json();
            setCurrentDateList(body);
        }
        fetchDates()
    }, [checkedBox])
    const [checkedBox, setCheckedBox] = useState({
        cost: false,
        date_number: false,
        location: false,
        date_type: false
    })
    const costAmount = ['Low', 'Medium', 'Expensive', 'Very Expensive']
    const dateNumber = ['Date #1', 'Date #2', 'Date #3', 'Date #4 or More']
    return (
        <div className='background-color'>
            <div className="date-specific-header-container">
                <HeaderName/>
                <h2>{Object.keys(currentDateList).length} - Count</h2>
                <h2>{Object.values(checkedBox)} - test for setCheckedBox</h2>
            </div>
            <div className="date-specific-parent-container">
                <div className="date-specific-filter">
                    <button onClick={() => dateFilter(currentDateList, checkedBox, setCheckedBox, setCurrentDateList)}> Filter By:</button>
                    <div className="specific-filter">
                        <p>Cost: </p>
                        <div>
                            {dropDownMenu(costAmount, "cost-date-drop-down", "cost")}
                        </div>
                    </div>
                    <div className="specific-filter">
                        <p>Type: </p>
                        <div>
                            {dropDownMenu(allTypesOfDates(currentDateList),"type-date-drop-down", "date_type")}
                        </div>
                    </div>
                    <div className="specific-filter">
                        <p>Location: </p>
                        <div>
                            {dropDownMenu([],"location-date-drop-down", "location")}
                        </div>
                    </div>
                    <div className="specific-filter">
                        <p>Date Number: </p>
                        <div>
                            {dropDownMenu(dateNumber,"datenumber-date-drop-down", "date_number")}
                        </div>
                    </div>
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
}







const allTypesOfDates = (allDates) => {
    const dates = Object.values(allDates)
    const dateType = [...new Set(dates.map(date => date.date_type))]
    return dateType
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
    return (
        <div id={id} className="date-drop-down">
            <ul>
                {menu.map((item, idx) => (
                    <li key={`${item} - ${idx}`}>
                        <input id={`${type}${idx + 1}`} type="checkbox" name={type} value={`${item}`} />
                        <label for={`${type}${idx + 1}`}>{item}</label>
                    </li>
                ))}
            </ul>
        </div>
    )
}