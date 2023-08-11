<script setup lang="ts">
import { computed } from 'vue';
import { useUserGamesResults } from '@/features/user-games-results';

const { results } = useUserGamesResults();

const hasNoResults = computed(() => results.value.length === 0);
</script>

<template>
  <h5
    v-if="hasNoResults"
    class="text-center"
  >
    No results
  </h5>
  <template v-else>
    <div
      v-for="(result, index) in results"
      :key="index"
    >
      <h6>{{ result.time }}</h6>
      <p>{{ result.solutions }}</p>
    </div>
  </template>
</template>
