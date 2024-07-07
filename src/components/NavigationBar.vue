<template>
  <div class="flex justify-between bg-blue-950 p-4">
    <div id="left-side-buttons" class="flex gap-4 items-center">
      <a href="/">
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB SVG" class="h-20 w-40">
      </a>

      <DropdownMenu title="Movies" :items="moviesItems" v-model="dropdowns.movies"/>
      <DropdownMenu title="TV Shows" :items="tvShowsItems" v-model="dropdowns.tvShows"/>
      <DropdownMenu title="People" :items="peopleItems" v-model="dropdowns.people"/>
      <DropdownMenu title="More" :items="moreItems" v-model="dropdowns.more"/>
    </div>

    <div id="right-side-buttons" class="flex gap-4 items-center">
      <!-- Add right-side buttons here -->
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import DropdownMenu from './DropdownMenu.vue';

const dropdowns = reactive({
  movies: false,
  tvShows: false,
  people: false,
  more: false,
});

const moviesItems = [
  { text: 'Popular', href: '/movies/popular' },
  { text: 'Now Playing', href: '/movies/now-playing' },
  { text: 'Upcoming', href: '/movies/upcoming' },
  { text: 'Top Rated', href: '/movies/top-rated' }
];

const tvShowsItems = [
  { text: 'Popular', href: '/tv-shows/popular' },
  { text: 'Airing Today', href: '/tv-shows/airing-today' },
  { text: 'On TV', href: '/tv-shows/on-tv' },
  { text: 'Top Rated', href: '/tv-shows/top-rated' }
];

const peopleItems = [
  { text: 'Popular People', href: '/people/popular' }
];

const moreItems = [
  { text: 'Discussions', href: '/more/discussions' },
  { text: 'Leaderboard', href: '/more/leaderboard' },
  { text: 'Support', href: '/more/support' },
  { text: 'API', href: '/more/api' }
];
</script>

<style scoped>
.pointer-events-auto {
  pointer-events: auto;
}
</style>
