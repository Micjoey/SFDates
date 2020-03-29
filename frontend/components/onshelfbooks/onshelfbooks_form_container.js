// import { connect } from 'react-redux'
// import { retrieveDate } from '../../actions/book_actions'
// import { withRouter } from 'react-router';
// import { retrieveAllUsers } from '../../actions/users_actions';
// import OnShelfBooks from './onshelfbooks_form'

// const mapStateToProps = (state, ownProps) => {
//     const book = state.entities.dates[ownProps.match.params.dateId];
//     const user = state.entities.users[state.session];
//     const allUsers = state.entities.users
//     return ({
//         book: book,
//         currentUser: user,
//         allUsers: allUsers,

//     })
// }

// const mapDispatchToProps = dispatch => ({
//     retrieveDate: dateId => dispatch(retrieveDate(dateId)),
//     retrieveAllUsers: () => dispatch(retrieveAllUsers()),
    
// })

// export default (connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(OnShelfBooks))


