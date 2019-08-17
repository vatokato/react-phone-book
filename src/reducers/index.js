import { list } from './list'
import { search } from './search'
import { combineReducers } from 'redux'

export const rootReducer=combineReducers({
  list: list,
  search: search
})