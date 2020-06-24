import React, {useState, useEffect} from 'react';
import IterateOverDates from './all_dates'
import HeaderName from './changing_header_name';


export const RenderDates = ({match}) => {
    const key = Object.keys(match.params)[0]
    const value = match.params[key]
    const [currentDateList, setCurrentDateList] = useState({})
    const [keyValue, setKeyValue] = useState({
        key,
        value
    })
    const [checkedBox, setCheckedBox] = useState({
        costFilter: false,
        dateNumberFilter: false,
        locationFilter: false,
        dateTypeFilter: false
    })
    useEffect(() => {
        const fetchDates = async () => {
            const result = await fetch(`/api/datesuggestions/?${ key }=${ value }`)
            const body = await result.json();
            setCurrentDateList(body);
        }
        fetchDates()
    }, [key])

    return (
        <div className='background-color'>
            <div className="date-specific-parent-container">
                <div className="date-specific-header-container">
                    <HeaderName keyValue={keyValue}/>
                </div>
                <div className="date-specific-filter">
                    <div className="specific-filter">
                        <p>Cost: </p>
                        <p onClick={() => dropDown("cost-date-drop-down")}>Click on me</p>
                        {costAmount()}
                    </div>
                    <div className="specific-filter">
                        <p>Type: </p>
                        <p onClick={() => dropDown("type-date-drop-down")}>Click on me</p>
                        <div id="type-date-drop-down" className="date-drop-down">
                            <ul>
                                <li>
                                    <input id="c1" type="checkbox" />
                                    <label for="c1">Cost</label>
                                </li>
                            </ul>
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
        currentDiv.style.display = "flex"
    } else {
        currentDiv.style.display = "none"
    }
}

const costAmount = () => {
    const costAmount = ['None', 'Low', 'Medium', 'Expensive', 'Very Expensive']
    return (
       
            <div id="cost-date-drop-down" className="date-drop-down">
                <ul>
                    {costAmount.map((cost, idx) => (
                        <li>
                            <input id={`c${idx + 1}`} type="checkbox" />
                            <label for={`c${idx + 1}`}>{cost}</label>
                        </li>
                    ))}
                </ul>
            </div>
    )
}