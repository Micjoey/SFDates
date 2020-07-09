import React, {useState, useEffect, useReducer} from 'react';
import IterateOverDates from './show_date_functions/iterate_over_dates'
import dateFilter from './show_date_functions/date_filter'
import LoadingScreen from '../misc/loading_screen';
import { openModal, closeModal } from '../../actions/model_actions';
import grabUniqAspectOfDate from './show_date_functions/grab_uniq_aspects_of_dates';
import dropDownMenu from './show_date_functions/drop_down_menu';
import resetFilter from './show_date_functions/reset_filter';
import thirdParty from './show_date_functions/is_third_party';



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
                    <div className="date-specific-filter">
                        <button onClick={() => dateFilter(
                            currentDateList, 
                            originalDateList, 
                            checkedBox, 
                            setCheckedBox, 
                            setCurrentDateList,
                            )}
                        > 
                            Filter By:
                        </button>
                        <div className="date-specific-filter-container">
                            <div className="specific-filter">
                                <p>Type: </p>
                                <div className="date-type-filter">
                                    {dropDownMenu(
                                        dateTypeUniqList,
                                         "date-type-drop-down",
                                        "date_type",
                                        currentDateList, 
                                        originalDateList, 
                                        checkedBox, 
                                        setCheckedBox, 
                                        setCurrentDateList,
                                        filterForDate,
                                        setFiltered)}
                                    
                                    <div
                                        onClick={() => dropDown("date-type-drop-down")}
                                        className="see-more-button"
                                    >
                                        <i className="fa fa-angle-double-down down-arrow"> </i>
                                            See more
                                        <i className="fa fa-angle-double-down down-arrow"> </i>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="specific-filter">
                                <p>Date Number: </p>
                                <div>
                                    {dropDownMenu(dateNumberUniqList, "datenumber-date-drop-down", "date_number", 
                                        currentDateList,
                                        originalDateList,
                                        checkedBox,
                                        setCheckedBox,
                                        setCurrentDateList,
                                        filterForDate,
                                        setFiltered)}
                                </div>
                            </div>
                            <div className="specific-filter">
                                <p>Cost: </p>
                                <div>
                                    {dropDownMenu(costUniqList, "cost-date-drop-down", "cost", 
                                        currentDateList,
                                        originalDateList,
                                        checkedBox,
                                        setCheckedBox,
                                        setCurrentDateList,
                                        filterForDate,
                                        setFiltered)}
                                </div>
                            </div>
                            <div className="specific-filter">
                                <p>Location: </p>
                                <div className="location-filter">
                                    {dropDownMenu(locationUniqList, "location-date-drop-down", "location", 
                                        currentDateList,
                                        originalDateList,
                                        checkedBox,
                                        setCheckedBox,
                                        setCurrentDateList,
                                        filterForDate,
                                        setFiltered)}
                                    <div
                                        onClick={() => dropDown("location-date-drop-down")}
                                        className="see-more-button"
                                    >
                                        <i className="fa fa-angle-double-down down-arrow"> </i>
                                            See more
                                        <i className="fa fa-angle-double-down down-arrow"> </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => resetFilter(originalDateList, setCurrentDateList)}> Reset Search:</button>
                    </div>
                    <div className="date-specific-info">
                        <div className="date-specific-info-container">
                            <IterateOverDates dates={currentDateList} />
                        </div>
                        <div className="date-specific-info" id="one-date-container">
                            <div className="one-specific-info-container title-info-container" id="one-date-info-container">
                                {/* <div class="title-info-container"> */}
                                    <h4 className="title-for-single-date">{originalDateList[1].title}</h4>
                                    <p className="info-for-single-date">Date Number: {originalDateList[1].date_number}</p>
                                    <p className="info-for-single-date">Type: {originalDateList[1].date_type}</p>
                                    <p className="info-for-single-date">Cost: {originalDateList[1].cost}</p>
                                    <p className="info-for-single-date">Location: {originalDateList[1].location}</p>
                                    {thirdParty(originalDateList[1])}
                                    <p className="info-for-single-date">Description: {originalDateList[1].description}</p>  
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









const dropDown = (idName) => {
    const currentDiv = document.getElementById(`${idName}`)
    if (currentDiv.style.display === "none" || currentDiv.style.display === "") {
        currentDiv.style.display = "block"
    } else {
        currentDiv.style.display = "none"
    }
}



