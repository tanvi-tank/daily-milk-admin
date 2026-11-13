# Daily Milk Admin

React + Vite + Tailwind CSS + Redux Toolkit + React Router.

## Run
```bash
npm install
npm run dev
```
Demo login: `admin@dailymilk.com` / `admin123`

## Structure
```
src/
├── app/            store.js (Redux store)
├── features/       Redux slices (auth, ui)
├── layouts/        AdminLayout (sidebar + topbar shell)
├── components/
│   ├── layout/     Sidebar, Topbar
│   └── common/     Logo, StatCard, StatusBadge
├── pages/          Login, Dashboard, Profile, ComingSoon, NotFound
├── routes/         ProtectedRoute
├── data/           mock data (replace with API calls)
└── utils/          storage helpers
```

## Connect your API
Replace `loginRequest` in `src/features/auth/authSlice.js` with your real login call, and swap `src/data/mockData.js` for API data.

## Theme
Colors live in `tailwind.config.js`: forest `#1B5E20`, fresh `#2E7D32`, cream `#FFF8F0`, gold `#C9A227`, leaf `#A5D6A7`, ink `#212121`.
