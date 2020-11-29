export const type = {
  set_list: "SET_WORDS_LIST",
  set_selected_word: "SET_SELECTED_WORD"
};

export const setWordsList = (words) => ({
  type: type.set_list,
  payload: words
});

export const setSelectedWord = (word) => ({
  type: type.set_selected_word,
  payload: word
});