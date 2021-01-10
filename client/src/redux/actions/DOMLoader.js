export const type = {
  set: "SET_LOADER_STATUS"
};

export const setDOMLoaderStatus = (status) => ({
  type: type.set,
  payload: status
});