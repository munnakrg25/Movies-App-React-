# Movie App

A simple movie search app built with React, Vite, React Router, Tailwind CSS, and the TMDB API. The app lets users search for movies, open a details page for a selected title, and view a basic watchlist page powered by `localStorage`.

## Features

- Search movies by title using TMDB
- Browse search results in a responsive card grid
- Open a movie details page with overview text
- Watch an embedded YouTube trailer when one is available
- Visit a watchlist page that reads saved items from `localStorage`

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Axios
- Tailwind CSS 4
- ESLint

## Project Structure

```text
src/
  components/
    MovieCard.jsx
    Navbar.jsx
  pages/
    Home.jsx
    MovieDetails.jsx
    Watchlist.jsx
  services/
    api.js
  App.jsx
  main.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates a production build
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint

## Routing

- `/` home page with movie search
- `/movie/:id` movie details page
- `/watchlist` watchlist page

## API

The app uses The Movie Database (TMDB) API through helper functions in `src/services/api.js`:

- `searchMovies(query)`
- `getMovieDetails(id)`
- `getMovieVideos(id)`

## Notes

- The current API key is stored directly in `src/services/api.js`
- For a production-ready setup, move the key into a Vite environment variable such as `.env`
- The watchlist page currently reads from `localStorage`, but the UI for adding movies to the watchlist has not been implemented yet

## Future Improvements

- Add an "Add to Watchlist" action from cards or the details page
- Handle loading and error states more gracefully
- Add fallback images when a poster is missing
- Support trending, popular, or top-rated movie sections
- Move secrets into environment variables

## License

This project is for learning and personal use.

