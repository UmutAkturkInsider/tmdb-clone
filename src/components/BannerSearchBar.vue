<template>
  <form id="inner_search_form" action="/search" method="get" accept-charset="utf-8" class="flex items-center bg-white rounded-full mb-36 shadow-sm w-4/5">
    <label class="flex-1">
      <input
        id="inner_search_v4"
        name="query"
        type="text"
        tabindex="1"
        autocorrect="off"
        autofill="off"
        autocomplete="off"
        spellcheck="false"
        placeholder="Search for a movie, tv show, person......"
        class="w-full py-2 px-4 text-gray-700 rounded-full focus:outline-none"
      >
    </label>

    <button type="submit" class="ml-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 text-white py-2 px-4 rounded-full focus:outline-none">
      Search
    </button>
  </form>
</template>

<script>
export default {
  // Your script logic here if needed
};
</script>

<style scoped>
/* No additional style needed here */
</style>
