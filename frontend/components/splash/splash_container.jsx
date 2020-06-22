import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import {retrieveDates, retrieveDate} from '../../actions/date_actions'
import Splash from './splash'
import { openModal, closeModal } from '../../actions/model_actions';



const mapStateToProps = ({ session, entities: {users, dates}}) => {
// const mapStateToProps = (state, ownProps) => {
    const userId = users.id
    const allDates = Object.values(dates)
    return {
        currentUser: userId,
        dates: allDates,
    };
};

const mapDispatchToProps = dispatch => ({
    retrieveDates: () => dispatch(retrieveDates()),
    retrieveDate: dateId => dispatch(retrieveDate(dateId)),
    openModal: (modal, divName) => dispatch(openModal(modal, divName)),
    closeModal: modal => dispatch(closeModal(modal)),
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);

