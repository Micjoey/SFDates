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

    // componentDidMount() {
    //     const uniqueLocations = this.props.uniqueLocations
    //     Promise.all([uniqueLocations]).then(uniqueLocations => this.setState({ uniqueLocations: uniqueLocations }))
    // }

    render() {
        let uniqueLocations = []
        if (this.props.uniqueLocations.length > 0) {
            uniqueLocations = this.props.uniqueLocations
        }
        return(
            <div>
                {uniqueLocations.map((dateNumber, i) => (
                    <ul className="dropwdown-menu" key={i}>
                        <Link to={`/datelocation/${i + 1}`}>{dateNumber}</Link>
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