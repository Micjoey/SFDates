import React from 'react';
import dropDown from './drop_down';


const sortingOptions = () => {
    const sortingOptions = ["Alphabetic", "Date Number", "Type", "Cost", "Location"];
    const ascendingSort = true;
    return (
      <div>
          <h3 onClick={() => dropDown(dropdown-sort-menu)}>Sort By</h3>
          <div id="dropdown-sort-menu">
                Test!
          </div>
      </div>  
    )
}

const sortDropDown = (currentDateList, originalDateList) => {
    
    if (currentDateList.length) {
        currentDateList
    }
}

export default sortingOptions