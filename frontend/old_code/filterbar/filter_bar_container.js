// import { connect } from 'react-redux';
// import { openModal } from '../../actions/model_actions';
// import { retrieveDates, retrieveDate } from '../../actions/date_actions'
// import { withRouter } from 'react-router';
// import FilterBar from './filter_bar';

// const mapStateToProps = ({ entities: { dates }}) => {
//     let dateArray = Object.values(dates)
//     const dateType = [...new Set(dateArray.map(date => date.date_type))]
//     const dateLocation = [...new Set(dateArray.map(date => date.location))]
//     return {
//         dates: Object.values(dateArray),
//         uniqueDateType: dateType,
//         uniqueDateLocation: dateLocation,
//         totalCount: dateArray.length,
//     };
// };

// const mapDispatchToProps = dispatch => ({
//     openModal: (modal, idName, dates) => dispatch(openModal(modal, idName, dates)),
//     retrieveDates: () => dispatch(retrieveDates()),
//     retrieveDate: dateId => dispatch(retrieveDate(dateId))
// });

// export default withRouter(connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(FilterBar));
