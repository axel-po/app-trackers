import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
   value: AuthState;
};

type AuthState = {
   isAuth: boolean;
   username: string;
   uid: string;
   isModerator: boolean;
};

const initialState: InitialState = {
   value: {
      isAuth: false,
      username: "",
      uid: "",
      isModerator: false,
   },
};

export const auth = createSlice({
   name: "auth",
   initialState,
   reducers: {
      logOut: () => {
         return initialState;
      },
      logIn: (state, action: PayloadAction<string>) => {
         return {
            value: {
               isAuth: true,
               username: action.payload,
               uid: "u4787bjbdh36bqb3",
               isModerator: false,
            },
         };
      },
      toogleModerator: (state) => {
         return {
            value: {
               ...state.value,
               isModerator: !state.value.isModerator,
            },
         };
      },
   },
});

export const { logIn, logOut } = auth.actions;

export default auth.reducer;
