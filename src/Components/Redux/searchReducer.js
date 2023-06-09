const initialState = { lat: 0, lng: 0, label: "unknown  ..." };

export default function searchReducer(prevState = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case "search":
      return data;
    default:
      return prevState;
  }
}

