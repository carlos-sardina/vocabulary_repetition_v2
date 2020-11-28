import { type as modalTypes } from "../actions/modals";

const initialState = {
  addEditModal: false,
  cardDetailsModal: false,
  menuModal: false
};

const modalsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case modalTypes.set:
      const currentKey = payload.modalName;
      return {
        ...state,
        [currentKey]: payload.newStatus
      }
    default:
      return state
  }
}

export default modalsReducer;