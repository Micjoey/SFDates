import React from 'react'
import TypeModal from '../all_dates_show_page/modal_filters/type_modal';
import LocationModal from '../all_dates_show_page/modal_filters/location_model'
import { closeModal } from '../../actions/model_actions';


export const renderModal = (type, id, menu, outerIdName = "dropdown-menu", innerIdName = "dropdown-menu-child", isShowing, toggleModal, ulList) => {
    
    if (isShowing[type] === false) return null;
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
            component = <LocationModal 
                            menu={menu}
                            ulList={ulList}
                            id={id}
                            type={type}
                            outerIdName={outerIdName}
                            innerIdName={innerIdName}/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" id={`${outerIdName}`} onClick={() => toggleModal(outerIdName)}>
            <div className="modal-child" id={`${innerIdName}`} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}


// export const RenderModal = ({modal, closeModal}) => {
//     if (!modal) {
//         return null;
//     }
//     // let allDates = Object.values(modal.dates);
//     let idName = modal.idName;
//     modal = modal.switchName;
//     let component;
//     let outerIdName
//     let innerIdName
//     if (modal === "sign up" || modal === "login") {
//         outerIdName = ""
//         innerIdName = ""
//     } else {
//         outerIdName = "dropdown-menu"
//         innerIdName = "dropdown-menu-child"
//     }


//     switch (modal) {
//         case 'date_type':
//             component = <TypeModal />;
//             break;
//         default:
//             return;
            
//             // This makes the page automatically fit the dropdown menu to be below the div above it
//             let left = "50%"
//             let top = "50%"
//             let elementRect
//             let right = ""
//             let bottom = ""
//             let minWidth = ""

//             if (idName) {
//                 const divElement = document.getElementById(`${idName}`)
//                 elementRect = divElement.getBoundingClientRect();
//                 left = elementRect.left
//                 top = elementRect.top
//                 right = elementRect.right
//                 bottom = elementRect.bottom
//                 minWidth = elementRect.width
//             }

//             function shutModal(e, closeModal) {
//                 e.stopPropagation()
//                 closeModal()
//             }

//             return (
//                 renderModal(component, outerIdName, innerIdName)
//             );
//     }
// }
// export const correctToggle = (className) => {
//     const currentDiv = document.getElementById(`${className}`)
//     if (currentDiv.style.display === "none" || currentDiv.style.display === "") {
//         currentDiv.style.display = "block"
//     } else {
//         currentDiv.style.display = "none"
//     }
// }

