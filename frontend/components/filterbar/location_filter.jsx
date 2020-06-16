import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { retrieveDates } from '../../actions/date_actions'


class LocationFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uniqueLocations: [],
        }
    }

    componentDidMount() {
        const uniqueLocations = this.props.uniqueLocations
        Promise.all([uniqueLocations]).then(uniqueLocations => this.setState({ uniqueLocations: uniqueLocations }))
    }

    render() {
        debugger
        return(
            <div>
                {this.state.uniqueLocations.map((dateNumber, i) => (
                    <ul className="date-number-filter" key={i}>
                        <Link to={`/datelocation/${i + 1}`}>{dateNumber}</Link>
                    </ul>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({session, entities}) => {
    const uniqueLocations = entities.dates[1].unique_date_location
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