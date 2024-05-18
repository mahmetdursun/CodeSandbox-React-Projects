import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: []
  },
  reducers: {
    updatedCars: (state, action) => {
      state.data.push(action.payload);
    },
    removeCar: (state, action) => {
      const carId = action.payload;
      state.data = state.data.filter((car) => car.id !== carId);
    }
  }
});

export const { updatedCars, removeCar } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
