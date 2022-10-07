import { configureStore } from '@reduxjs/toolkit';
import listsSlice from './listsSlice';
import tasksSlice from './tasksSlice';
import activeListSlice from './activeListSlice';

export default configureStore({
    reducer: {
        tasks: tasksSlice,
        lists: listsSlice,
        activeList: activeListSlice
    }
})