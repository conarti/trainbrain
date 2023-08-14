<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const gameName = computed(() => route.params['name']);
</script>

<template>
  <h1>this is the game page - {{ gameName }}</h1>
  <router-link to="/games/math">
    math
  </router-link>
  <router-link to="/games/speed-counting">
    count
  </router-link>
</template>
