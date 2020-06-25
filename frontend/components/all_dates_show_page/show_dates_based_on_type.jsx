import React, {useState, useEffect} from 'react';
import IterateOverDates from './all_dates'
import HeaderName from './changing_header_name';


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
        costFilter: false,
        dateNumberFilter: false,
        locationFilter: false,
        dateTypeFilter: false
    })
    const costAmount = ['None', 'Low', 'Medium', 'Expensive', 'Very Expensive']
    
    
    return (
        <div className='background-color'>
            <div className="date-specific-header-container">
                <HeaderName/>
            </div>
            <div className="date-specific-parent-container">
                <div className="date-specific-filter">
                    <div className="specific-filter">
                        <p>Cost: </p>
                        {/* <p 
                            onClick={() => dropDown("cost-date-drop-down")}
                            className="click-me"
                        >Click on me</p> */}
                        <div>
                            {dropDownMenu(costAmount, "cost-date-drop-down")}
                        </div>
                    </div>
                    <div className="specific-filter">
                        <p>Type: </p>
                        {/* <p 
                            onClick={() => dropDown("type-date-drop-down")}
                            className="click-me"
                        >Click on me</p> */}
                        <div>
                            {dropDownMenu(allTypesOfDates(currentDateList),"type-date-drop-down")}
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


const costFilter = (filteredDates) => {

}

const dateNumberFilter = (filteredDates) => {

}

const locationFilter = (filteredDates) => {

}

const dateTypeFilter = (filteredDates) => {

}

const dropDown = (className) => {
    const currentDiv = document.getElementById(`${className}`)
    if (currentDiv.style.display === "none" || currentDiv.style.display === "") {
        currentDiv.style.display = "block"
    } else {
        currentDiv.style.display = "none"
    }
}

const dropDownMenu = (menu, id) => {
    if (menu.length > 5) {
        return (
            <div id={id} className="date-drop-down">
                <select>
                    {menu.map((item, idx) => (
                        <option value={item} key={`${item}-${idx}`}> {item} </option>
                    ))}
                </select>
            </div>
        )
    } else {
        return (
           
                <div id={id} className="date-drop-down">
                    <ul>
                        {menu.map((item, idx) => (
                            <li key={`${item} - ${idx}`}>
                                <input id={`c${idx + 1}`} type="checkbox" />
                                <label for={`c${idx + 1}`}>{item}</label>
                            </li>
                        ))}
                    </ul>
                </div>
        )
    }
}

const allTypesOfDates = (allDates) => {
    const dates = Object.values(allDates)
    const dateType = [...new Set(dates.map(date => date.date_type))]
    // console.log(dateType)
    return dateType
}