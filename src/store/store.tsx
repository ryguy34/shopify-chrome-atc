import { configureStore } from "@reduxjs/toolkit";
import profileListSlice from "../reducers/profileListSlice";

export const store = configureStore({
	reducer: {
		profileList: profileListSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
