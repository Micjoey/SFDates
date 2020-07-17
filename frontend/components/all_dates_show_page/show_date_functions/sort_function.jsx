// import React from 'react';
// import dropDown from './drop_down';


// const SortingOptions = ({currentDateList}) => {
//     // const sortingOptions = ["Alphabetic", "Date Number", "Type", "Cost", "Location"];
//     const sortingOptions = {
//         "Alphabetic": "title",
//         "Date Number": "date_number",
//         "Type":"date_type",
//         "Cost":"cost",
//         "Location":"location",
//     }
//     const ascendingSort = true;
//     return (
//         <div className="dropdown-sort-menu">
//             <h3 onClick={() => dropDown("dropdown-sort-menu")}>
//                 <i className="fa fa-angle-double-down down-arrow"></i>
//                     Sort By:
//                 <i className="fa fa-angle-double-down down-arrow"></i>    
//             </h3>
//           <div id="dropdown-sort-menu">   
//                 {Object.keys(sortingOptions).map(option => (
//                     <ul 
//                         className="sort-list-item"
//                         onClick={() => sortDropDown(currentDateList, ascendingSort, option, sortingOptions)}>
//                             {option}
//                     </ul>
//                 ))}
//           </div>
//       </div>  
//     )
// }

// const sortDropDown = (currentDateList, ascendingSort, sort, sortingOptions) => {
//     if (!currentDateList.length && !sort) return null;
//     switch (sort) {
//         case "Alphabetic":
//         case "Date Number": 

//         case "Type":
//         case "Cost":
//         case "Location":
    
//         default:
//             break;
//     }
    
// }

// export default SortingOptions