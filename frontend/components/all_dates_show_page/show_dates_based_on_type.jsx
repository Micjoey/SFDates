import React, {useState, useEffect, useReducer} from 'react';
import IterateOverDates from './show_date_functions/iterate_over_dates'
import LoadingScreen from '../misc/loading_screen';
import grabUniqAspectOfDate from './show_date_functions/grab_uniq_aspects_of_dates';
import resetFilter from './show_date_functions/reset_filter';
import thirdParty from './show_date_functions/is_third_party';
import filterBar from './show_date_functions/filter_bar';
import randomDate from '../misc/random_date';
import displayOneDatesInformation from './show_date_functions/display_one_dates_information';
import switchSearchButton from './show_date_functions/switch_search_button';
import sortingOptions from './show_date_functions/sort_function';




export const RenderDates = () => {
    const [currentDateList, setCurrentDateList] = useState({}) // Current list of dates
    const [originalDateList, setOriginalDateList] = useState({}) // Main list of dates
    const [loaded, setLoaded] = useState({isLoaded: false}) // loading screen for information
    const [filterForDate, setFiltered] = useState({
        cost: {},
        date_number: {},
        location: {},
        date_type: {}
    })


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
        const costUniqList = grabUniqAspectOfDate(originalDateList, "cost")
        const dateNumberUniqList = grabUniqAspectOfDate(originalDateList, "date_number")
        const locationUniqList = grabUniqAspectOfDate(originalDateList, "location")
        const dateTypeUniqList = grabUniqAspectOfDate(originalDateList, "date_type")

        return (
            <div className='background-color'>
                <div className="date-specific-parent-container">
                    <a className="back-button" href="#/home">Back</a>
                    <div className="date-specific-filter">
                        <h3 className="filter-by">Filter By:</h3>
                        <div className="date-specific-filter-container">
                            {filterBar("Date Number: ", "datenumber-date-drop-down", "date_number", dateNumberUniqList,
                                        currentDateList, originalDateList, checkedBox,
                                        setCheckedBox, setCurrentDateList, filterForDate, setFiltered)}
                            {filterBar("Type: ", "date-type-drop-down","date_type", dateTypeUniqList,
                                        currentDateList, originalDateList, checkedBox,
                                        setCheckedBox, setCurrentDateList, filterForDate, setFiltered)}
                            {filterBar("Cost: ", "cost-date-drop-down", "cost", costUniqList,
                                        currentDateList, originalDateList, checkedBox,
                                        setCheckedBox, setCurrentDateList, filterForDate, setFiltered)}
                            {filterBar("Location: ", "location-date-drop-down", "location", locationUniqList,
                                        currentDateList, originalDateList, checkedBox,
                                        setCheckedBox, setCurrentDateList, filterForDate, setFiltered)}
                        </div> 
                        <div className="filter-and-random-button">
                            {switchSearchButton(currentDateList,
                                originalDateList,
                                checkedBox,
                                setCheckedBox,
                                setCurrentDateList)}
                            <button onClick={() => resetFilter(originalDateList, setCurrentDateList)}> Clear Filter:</button>
                        </div>
                         
                    </div>
                    <div className="date-specific-info">
                        <div className="date-specific-info-container">
                            {sortingOptions()}
                            <IterateOverDates dates={currentDateList}/>
                        </div>
                        <div className="date-specific-info" id="one-date-container">
                            <button onClick={() => displayOneDatesInformation(randomDate(originalDateList))}>Generate Random Date</button>
                            <div className="one-specific-info-container title-info-container" id="one-date-info-container">
                                {/* <div class="title-info-container"> */}
                                    <h1 className="title-for-date">{originalDateList[1].title}</h1>
                                    <div className="date-information-container">
                                        <p className="info-for-date-title">Date Number: </p><p className="info-for-date">{originalDateList[1].date_number}</p>
                                    </div>
                                    <div className="date-information-container">
                                        <p className="info-for-date-title">Type: </p> <p className="info-for-date"> {originalDateList[1].date_type}</p>
                                    </div>
                                    <div className="date-information-container">
                                        <p className="info-for-date-title">Cost: </p><p className="info-for-date">{originalDateList[1].cost}</p>
                                    </div>
                                    <div className="date-information-container">
                                        <p className="info-for-date-title">Location: </p><p className="info-for-date">{originalDateList[1].location}</p>
                                    </div>
                                    {thirdParty(originalDateList[1])}
                                    <div className="date-information-container">
                                        <p className="info-for-date-title">Description: </p><p className="info-for-date">{originalDateList[1].description}</p>
                                    </div>
                                {/* </div> */}
                                {/* <h4 className="title-for-date">{originalDateList[1].title}</h4> */}
                            </div>
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













