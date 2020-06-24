import React, {useState, useEffect} from 'react';
import LoadingScreen from '../misc/loading_screen';
import IterateOverDates from './all_dates'
import HeaderName from './changing_header_name';


export const RenderDates = ({match}) => {
    const key = Object.keys(match.params)[0]
    const value = match.params[key]
    const [currentDateList, setCurrentDateList] = useState({})
    const [keyValue, setKeyValue] = useState({
        key,
        value
    })
    useEffect(() => {
        const fetchDates = async () => {
            const result = await fetch(`/api/datesuggestions/?${ key }=${ value }`)
            const body = await result.json();
            setCurrentDateList(body);
        }
        fetchDates()
    }, [key])

    return (
        <div className='background-color'>
            <div className="date-specific-parent-container">
                <div className="date-specific-header-container">
                    <HeaderName keyValue={keyValue}/>
                </div>
                <div className="date-specific-filter">
                    filter bar
                </div>
                <div className="date-specific-info">
                    <div className="date-specific-info-container">
                        <IterateOverDates dates={currentDateList} />
                    </div>
                    <div className="map-container">
                        <h1>
                            <p>Map Placeholder</p>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


