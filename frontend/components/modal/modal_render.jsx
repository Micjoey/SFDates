import React from 'react'
import { closeModal } from '../../actions/model_actions';



const renderModal = (component, outerIdName, innerIdName) => {
   
    return (
        <div className="modal-background" id={`${outerIdName}`} onClick={() => closeModal()}>
            <div className="modal-child test-modal" id={`${innerIdName}`} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default renderModal