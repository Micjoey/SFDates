export const OPEN_MODAL = 'OPEN MODAL';
export const CLOSE_MODAL = 'CLOSE-MODAL';

export const openModal = (modal, idName = "") => {
    return {
        type: OPEN_MODAL,
        modal : {
            switchName: modal,
            idName
        }
    };
};


export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}