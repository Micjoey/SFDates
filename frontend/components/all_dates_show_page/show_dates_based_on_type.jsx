import React, {useState, useEffect} from 'react';
import IterateOverDates from './iterate_over_dates'
import HeaderName from './changing_header_name';
import dateFilter from './date_filter'
import LoadingScreen from '../misc/loading_screen';

export const RenderDates = ({match}) => {
    const [currentDateList, setCurrentDateList] = useState({})
    const [originalDateList, setOriginalDateList] = useState({})
    const [loaded, setLoaded] = useState({isLoaded: false})
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
                <div className="date-specific-header-container">
                    <HeaderName/>
                </div>
                <div className="date-specific-parent-container">
                    <div className="date-specific-filter">
                        <button onClick={() => dateFilter(originalDateList, checkedBox, setCheckedBox, setCurrentDateList)}> Filter By:</button>
                        <button onClick={() => resetFilter(originalDateList, setCurrentDateList)}> Reset Search:</button>
                        <div className="specific-filter">
                            <p>Cost: </p>
                            <div>
                                {dropDownMenu(grabUniqAspectOfDate(originalDateList, "cost"), "cost-date-drop-down", "cost")}
                            </div>
                        </div>
                        <div className="specific-filter">
                            <p>Type: </p>
                            <div>
                                {dropDownMenu(grabUniqAspectOfDate(originalDateList, "date_type"),"type-date-drop-down", "date_type")}
                            </div>
                        </div>
                        <div className="specific-filter">
                            <p>Location: </p>
                            <div>
                                {/* {dropDownMenu(grabUniqAspectOfDate(originalDateList, "location"),"location-date-drop-down", "location")} */}
                            </div>
                        </div>
                        <div className="specific-filter">
                            <p>Date Number: </p>
                            <div>
                                {dropDownMenu(grabUniqAspectOfDate(originalDateList, "date_number"),"datenumber-date-drop-down", "date_number")}
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
    } else {
        return (
            <LoadingScreen/>
        )
    }
}





const resetFilter = (originalDateList, setCurrentDateList) => {
    setCurrentDateList(originalDateList)
}

const grabUniqAspectOfDate = (allDates, uniqAspect) => {
    const dates = Object.values(allDates)
    const dateType = [...new Set(dates.map(date => date[uniqAspect]))]
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