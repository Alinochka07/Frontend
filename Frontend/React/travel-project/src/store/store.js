import { configureStore } from '@reduxjs/toolkit'
import {actionTypes, firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import tourReducer from "../../components/fetch-data/fetchSlice"




export const store = configureStore({
  reducer: {
    firebaseReducer,
    firestoreReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [actionTypes.LOGIN, actionTypes.AUTH_LINK_ERROR]
    }
  }),
})