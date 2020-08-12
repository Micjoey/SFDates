import React from 'react'
import dateFilter from './date_filter'
const switchSearchButton = (currentDateList, originalDateList, checkedBox = false, setCheckedBox, setCurrentDateList) => {
    let checker = false;
    if (checkedBox) {
        checker = Object.values(checkedBox).some(value => value)
    }
    let button;
    if (checker) {
        button =
            <button onClick={() => dateFilter(
                currentDateList,
                originalDateList,
                checkedBox,
                setCheckedBox,
                setCurrentDateList,
            )}
                className="search-by-filter-button"
            >
                Change Filter:
            </button>
        
    } else {
        return (
            < button onClick={() => dateFilter(
                currentDateList,
                originalDateList,
                checkedBox,
                setCheckedBox,
                setCurrentDateList,
            )}
                className="search-by-filter-button"
            >
                Search By:
            </button >
        ) 
    }
    return button
}

export default switchSearchButton

    