import { createAsyncThunk, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ReferralState, Referral } from '../../types/referral';

// Actions
/**
 * Fetch all referrals
 */
export const fetchAll = createAsyncThunk('users/fetchAll', async () => {
  const response = await fetch('http://localhost:3333/referrals');
  return response.json();
});

/**
 * Get a referral by ID
 */
export const get = createAsyncThunk('referrals/get', async (id: number) => {
  const response = await fetch(`http://localhost:3333/referrals/${id}`);
  return response.json();
});

/**
 * Delete a referral by ID
 */
export const remove = createAsyncThunk('referrals/delete', async (id: number) => {
  await fetch(`http://localhost:3333/referrals/${id}`, { method: 'DELETE' });
  return id;
});

/**
 * Update a referral by ID
 */
export const update = createAsyncThunk('referrals/update', async (data: Referral) => {
  const response = await fetch(`http://localhost:3333/referrals/${data.id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return response.json();
});

/**
 * Create a referral
 */
export const create = createAsyncThunk('referrals/create', async (data: Referral) => {
  const response = await fetch(`http://localhost:3333/referrals`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return response.json();
});

// initial state
const initialState: ReferralState = { data: [] };

// reducer
export const referralReducer = createReducer(initialState, {
  [fetchAll.fulfilled.type]: (state, action: PayloadAction<Referral[]>) => {
    state.data = action.payload;
  },
  [remove.fulfilled.type]: (state, action: PayloadAction<number>) => {
    state.data = state.data.filter((x) => x.id !== action.payload);
  },
  [get.fulfilled.type]: (state, action: PayloadAction<Referral>) => {
    state.data = state.data.map((x) => (x.id === action.payload.id ? action.payload : x));
  },
  [update.fulfilled.type]: (state, action: PayloadAction<Referral>) => {
    state.data = state.data.map((x) => (x.id === action.payload.id ? action.payload : x));
  },
  [create.fulfilled.type]: (state, action: PayloadAction<Referral>) => {
    state.data = [...state.data, action.payload];
    console.log(JSON.stringify(state.data));
  },
});
