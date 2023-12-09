import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_KEY = "authState";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: false,
		/* 
			userData should either be null or should be an object containing:
			- userId of the logged in user
			- user's email
			- user's name (first and last)
			so it should look like this:
			userData: {
				userId: "the user's id",
				email: "the user's email",
				firstName: "fname",
				lastName: "lname"
			}
		*/
		userData: null,
		/* 
      authState should only ever have 3 string values:
      - "fetching" | "loading" | "idle"
      - "fetching" indicates that the app has just loaded and the auth state is being fetched from the localStorage
      - "loading" should be used when the user clicks on the "Log in" or "Sign up" button
      - "idle" should be the final state after all the auth operations have completed
    */
		authState: "fetching", // "fetching" or "loading" or "idle"
		token: null, // either null or the token string
	},
	reducers: {
		login(state, action) {
			state.userData = action.payload.userData;
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.authState = "idle";

			// save to localStorage
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
		},

		logout(state) {
			state.isLoggedIn = false;
			state.userData = null;
			state.token = null;
			state.authState = "idle";

			// delete from localStorage
			localStorage.removeItem(LOCAL_STORAGE_KEY);
		},

		// run this only in App.js and NOWHERE else
		loginOnLoad(state) {
			// check if the data is present in localStorage
			const authData = localStorage.getItem(LOCAL_STORAGE_KEY);
			// return if the data is not present
			if (authData == null) {
				state.authState = "idle";
				return;
			}
			// else, set all the data properly
			const parsedData = JSON.parse(authData);
			state.userData = parsedData.userData;
			state.token = parsedData.token;
			state.isLoggedIn = true;
			state.authState = "idle";
		},

		setLoadingState(state) {
			state.authState = "loading";
		},

		setIdleState(state) {
			state.authState = "idle";
		},
	},
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
