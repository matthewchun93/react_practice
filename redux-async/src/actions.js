import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {

  dispatch({ type: 'FETCH_POSTS_REQUEST' })

  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data })
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', error})
  }
}

// export const fetchPosts = () => async (dispatch) => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

//   console.log(response.data)

//   dispatch({ 
//     type: 'FETCH_POSTS', 
//     payload: response.data
//   })
// }

// export const fetchPosts = () => {

//   const promise = axios.get("https://jsonplaceholder.typicode.com/posts")

//   return {
//     type: 'FETCH_POSTS',
//     payload: promise
//   }
// }