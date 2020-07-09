import React from 'react'
import dropDownMenu from './drop_down_menu'
import dropDown from './drop_down'
const filterBar = (filter, typeOfDropDown, filterTypeDropDown, uniqList, 
                    currentDateList, originalDateList,checkedBox,
                    setCheckedBox, setCurrentDateList, filterForDate,setFiltered) => {
            
                    if (filter === "Type: " || filter === "Location: ") {
                        return (
                            <div className="specific-filter">
                                <p>{filter}</p>
                                <div className="date-type-filter">
                                    {dropDownMenu(
                                        uniqList,
                                        typeOfDropDown,
                                        filterTypeDropDown,
                                        currentDateList,
                                        originalDateList,
                                        checkedBox,
                                        setCheckedBox,
                                        setCurrentDateList,
                                        filterForDate,
                                        setFiltered)}

                                    <div
                                        onClick={() => dropDown(typeOfDropDown)}
                                        className="see-more-button"
                                    >
                                        <i className="fa fa-angle-double-down down-arrow"> </i>
                                                    See more
                                        <i className="fa fa-angle-double-down down-arrow"> </i>
                                    </div>

                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="specific-filter">
                                <p>{filter}</p>
                                <div>
                                    {dropDownMenu(uniqList, typeOfDropDown, filterTypeDropDown,
                                                currentDateList, originalDateList, checkedBox,
                                                setCheckedBox, setCurrentDateList, filterForDate,
                                                setFiltered)}
                                </div>
                            </div>
                        )
                    }
                }

export default filterBar
                