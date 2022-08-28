# `REACT WITH REDUX TOOLKIT`

### `we keep the original state unaltered`

Remember two key points for avoiding mutations of state in Redux:

1.) use concat, slice, or the spread operator for arrays
2.) use Object.assign or object spread of objects

### `Create a Redux State Slice`

-> Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated.

-> We can export the generated Redux action creators and the reducer function for the whole slice.

-> Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.