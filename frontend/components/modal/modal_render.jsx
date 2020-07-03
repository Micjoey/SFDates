import React from 'react'
import { closeModal } from '../../actions/model_actions';
import TypeModal from '../all_dates_show_page/modal_filters/type_modal';
import LocationModal from '../all_dates_show_page/modal_filters/location_model'


const renderModal = (type, id, menu, outerIdName = "dropdown-menu", innerIdName = "dropdown-menu-child", isShowing, toggleModal) => {
   if (!isShowing) return null;
    let component;
    switch (type) {
        case 'date_type':
            component = <TypeModal />;
            break;
        case 'location':
            component = <LocationModal />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" id={`${outerIdName}`} onClick={() => toggleModal(false)}>
            <div className="modal-child test-modal" id={`${innerIdName}`} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default renderModal