// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeMain from '../views/HomeMain.vue'; // Ensure this file exists at this location
import MoviesPopular from '../views/MoviesPopular.vue';
import MoviesNowPlaying from '../views/MoviesNowPlaying.vue';
import MoviesUpcoming from '../views/MoviesUpcoming.vue';
import MoviesTopRated from '../views/MoviesTopRated.vue';
// Import other views as needed

const routes = [
  { path: '/', name: 'HomeMain', component: HomeMain },
  { path: '/movies/popular', name: 'MoviesPopular', component: MoviesPopular },
  { path: '/movies/now-playing', name: 'MoviesNowPlaying', component: MoviesNowPlaying },
  { path: '/movies/upcoming', name: 'MoviesUpcoming', component: MoviesUpcoming },
  { path: '/movies/top-rated', name: 'MoviesTopRated', component: MoviesTopRated },
  // Define other routes similarly
];

const router = createRouter({
  history: createWebHistory(''), // Using an empty string for BASE_URL
  routes,
});

export default router;
