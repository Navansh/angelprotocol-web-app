import { configureStore } from "@reduxjs/toolkit";
import { aws } from "services/aws/aws";
import userReducer from "../services/user/userSlice";
import walletReducer from "../services/wallet/walletSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    wallet: walletReducer,
    [aws.reducerPath]: aws.reducer,
    //auth: authReducer,
    //future: futureReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([aws.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;