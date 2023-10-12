import { configureStore } from "@reduxjs/toolkit";
import reducer from '../services/reducer/reducer'

export const store =  configureStore(
    {
        reducer:{
            users:reducer
        }
    }
)