import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import {
  changePassword,
  customerLogin,
  customerLogout,
  resetPasswordMail,
} from "../actions/authentication";

const formattedDate = new Date().toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const initialState = {
  isLoading: false,
  isUserLoggedIn: false,
  isPasswordChanged: false,
  customerData: {},
  response: {},
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

const customerSlice = createSlice({
  name: "customerSlice",
  initialState,
  reducers: {
    resetForgotPasswordState: (state) => {
      state.isPasswordChanged = false;
      state.errorMessage = "";
    },
    resetCustomerState: (state) => {
      state.isUserLoggedIn = false;
      state.customerData = {};
    },
    resetErrorMessage: (state, action) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(customerLogin.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(customerLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isUserLoggedIn = true;
        state.customerData = action.payload.data;
        toast("Login Successfull.", {
          description: formattedDate,
        });
      })
      .addCase(customerLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to login API.";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(resetPasswordMail.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(resetPasswordMail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
        state.errorMessage = "";
        toast(action.payload.message, {
          description: formattedDate,
        });
      })
      .addCase(resetPasswordMail.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to login API.";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isPasswordChanged = true;
        toast("Password reset successfully.", {
          description: formattedDate,
        });
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to login API.";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(customerLogout.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(customerLogout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isUserLoggedIn = false;
        state.customerData = {};
        toast("Log out Successfull.", {
          description: formattedDate,
        });
      })
      .addCase(customerLogout.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to logout API.";
        toast("Logout failed. Please try again", {
          description: formattedDate,
        });
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {
  resetCustomerState,
  resetForgotPasswordState,
  resetErrorMessage,
} = customerSlice.actions;
export default customerSlice.reducer;
