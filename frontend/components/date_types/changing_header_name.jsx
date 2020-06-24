import React from 'react'

const HeaderName = ({keyValue}) => {
        switch (keyValue.key) {
            case "date_type":
                return (
                    <h1 className="date-specific-header">
                        Welcome to Date Type Suggestions!
                    </h1>
                )
            case "cost":
                return (
                    <h1 className="date-specific-header">
                        Welcome to date cost Suggestions!
                    </h1>
                )
            case "location":
                return (
                    <h1 className="date-specific-header">
                        Welcome to Location Suggestions!
                    </h1>
                )
            case "date_number":
                return (
                    <h1 className="date-specific-header">
                        Welcome to Date Number Suggestions!
                    </h1>
                )
            default:
                return (
                    <h1 className="date-specific-header">
                        Welcome!
                    </h1>
                )
        }
    }


    export default HeaderName