import React from 'react'
import { renderModal, correctToggle } from '../modal/modal_render';


const dropDownMenu = (menu, id, type = "default", isShowing, toggleModal) => {
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
    // for clean module code
    const ulList = (filters) => (
        <ul>
            {filters.map((item, idx) => (
                <li key={`${item} - ${idx}`}>
                    <input id={`${type}${idx + 1}`} type="checkbox" name={type} value={`${menu[idx]}`} />
                    <label htmlFor={`${type}${idx + 1}`}>{item}</label>
                </li>
            ))}
        </ul>
    )
    //
    if (menu.length < 5) {
        // if menu length is less than four then wont have an additional button to make it bigger
        return (
            <div id={id} className="date-drop-down">
                {ulList(firstFourItems)}
            </div>
        )
    } else {
        // has a button that pulls up a modal which filters additionally

        return (
            <>
                <div id={id} className="date-drop-down" onClick={e => e.stopPropagation()}>
                    {ulList(firstFourItems)}
                    {renderModal(type, id, menu, undefined, undefined, isShowing, toggleModal, ulList)}
                </div>
                <button onClick={() => correctToggle(type, isShowing, toggleModal)}>See more</button>
            </>
        )
    }
}


export default dropDownMenu