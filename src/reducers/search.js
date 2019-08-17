const initialState = {
  test: 'search test',
  query: ''
}

export const search = (state=initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, query: action.payload };
    default:
      return state;
  }
}
