import React from 'react'
import { renderModal, correctToggle } from '../../modal/modal_render';
import dateFilter from './date_filter';


const dropDownMenu = (menu, id, type = "default", currentDateList, originalDateList, checkedBox, setCheckedBox, setCurrentDateList, filter, setFilter) => {
    // creates the dropdown of all the filters
    let firstFourItems = []
    let original = menu.slice('')
    if (type === "cost") {
        firstFourItems = original.map(word => {
            switch (word) {
                case "Low":
                    return "$"
                case "Medium":
                    return "$$"
                case "Expensive":
                    return "$$$"
                case "Very Expensive":
                    return "$$$$"
            }
        })
    } else {
        for (let x = 0; x < menu.length && x < 4; x++) {
            firstFourItems.push(original[x])
        }
    }

    if (menu.length < 5) {
        // if menu length is less than four then wont have an additional button to make it bigger
        return (
            // <div className="date-drop-down">
                ulList(firstFourItems, type, original, filter, setFilter)
            // </div>
        )
    } else {
        // has a button that pulls up a modal which filters additionally
        return (
            <>
                <div className="date-drop-down" onClick={e => e.stopPropagation()}>
                    {ulList(firstFourItems, type, original, filter, currentDateList, originalDateList,checkedBox,setCheckedBox,setCurrentDateList)}
                    <div className="modal-background-dropdown" id={`${id}`} onClick={() => closeDiv(id)} >
                        {/* <div className="modal-child-dropdown"> */}
                        <div className="modal-child-dropdown" onClick={e => e.stopPropagation()}>
                            <p className="close-modal-container" onClick={() => closeDiv(id)}>
                                X
                            </p>
                            <h1 className="modal-title">{type.split("_").join(" ").toUpperCase()} FILTER</h1>
                            {/* <div>
                                reset placeholder
                            </div> */}
                            <div className="modal-list">
                                {modalUlList(menu, type, currentDateList, originalDateList,checkedBox,setCheckedBox,setCurrentDateList)}
                            </div>
                            <div className="modal-filter-button-container">
                                <button 
                                    onClick={() => filterThenClose(currentDateList, originalDateList, checkedBox, setCheckedBox, setCurrentDateList, id)}
                                    className="modal-filter-button"
                                > Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const filterThenClose = (currentDateList, originalDateList, checkedBox, setCheckedBox, setCurrentDateList, id) => {
    dateFilter(currentDateList, originalDateList, checkedBox, setCheckedBox, setCurrentDateList)
    closeDiv(id)
}

const closeDiv = (idName) => {
    const currentDiv = document.getElementById(`${idName}`)
    currentDiv.style.display = "none"
}

const ulList = (filters, type, menu, filterForDates, currentDateList, originalDateList, checkedBox, setCheckedBox, setCurrentDateList) => {
    for (let x = 0; x < filters.length; x++) {
        let currentFilter = filters[x]
        filterForDates[type][currentFilter] = false
    }

    return (
        <ul>
            {filters.map((item, idx) => (
                <li key={`${item} - ${idx}`}>
                    <input 
                        id={`${type}${idx + 1}`} 
                        type="checkbox" name={type} 
                        value={`${menu[idx]}`} 
                        // onClick={() => dateFilter(currentDateList, originalDateList, checkedBox, setCheckedBox, setCurrentDateList)}
                    />
                    <label htmlFor={`${type}${idx + 1}`}>{item}</label>
                </li>
            ))}
        </ul>
    )
}
const modalUlList = (filters, type, currentDateList, originalDateList, checkedBox, setCheckedBox, setCurrentDateList) => {

    return (
        <ul className="ul-list">
            {filters.map((item, idx) => (
                <li key={`${item} - ${idx}`}>
                    <input 
                        id={`${type}${idx + 1}`} 
                        type="checkbox" 
                        name={type} 
                        value={`${filters[idx]}`} 
                        // onClick={() => dateFilter(currentDateList, originalDateList, checkedBox, setCheckedBox, setCurrentDateList)}
                    />
                    <label htmlFor={`${type}${idx + 1}`}>{item}</label>
                </li>
            ))}
        </ul>
    )
}
    


export default dropDownMenu