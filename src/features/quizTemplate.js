import { createSlice } from "@reduxjs/toolkit";

export const quizTemplateSlice = createSlice({
  name: "quizTemplate",
  initialState: {
    value: {
      name: "Juan Dela Cruz",
      items: 10,
      difficulty: "easy",
      category: "any category",
      quizType: "any type",
    },
  },

  reducers: {
    setTemplate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTemplate } = quizTemplateSlice.actions;

export default quizTemplateSlice.reducer;
