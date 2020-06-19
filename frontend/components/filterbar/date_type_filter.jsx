import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { retrieveDates } from '../../actions/date_actions'
import { closeModal } from '../../actions/model_actions';
import { uniqueDateLocation } from '../misc/date_information'


class TypeFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            allDates: [],
        }
    }
    
    componentDidMount() {
        const dates = this.props.dates
        Promise.all([dates]).then(dates => this.setState({ allDates: dates, loaded: true }))
    }
    

    render() {
        debugger
        let uniqueDateType = []
        let dates = this.state.allDates
        if (this.state.allDates) {
            uniqueDateType = this.props.uniqueLocations(dates)

        }
        return(
            <div className="dropdown-menu overflow-y" >
                {uniqueDateType.map((dateLocation, i) => (
                    <ul className="dropdown-menu-items dropdown-menu-items-location" key={i}>
                        <Link 
                            className="no-link" 
                            to={`/datesuggestions/date_type_${dateLocation}`}
                            onClick={e => this.props.shutModal(e, this.props.closeModal)}
                        >
                            {dateLocation}
                        </Link>
                                
                    </ul>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({entities}) => {
    const dates = Object.values(entities.dates)
    return {
        dates: dates
    }
};

const mapDispatchToProps = dispatch => {
    return {
        retrieveDates: () => dispatch(retrieveDates()),
        closeModal: () => dispatch(closeModal()),
        uniqueLocations: dates => dispatch(uniqueDateLocation(dates))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter);