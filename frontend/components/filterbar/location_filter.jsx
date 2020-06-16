import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { retrieveDates } from '../../actions/date_actions'


class LocationFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let uniqueLocations = []
        if (this.props.uniqueLocations.length > 0) {
            uniqueLocations = this.props.uniqueLocations

        }
        return(
            <div className="dropdown-menu overflow-y" >
                {uniqueLocations.map((dateLocation, i) => (
                    <ul className="dropdown-menu-items dropdown-menu-items-location" key={i}>
                        <Link className="no-link" to={`/datelocation/${dateLocation}`}>{dateLocation}</Link>
                    </ul>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({session, entities}) => {
    let uniqueLocations = entities.dates[1].unique_date_location
    return {
        uniqueLocations: uniqueLocations
    }
};

const mapDispatchToProps = dispatch => {
    return {
        retrieveDates: () => dispatch(retrieveDates()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);