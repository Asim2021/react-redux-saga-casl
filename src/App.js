import {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux'
// import {Increment,Decrement,IncrementByValue} from './redux/actions'
import { Increment, Decrement, IncrementByValue } from './redux/features/couterSlice';
import './App.css'

function App() {
  const [value, setValue] = useState(10)
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <h1 style={{ color: 'red' }}>COUNTER APP</h1>
      <h2 style={{ color: 'blue' }}>{count}</h2>
      <br />
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <br />
      <input
        type='number'
        min={0}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <button onClick={() => dispatch(IncrementByValue(value))}>
        Add By Value
      </button>
    </div>
  )
}

export default App
