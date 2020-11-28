export const type = {
  set: "SET_MODAL_STATUS"
};

export const setModalStatus = (modalName, newStatus) => ({
  type: type.set,
  payload: {
    modalName,
    newStatus
  }
});