import { createSlice } from "@reduxjs/toolkit";
import { DARK, LIGHT } from "../../helpers/keywords";

const initialState = {
	mode: DARK,
};

const miscSlice = createSlice({
	name: "misc",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			if (state.mode === LIGHT) {
				state.mode = DARK;
			} else {
				state.mode = LIGHT;
			}
		},
	},
});

export const { toggleTheme } = miscSlice.actions;
export default miscSlice.reducer;
