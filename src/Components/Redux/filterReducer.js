
const initialState = { rackType: 'All', rackCount: 0, shelterIndicator: 'Y' }

export default function locationReducer(prevState = initialState, action) {
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

