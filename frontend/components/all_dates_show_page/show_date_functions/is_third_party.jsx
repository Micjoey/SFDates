import React from 'react'

const thirdParty = (date) => {
    const dateCreator = date.creator
    const thirdParty = dateCreator === "7x7" ||
        dateCreator === "Amy Copperman/Daisy Barringer" ||
        dateCreator === "Anna Roth" ||
        dateCreator === "Daisy Barringer"
    if (thirdParty) {
        return (
            <>
                <p className="date-website-link">Creator: {dateCreator}</p>
                <p className="date-website-link">
                    Website Location:
                    {<a href={date.creator_contact} target="_blank">
                        {date.creator_contact}
                    </a>}
                </p>
            </>
        )
    } else {
        return "";
    }
}

export default thirdParty