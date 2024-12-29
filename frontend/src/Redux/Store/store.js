import { configureStore } from '@reduxjs/toolkit';
import ContactReducer from '../Reducers/ContactReducer.js';

export const store = configureStore({
    reducer: {
        contact: ContactReducer,
    },
});