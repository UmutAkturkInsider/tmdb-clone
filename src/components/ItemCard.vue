<template>
  <div class="card border relative border-gray-300 rounded-lg overflow-hidden w-72 mx-2">
    <div class="image">
      <img :src="posterUrl" :alt="title" class="poster w-72 h-72 object-cover" loading="lazy">
    </div>
    <div class="flex justify-center items-center h-14 w-14 absolute bottom-0 right-0 bg-gray-900 p-3 rounded-full">
      <div class="">
        <p class="text-gray-50  font-semibold text-gray-50">{{ formattedVoteAverage }}
          <span class="text-xs absolute top-3 right-2">%</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  title: String,
  posterPath: String,
  overview: String,
  releaseDate: String,
  voteAverage: Number,
});

const posterUrl = `https://image.tmdb.org/t/p/w220_and_h330_face${props.posterPath}`;

const formattedVoteAverage = computed(() => {
  return Math.floor(props.voteAverage * 10); // Multiply by 10 and take the floor value to get two digits
});
</script>

<style scoped>
</style>
