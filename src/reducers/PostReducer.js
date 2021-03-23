import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload)
        case FETCH_POST:
            return {...state, [action.payload.id]: action.payload}
        case FETCH_POSTS:   
            return {...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state
    }
}