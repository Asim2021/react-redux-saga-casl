import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Increment,
  Decrement,
  IncrementByValue,
} from './redux/features/couterSlice'
import { getUsers } from './redux/features/userSlice'
import './App.css'

function App() {
  const [value, setValue] = useState(10)
  const count = useSelector((state) => state.counter.count)
  const users = useSelector((state) => state.users.users)
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
      <br />
      <button onClick={() => dispatch(getUsers())}>Get Users Name</button>
      <br />
      <GetUserNames users={users} color="blue" />
    </div>
  )
}

export default App

const GetUserNames = ({ users,color}) => {
  return (
    <div style={{color:color,margin:"20px"}}>
      {users?.length
        ? users?.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })
        : ''}
    </div>
  )
}
