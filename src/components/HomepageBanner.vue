<template>
  <div class="banner relative" style="height: 70vh;">
    <!-- Banner Image -->
    <img :src="imageUrl" alt="Homepage Banner" class="w-full h-full object-cover">

    <!-- Banner Search Bar -->
    <div class="absolute inset-x-0 bottom-4 flex justify-center">
      <BannerSearchBar />
    </div>
  </div>
</template>

<script>
import BannerSearchBar from './BannerSearchBar.vue';

export default {
  components: {
    BannerSearchBar
  },
  data() {
    return {
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/hutkoduWMQcii4bCQXdsQ5yWtio=/0x199:4200x2398/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24293849/bab23499r4.jpg'
    };
  }
};
</script>

<style scoped>
/* No additional style needed here */
</style>
