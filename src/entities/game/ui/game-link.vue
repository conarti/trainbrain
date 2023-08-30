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
      @click="navigate"
    >
      <q-card-section>
        <div class="q-pa-md column flex-center">
          <h6 class="q-mt-none q-mb-md">
            {{ label }}
          </h6>
          <q-icon
            size="xl"
            :name="icon"
          />
        </div>
      </q-card-section>
    </q-card>
  </router-link>
</template>
