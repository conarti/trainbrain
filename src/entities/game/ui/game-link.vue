<script setup lang="ts">
interface Props {
  label: string,
  routeName: string,
  icon: string,
}

defineProps<Props>();
</script>

<template>
  <router-link
    v-slot="{ navigate }"
    :to="{ name: routeName }"
    custom
  >
    <q-card
      class="cursor-pointer"
      flat
      bordered
      v-bind="$attrs"
      @click="navigate"
    >
      <q-card-section class="q-pa-lg column flex-center full-height">
        <h6 class="q-mt-none q-mb-md text-center">
          {{ label }}
        </h6>
        <q-card-section
          class="justify-center"
          horizontal
        >
          <q-icon
            size="xl"
            :name="icon"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </router-link>
</template>
