import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IProfile from "../interfaces/IProfile";
import { AppDispatch, RootState } from "../store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const profileListSlice = createSlice({
	name: "profileList",
	initialState: [] as IProfile[],
	reducers: {
		addProfile: (state, action: PayloadAction<IProfile>) => {
			state.push(action.payload);
			console.log(action.payload);
		},
		deleteProfile: (state, action: PayloadAction<string>) => {
			state.filter(function (profile: IProfile) {
				return profile.id !== action.payload;
			});
		},
		editProfile: (state, action: PayloadAction<string>) => {},
	},
});

export const { addProfile, deleteProfile, editProfile } =
	profileListSlice.actions;
export const profileListSelector = (state: RootState) => state.profileList;
export default profileListSlice.reducer;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
