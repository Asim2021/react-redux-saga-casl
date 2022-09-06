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
  const [color, setColor] = useState("")
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
      <h1 style={{ color: 'red' }}>FETCH USER</h1>
      <input
        type='text'
        placeholder='Enter Text Color'
        value={color}
        onChange={(e) => {
          setColor(e.target.value)
        }}
      />
      <button onClick={() => dispatch(getUsers())}>
        Fetch Users
      </button>
      <br />
      <GetUserNames users={users} color={color} />
    </div>
  )
}

export default App

const GetUserNames = ({ users,color="black"}) => {
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
