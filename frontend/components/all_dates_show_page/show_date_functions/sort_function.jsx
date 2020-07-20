import React from 'react';
import dropDown from './drop_down';


const SortingOptions = ({currentDateList}) => {
    // const sortingOptions = ["Alphabetic", "Date Number", "Type", "Cost", "Location"];
    const sortingOptions = {
        "Alphabetic": "title",
        "Date Number": "date_number",
        "Type":"date_type",
        "Cost":"cost",
        "Location":"location",
    }
    const ascendingSort = true;
    return (
        <div className="dropdown-sort-menu">
            <h3 onClick={() => dropDown("dropdown-sort-menu")}>
                <i className="fa fa-angle-double-down down-arrow"></i>
                    Sort By:
                <i className="fa fa-angle-double-down down-arrow"></i>    
            </h3>
          <div id="dropdown-sort-menu">   
                {Object.keys(sortingOptions).map(option => (
                    <ul 
                        className="sort-list-item"
                        onClick={() => sortDropDown(currentDateList, ascendingSort, option, sortingOptions)}>
                            {option}
                    </ul>
                ))}
          </div>
      </div>  
    )
}

const sortDropDown = (currentDateList, ascendingSort, sort, sortingOptions) => {
    if (!currentDateList.length && !sort) return null;
    let testerHash = {}
    for (let x = 1; x < 10; x++) {
        testerHash[x] = currentDateList[x]
    }
    let resultHash = {};
    let values = Object.values(testerHash)
    values = values.sort((a,b) => {
        return a.title - b.title
    })
    // .forEach(k => {
    //     resultHash[k] = testerHash[k]
    // })
    debugger

    // 
    // keys.forEach(key => {
        //     const currentTitle = testerHash[key].title
    //     debugger
    //     resultHash[currentTitle] = key
    // })
    // debugger
    // 
    switch (sort) {
        case "Alphabetic":

        case "Date Number": 

        case "Type":
        case "Cost":
        case "Location":
    
        default:
            break;
    }
    
}

export default SortingOptions


function getSortedHash(inputHash) {
    var resultHash = {};

    var keys = Object.keys(inputHash);
    keys.sort(function (a, b) {
        return inputHash[a] - inputHash[b]
    }).forEach(function (k) {
        resultHash[k] = inputHash[k];
    });
    return resultHash;
}