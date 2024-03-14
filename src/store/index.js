import { configureStore } from "@reduxjs/toolkit";
import miscSlice from "./slices/misc-slice";

export default configureStore({
	reducer: {
		misc: miscSlice,
	},
});
