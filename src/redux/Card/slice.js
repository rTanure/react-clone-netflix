import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfViews: 0,

  thumbsPerView: 0,
  thumbWidth: 0,

  cardPosition: {
    x: 0,
    y: 0
  },
  cardState: "closed",
  gap: 6
}

const cardSlice =  createSlice({
  name: "card",
  initialState,
  reducers: {
    updateView: (state, action) => {
      // Thumbs Per View
      const w = document.body.clientWidth
      if (w <= 500) {
        state.thumbsPerView = 2;
      } else if (w <= 800) {
        state.thumbsPerView = 3;
      } else if (w <= 1100) {
        state.thumbsPerView = 4;
      } else if (w <= 1400) {
        state.thumbsPerView = 5;
      } else {
        state.thumbsPerView = 6;
      }

      // Thumb Width
      state.thumbWidth = ((document.body.clientWidth - 2*(document.body.clientWidth * 0.05)) - (state.thumbsPerView + 1)*state.gap) / state.thumbsPerView
      
      // Number Of Views
      state.numberOfViews = Math.ceil(action.payload/state.thumbsPerView)
    },
    displayCard: (state, action) => {
      state.cardPosition = action.payload
      state.cardState = "opened"
    },
    closeCard: (state, action) => {
      state.cardState = "closed"
    }
  }
})

export const { 
  updateView,
  displayCard,
  closeCard
} = cardSlice.actions

export default cardSlice.reducer