const initialState = {
  items: [],
  loading: false,
  error: null
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        loading: true,
        error: action.error
      }
    default:
      return state;
  }
}

export default postsReducer;