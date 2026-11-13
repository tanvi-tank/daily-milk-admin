import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { clearSession, loadSession, saveSession } from '../../utils/storage';

/**
 * DEMO LOGIN — replace `loginRequest` with a real API call (axios/fetch).
 * Demo credentials: admin@dailymilk.com / admin123
 */
const loginRequest = async ({ email, password }) => {
  await new Promise((r) => setTimeout(r, 800));
  if (email.toLowerCase() === 'admin@dailymilk.com' && password === 'admin123') {
    return {
      token: 'demo-token-123',
      user: {
        name: 'Aarav Patel',
        email: 'admin@dailymilk.com',
        phone: '+91 98765 43210',
        role: 'Super Admin',
        address: 'Ahmedabad, Gujarat',
      },
    };
  }
  throw new Error('Email or password is incorrect. Check your details and try again.');
};

export const login = createAsyncThunk('auth/login', async (creds, { rejectWithValue }) => {
  try {
    const data = await loginRequest(creds);
    saveSession(data);
    return data;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});

const saved = loadSession();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: saved?.user ?? null,
    token: saved?.token ?? null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      clearSession();
    },
    updateProfile(state, action) {
      state.user = { ...state.user, ...action.payload };
      saveSession({ token: state.token, user: state.user });
    },
    clearError(state) { state.error = null; },
  },
  extraReducers: (b) => {
    b.addCase(login.pending, (s) => { s.status = 'loading'; s.error = null; })
     .addCase(login.fulfilled, (s, a) => { s.status = 'idle'; s.user = a.payload.user; s.token = a.payload.token; })
     .addCase(login.rejected, (s, a) => { s.status = 'idle'; s.error = a.payload; });
  },
});

export const { logout, updateProfile, clearError } = authSlice.actions;
export default authSlice.reducer;
