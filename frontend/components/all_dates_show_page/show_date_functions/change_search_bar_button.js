import React from 'react'
import dateFilter from './date_filter'
const switchSearchButton = (currentDateList,originalDateList,checkedBox,setCheckedBox,setCurrentDateList) => {
    const checker = Object.values(checkedBox).every(value => value)
    if (!checker) {
        return (
            <button onClick={() => dateFilter(
                currentDateList,
                originalDateList,
                checkedBox,
                setCheckedBox,
                setCurrentDateList,
            )}
            >
                Search By:
            </button>
        )
    } else {
        return (
            <button onClick={() => dateFilter(
                currentDateList,
                originalDateList,
                checkedBox,
                setCheckedBox,
                setCurrentDateList,
            )}
            >
                Change Filter:
            </button>
        ) 
    }
}

export default switchSearchButton