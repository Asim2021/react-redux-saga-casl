import { INCREMENT, DECREMENT, INCREMENT_BY_VALUE } from '../constants'

export const Increment = () => {
  return {
    type:INCREMENT
  }
}
export const Decrement = () => {
  return {
    type:DECREMENT
  }
}

export const IncrementByValue = (value)=>{
  return {
    type:INCREMENT_BY_VALUE,
    data:value
  }
}