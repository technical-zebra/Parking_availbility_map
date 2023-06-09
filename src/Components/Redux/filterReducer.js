
const initialState = 'clear'

export default function filterReducer(prevState = initialState, action) {
  const { type, data } = action

  switch (type) {
    case 'filter':
      return data
    case 'clear':
      return data
    default:
      return prevState
  }
}

