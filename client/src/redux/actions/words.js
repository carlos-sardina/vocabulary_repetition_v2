export const type = {
  set_list: "SET_WORDS_LIST",
  set_selected_word: "SET_SELECTED_WORD",
  set_average_times: "SET_AVERAGE_TIMES",
  set_repeat_times: "SET_REPEAT_TIMES",
};

export const setWordsList = (words) => ({
  type: type.set_list,
  payload: words
});

export const setSelectedWord = (word) => ({
  type: type.set_selected_word,
  payload: word
});

export const setAverageTimes = (times) => ({
  type: type.set_average_times,
  payload: times
});

export const setRepeatTimes = (times) => ({
  type: type.set_repeat_times,
  payload: times
});