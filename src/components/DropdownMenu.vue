<template>
  <div class="relative" @mouseenter="visible = true" @mouseleave="visible = false">
    <div class="text-white ml-4 font-bold cursor-pointer z-10">{{ title }}</div>
    <div v-show="visible" class="absolute bg-white text-black rounded shadow-lg w-40 pointer-events-auto z-10">
      <a v-for="item in items" :key="item.text" :href="item.href" class="block px-4 py-2 rounded hover:bg-gray-200">{{ item.text }}</a>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  title: String,
  items: Array,
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const visible = ref(props.modelValue);

watch(visible, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style scoped>
.pointer-events-auto {
  pointer-events: auto;
}
</style>
