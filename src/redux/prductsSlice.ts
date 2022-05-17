import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (params) => {
        const url = `http://localhost:3000/products`
        const data = await axios.get(url, {params})
            .then(res => {
                return res.data
            })
            .catch(error => console.log(error));
        return data
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        params: {},
        products: [],
        productsAll: [],
        status: null
    },
    reducers: {
        getProductChange: (state, action) => {
            state.products = action.payload
        }
    }
})

export
    const 
    { 
        getProductChange
    } = productsSlice.actions

export default productsSlice.reducer