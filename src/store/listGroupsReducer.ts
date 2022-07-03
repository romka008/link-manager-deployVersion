import { createSlice } from "@reduxjs/toolkit";
import { IListGroups } from "../types/types";

const listGroups = createSlice({
    name: "listGroups",
    initialState: {
        listGroups: [],
        currentGroup: 'Все закладки',
    } as IListGroups,
    reducers: {
        addGroup(state, action) {
            state.listGroups.push(action.payload)
        },
        setCurrentGroup(state, action) {
            state.currentGroup = action.payload
        }

    }
})

export default listGroups.reducer
export const { addGroup, setCurrentGroup } = listGroups.actions