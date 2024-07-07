<template>
  <NavigationBar />
  <HomepageBanner />
  <ItemSlider :items="movieItems" />
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue';
import ItemSlider from './components/ItemSlider.vue';
import HomepageBanner from './components/HomepageBanner.vue';
import { ref } from 'vue';

// Simulate the API response
const movieItems = ref([
  {
    id: 1022789,
    title: "Inside Out 2",
    poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    overview: "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    release_date: "2024-06-11",
    vote_average: 7.724,
  },
  // Add more items here as needed
]);
</script>

<style>
#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
