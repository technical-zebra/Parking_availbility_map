
const initialState = 0
export default function locationReducer(prevState = initialState, action) {
  const { type, data } = action
  switch (type) {
    case 'filter':
      return data
    default:
      return prevState
  }
}

