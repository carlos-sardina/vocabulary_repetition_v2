import { type as loaderTypes } from "../actions/DOMLoader";

const initialState = {
  isModalVisible: true
};

const loaderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loaderTypes.set:
      return {
        isModalVisible: payload
      }
    default:
      return state
  }
}

export default loaderReducer;