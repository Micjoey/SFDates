export const OPEN_MODAL = 'OPEN MODAL';
export const CLOSE_MODAL = 'CLOSE-MODAL';

export const openModal = (modal, divName = "") => {
    return {
        type: OPEN_MODAL,
        modal : {
            switchName: modal,
            divName
        }
    };
};


export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}