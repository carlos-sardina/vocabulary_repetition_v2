export const type = {
  set_language: "SET_LANGUAGE",
};

export const setLanguage = (language) => ({
  type: type.set_language,
  payload: language
});