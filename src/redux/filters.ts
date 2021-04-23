import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortByTypeType } from '../types/types';

const initialState = {
  sortType: {
    name: 'Latest' as string,
    type: 'primary_release_date' as string,
    order: 'desc' as string,
  } as SortByTypeType,
  genreId: 28 as number,
  currentPage: 1 as number,
  totalPages: 0 as number,
  rateNumber: 5 as number,
};

export type InitialState = typeof initialState;

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterBySortType(state, action: PayloadAction<SortByTypeType>) {
      state.sortType = action.payload;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    filterByRate(state, action: PayloadAction<number>) {
      state.rateNumber = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    filterByGenre(state, action: PayloadAction<number>) {
      state.genreId = action.payload;
    },
  },
});

export default filters.reducer;
export const {
  filterBySortType,
  setTotalPages,
  filterByRate,
  setCurrentPage,
  filterByGenre,
} = filters.actions;
