import React from 'react'
import { renderModal, correctToggle } from '../../modal/modal_render';
import dateFilter from './date_filter';


const dropDownMenu = (menu, id, type = "default", currentDateList, originalDateList, checkedBox, setCheckedBox, setCurrentDateList) => {
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
                ulList(firstFourItems, type, original)
            // </div>
        )
    } else {
        // has a button that pulls up a modal which filters additionally
        return (
            <>
                <div className="date-drop-down" onClick={e => e.stopPropagation()}>
                    {ulList(firstFourItems, type, original)}
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
                                {modalUlList(menu, type)}
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

const ulList = (filters, type, menu) => (
    <ul>
        {filters.map((item, idx) => (
            <li key={`${item} - ${idx}`}>
                <input id={`${type}${idx + 1}`} type="checkbox" name={type} value={`${menu[idx]}`} />
                <label htmlFor={`${type}${idx + 1}`}>{item}</label>
            </li>
        ))}
    </ul>
)
const modalUlList = (filters, type) => (
    <ul className="ul-list">
        {filters.map((item, idx) => (
            <li key={`${item} - ${idx}`}>
                <input id={`${type}${idx + 1}`} type="checkbox" name={type} value={`${filters[idx]}`} />
                <label htmlFor={`${type}${idx + 1}`}>{item}</label>
            </li>
        ))}
    </ul>
)

export default dropDownMenu