import productsSlice from './prductsSlice';
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        products: productsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
export default store