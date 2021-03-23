import posts from '../apis/posts'
import history from '../history'
import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from './types'

const API_KEY = '?key=REDUXPOSTS17821'
export const fetchPosts = () => async (dispatch) => {
    const response = await posts.get(`/posts${API_KEY}`)

    dispatch({ type: FETCH_POSTS, payload: response.data })
}

export const createPost = (values) => async (dispatch) => {
    const response = await posts.post(`/posts${API_KEY}`, values)

    dispatch({ type: CREATE_POST, payload: response.data })
    history.push('/')
}


export const fetchPost = (id) => async (dispatch) => {
    const response = await posts.get(`/posts/${id}/${API_KEY}`)

    dispatch({ type: FETCH_POST, payload: response.data })
}

export const deletePost = (id) => async (dispatch) => {
    const response = await posts.delete(`/posts/${id}/${API_KEY}`)
    dispatch({ type: DELETE_POST, payload: id })

    history.push('/')
}