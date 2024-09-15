import { createSlice, configureStore } from "@reduxjs/toolkit";
const contactsSlice = createSlice({
  name: "counter",
  initialState: {
    contacts: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchContactsLoading: (state) => {
      state.loading = true;
    },
    fetchContactsSuccess: (state, action) => {
      state.loading = false;
      state.contacts = action.payload;
      state.error = false;
    },
    fetchContactFailed: (state) => {
      state.loading = false;
      state.contacts = [];
      state.error = true;
    },
  },
});

export const {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactFailed,
} = contactsSlice.actions;

const store = configureStore({
  reducer: contactsSlice.reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
