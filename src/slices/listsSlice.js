import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

const listsAdapter = createEntityAdapter()
const initialState = listsAdapter.getInitialState({entities: {0: {id: 0, listName: 'General'}}, ids: [0]})

const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList: listsAdapter.addOne,
        removeList: listsAdapter.removeOne
    }
})

export const { actions } = listsSlice
export default listsSlice.reducer