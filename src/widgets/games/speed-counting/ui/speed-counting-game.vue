<script setup lang="ts">

</script>

<template>
  <q-card
    flat
    bordered
    tag="form"
  >
    <q-card-section>
      <div class="flex flex-center q-mb-sm">
        <q-icon
          class="q-mr-sm"
          size="sm"
          name="sym_r_123"
        />
        <h5 class="q-ma-none text-center">
          Speed Counting Game
        </h5>
      </div>
      <p class="text-subtitle2 text-center">
        Count out loud from 1 to 120 as fast as you can.
      </p>
      <p class="text-center q-mb-none">
        Be sure to pronounce each number clearly.
        <br>
        Press "DONE!" when you have finished the counting.
      </p>
    </q-card-section>
    <q-card-actions>
      <q-btn
        class="col"
        label="Start"
        push
        color="primary"
        type="submit"
      />
    </q-card-actions>
  </q-card>
</template>

<style scoped>

</style>
