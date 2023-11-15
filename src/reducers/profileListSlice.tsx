import { createSlice } from "@reduxjs/toolkit";

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
