import { createSlice } from "@reduxjs/toolkit";
import IProfile from "../interfaces/IProfile";

const profileListSlice = createSlice({
	name: "profileList",
	initialState: [{}],
	reducers: {
		profileAdded: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(profileName): any {
				return {
					payload: {
						profileName,
					},
				};
			},
		},
	},
});

export const { profileAdded } = profileListSlice.actions;
export const selectAllProfiles = (state: any) => state.profileList;
export default profileListSlice.reducer;
