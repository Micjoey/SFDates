import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { retrieveDates} from '../../actions/date_actions'


function LocationFilter() {
    

    return (
        <div>
            <h1 className="test"> Worked #2</h1>
        </div>
    )
}

const mapStateToProps = state => {
    
};

const mapDispatchToProps = dispatch => {
    return {
        retrieveDates: () => dispatch(retrieveDates()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);