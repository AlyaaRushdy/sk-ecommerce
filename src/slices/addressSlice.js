import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  addressList: [],
};

// Add New Address
export const addNewAddress = createAsyncThunk(
  "address/addNewAddress",
  async (obj, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/address/add",

        obj.formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${obj.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

// Get All Addresses
export const getAllAddresses = createAsyncThunk(
  "address/getAllAddresses",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/address/get/${userId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

// Edit Address
export const editAddress = createAsyncThunk(
  "address/editAddress",
  async ({ userId, addressId, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/address/update/${userId}/${addressId}`,
        formData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

// Delete Address
export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async ({ userId, addressId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/address/delete/${userId}/${addressId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        // Verify that `action.payload` contains the expected structure
        state.addressList.push(action.payload); // Assuming response contains the new address item
      })
      .addCase(addNewAddress.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Error adding address:", action.payload);
      })
      .addCase(getAllAddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addressList = action.payload; // Assuming payload is the address list
      })
      .addCase(getAllAddresses.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Error fetching addresses:", action.payload);
      });
  },
});

export default addressSlice.reducer;
