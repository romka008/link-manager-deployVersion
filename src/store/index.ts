import {combineReducers, configureStore} from '@reduxjs/toolkit'

import listGroupsReducer from './listGroupsReducer'
import listLinksReducer from './listLinksReducer'

const rootReducer = combineReducers({
    listGroups: listGroupsReducer,
    listLinks: listLinksReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
