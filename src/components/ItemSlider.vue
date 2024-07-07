<template>
  <div>
    <div class="popular-type-selector flex justify-start items-center mx-8 my-4">
      <p class="text-lg text-gray-900 font-bold">What's Popular?</p>
      <div class="ml-4">
        <button
          :class="{'bg-blue-950 text-emerald-400 font-bold': selectedType === 'movie', 'bg-gray-200': selectedType !== 'movie'}"
          class="px-4 py-2 rounded-s-2xl"
          @click="fetchData('movie')"
        >
          Movies
        </button>
        <button
          :class="{'bg-blue-950 text-emerald-400 font-bold': selectedType === 'tv', 'bg-gray-200': selectedType !== 'tv'}"
          class="px-4 py-2 rounded-e-2xl"
          @click="fetchData('tv')"
        >
          TV Shows
        </button>
      </div>
    </div>
    <div class="item-slider relative overflow-hidden">
      <div class="item-slider-wrapper flex gap-4 overflow-x-auto">
        <ItemCard
          v-for="(item) in items"
          :key="item.id"
          :title="item.title || item.name"
          :posterPath="item.poster_path"
          :overview="item.overview"
          :releaseDate="item.release_date || item.first_air_date"
          :voteAverage="Math.round(item.vote_average)"
        />
      </div>
      <div class="hidden arrow-prev h-16 w-16 absolute top-2/4 left-1 bg-red-200 cursor-pointer flex justify-center items-center" @click="scrollLeft">
        <svg viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path>
        </svg>
      </div>
      <div class="hidden arrow-next h-16 w-16 absolute top-2/4 right-1 bg-red-200 cursor-pointer flex justify-center items-center" @click="scrollRight">
        <svg viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" fill=""></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ItemCard from './ItemCard.vue';

const items = ref([]);
const selectedType = ref('movie');

const fetchData = async (type) => {
  selectedType.value = type;
  try {
    const response = await fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&page=1`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    items.value = data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData(selectedType.value);
});

const scrollLeft = () => {
  const slider = document.querySelector('.item-slider-wrapper');
  slider.scrollBy({ left: -300, behavior: 'smooth' });
};

const scrollRight = () => {
  const slider = document.querySelector('.item-slider-wrapper');
  slider.scrollBy({ left: 300, behavior: 'smooth' });
};
</script>

<style scoped>
.item-slider-wrapper {
  white-space: nowrap;
  padding: 1rem;
  width: 250vw;
}

.item-slider-wrapper::-webkit-scrollbar {
  display: none;
}
</style>
