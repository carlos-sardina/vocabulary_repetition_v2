export const type = {
  set_playing_id: 'SET_PLAYING_ID',
  set_total_words: 'SET_TOTAL_WORDS',
  set_estimated_time: 'SET_ESTIMATED_TIME',
  add_iteration: 'ADD_ITERATION',
  reset_data: 'RESET_DATA'
}

export const setPlayingId = (id) => ({
  type: type.set_playing_id,
  payload: id
})

export const setTotalWords = (total) => ({
  type: type.set_total_words,
  payload: total
})

export const setEstimatedTime = (time) => ({
  type: type.set_estimated_time,
  payload: time
})

export const addIteration = () => ({
  type: type.add_iteration
})

export const resetPlayerData = () => ({
  type: type.reset_data
});