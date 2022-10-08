import { createSlice } from "@reduxjs/toolkit"


const activeListSlice = createSlice({
    name: 'activeList',
    initialState: {
        value: 'All tasks'
    },
    reducers: {
        updateActiveList(state, { payload: name }) {
            state.value = name
        }
    }
})

export const { actions } = activeListSlice
export default activeListSlice.reducer