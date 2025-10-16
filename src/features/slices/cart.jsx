import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import {
  addToCart,
  deleteCartItem,
  getCustomerCartData,
  getCustomerCheckoutData,
  getRenewCheckoutData,
  paymentProcess,
  renewPaymentProcess,
} from "../actions/cart";

const initialState = {
  isLoading: false,
  errorMessage: {},
  cartData: [],
  updateResponse: {},
  checkoutData: null,
  renewCheckoutData: null,
  isLoadingOrder: false,
  paymentCredentials: null,
  renewPaymentCredentials: null,
};

const formattedDate = new Date().toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

// ---------------------------------------------------------------------------------------

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    clearUpdateResponse: (state) => {
      state.updateResponse = null;
    },
    clearCredentialResponse: (state) => {
      state.paymentCredentials = null;
      state.renewPaymentCredentials = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.updateResponse = action.payload;
        toast("Deleted cart item successfully.", {
          description: formattedDate,
        });
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.updateResponse = action.payload;
        toast(action.payload.message, {
          description: formattedDate,
        });
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(getCustomerCartData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getCustomerCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.updateResponse = null;
        state.cartData = action.payload.data.customer_software;
      })
      .addCase(getCustomerCartData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(getCustomerCheckoutData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getCustomerCheckoutData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.checkoutData = action.payload.data;
        state.paymentCredentials = null;
      })
      .addCase(getCustomerCheckoutData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(getRenewCheckoutData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getRenewCheckoutData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.renewCheckoutData = action.payload.data;
        state.renewPaymentCredentials = null;
      })
      .addCase(getRenewCheckoutData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(paymentProcess.pending, (state) => {
        state.isLoadingOrder = true;
        state.errorMessage = "";
      })
      .addCase(paymentProcess.fulfilled, (state, action) => {
        state.isLoadingOrder = false;
        state.errorMessage = "";
        state.paymentCredentials = action.payload.data;
      })
      .addCase(paymentProcess.rejected, (state, action) => {
        state.isLoadingOrder = false;
        state.errorMessage = action.payload;
      })
      .addCase(renewPaymentProcess.pending, (state) => {
        state.isLoadingOrder = true;
        state.errorMessage = "";
      })
      .addCase(renewPaymentProcess.fulfilled, (state, action) => {
        state.isLoadingOrder = false;
        state.errorMessage = "";
        state.renewPaymentCredentials = action.payload.data;
      })
      .addCase(renewPaymentProcess.rejected, (state, action) => {
        state.isLoadingOrder = false;
        state.errorMessage = action.payload;
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const { clearUpdateResponse, clearCredentialResponse } =
  cartSlice.actions;
export default cartSlice.reducer;
