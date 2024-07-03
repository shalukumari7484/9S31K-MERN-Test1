import { configureStore } from "@reduxjs/toolkit";
import Compilerslice from "./slices/Compilerslice";

export const store=configureStore({
    reducer:{

        Compilerslice,
    }
         
})

export type RootState =ReturnType<typeof store.getState>