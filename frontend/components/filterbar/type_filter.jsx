import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { retrieveDates } from '../../actions/date_actions'


class TypeFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let uniqueDateType = []
        if (this.props.uniqueDateType.length > 0) {
            uniqueDateType = this.props.uniqueDateType

        }
        return(
            <div className="dropdown-menu overflow-y" >
                {uniqueDateType.map((dateLocation, i) => (
                    <ul className="dropdown-menu-items dropdown-menu-items-location" key={i}>
                        <Link className="no-link" to={`/datelocation/${dateLocation.split(' ').join('')}`}>{dateLocation}</Link>
                    </ul>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({entities}) => {
    let uniqueDateType = entities.dates[1].unique_date_type
    return {
        uniqueDateType: uniqueDateType
    }
};

const mapDispatchToProps = dispatch => {
    return {
        retrieveDates: () => dispatch(retrieveDates()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter);