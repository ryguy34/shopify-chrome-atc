import { configureStore } from "@reduxjs/toolkit";
import profileListSlice from "../reducers/profileListSlice";

export const store = configureStore({
	reducer: {
		profileList: profileListSlice,
	},
});
