// import React from 'react'
// import {Link} from 'react-router-dom'
// import { connect } from 'react-redux';
// import { retrieveDates } from '../../actions/date_actions'
// import { closeModal } from '../../actions/model_actions';


// class LocationFilter extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         let uniqueLocations = []
//         if (this.props.uniqueLocations.length > 0) {
//             uniqueLocations = this.props.uniqueLocations

//         }
//         return(
//             <div className="dropdown-menu overflow-y" >
//                 {uniqueLocations.map((dateLocation, i) => (
//                     <ul className="dropdown-menu-items dropdown-menu-items-location" key={i}>
//                         <Link 
//                             className="no-link" 
//                             to={`/datesuggestions/location_${dateLocation}`
//                                 }
//                             onClick={e => this.props.shutModal(e, this.props.closeModal)}
//                         >
//                             {dateLocation}
//                         </Link>
//                     </ul>
//                 ))}
//             </div>
//         )
//     }
// }

// const mapStateToProps = ({session, entities}) => {
//     let dates = Object.values(entities.dates)
//     const dateLocation = [...new Set(dates.map(date => date.location))]
//     return {
//         dates: dates,
//         uniqueLocations: dateLocation.sort(),
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         retrieveDates: () => dispatch(retrieveDates()),
//         closeModal: () => dispatch(closeModal())
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);