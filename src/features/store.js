import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import headMenu from "./slices/headMenu";
import footerMenu from "./slices/footerMenu";
import siteSettings from "./slices/siteSettings";
import blog from "./slices/blog";
import helpCenter from "./slices/helpCenter";
import team from "./slices/team";
import submission from "./slices/submission";
import dynamicRootPage from "./slices/dynamicRootPage";
import portfolio from "./slices/portfolio";
import home from "./slices/home";
import category from "./slices/category";
import countryStateCity from "./slices/countryStateCity";
import authentication from "./slices/authentication";
import dashboard from "./slices/dashboard";
import privacy from "./slices/privacy";
import references from "./slices/references";
import cart from "./slices/cart";

const rootReducer = combineReducers({
  headMenu,
  footerMenu,
  siteSettings,
  dynamicRootPage,
  blog,
  helpCenter,
  team,
  submission,
  portfolio,
  home,
  category,
  countryStateCity,
  authentication,
  dashboard,
  privacy,
  references,
  cart,
});

// Redux-persist configuration
const persistConfig = {
  key: "BABVIPSOFTWARES",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_REACT_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        // Handle encryption errors if any
      },
    }),
  ],
};

// Persisted root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
