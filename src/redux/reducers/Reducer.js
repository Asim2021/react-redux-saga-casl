import { INCREMENT, DECREMENT, INCREMENT_BY_VALUE } from '../constants'

const CounterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      if (state.count !== 0) {
        return { ...state, count: state.count - 1 }
      }
      break
    case INCREMENT_BY_VALUE :
      let value = +action.data
      return {...state,count:state.count+value}
    default:
      return state
  }
}

export default CounterReducer
