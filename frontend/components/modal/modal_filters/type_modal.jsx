import React from 'react'

const TypeModal = ({ menu, id, type = "default", ulList}) => {
    return (
        <div id={id} className="test-modal">
            {ulList(menu)}
        </div>
    )
}

export default TypeModal

