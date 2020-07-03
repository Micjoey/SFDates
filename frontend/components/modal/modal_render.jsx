import React from 'react'
import TypeModal from '../all_dates_show_page/modal_filters/type_modal';
import LocationModal from '../all_dates_show_page/modal_filters/location_model'


export const renderModal = (type, id, menu, outerIdName = "dropdown-menu", innerIdName = "dropdown-menu-child", isShowing, toggleModal, ulList) => {
    
    if (isShowing[type] === false) return null;
    console.log(isShowing)
    debugger
    let component;
    switch (type) {
        case 'date_type':
            component = <TypeModal 
                            menu={menu} 
                            ulList={ulList} 
                            id={id} 
                            type={type} 
                            outerIdName={outerIdName}
                            innerIdName={innerIdName} />;
            break;
        case 'location':
            component = <LocationModal />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" id={`${outerIdName}`} onClick={() => correctToggle(type, isShowing, toggleModal)}>
            <div className="modal-child test-modal" id={`${innerIdName}`} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export const correctToggle = (type, isShowing, toggleModal) => {
    
    e.stopPropagation
}

