import { type as playerTypes } from '../actions/player'

const initialState = {
  playing_id: null,
  estimatedTime: null,
  totalWords: null,
  current: 0
}

const playerReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case playerTypes.set_playing_id:
    return {
      ...state,
      playing_id: payload
    }
  case playerTypes.add_iteration:
    return {
      ...state,
      current: state.current + 1
    }
  case playerTypes.set_estimated_time:
    return {
      ...state,
      estimatedTime: payload
    }
  case playerTypes.set_total_words:
    return {
      ...state,
      totalWords: payload
    }
  case playerTypes.reset_data:
    return initialState

  default:
    return state
  }
}

export default playerReducer;