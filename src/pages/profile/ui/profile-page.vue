<script setup lang="ts">
import { ref } from 'vue';

interface UserProfile {
  firstname: string;
  lastname: string;
  username: string;
}

const userProfile = ref<UserProfile>({
  firstname: 'Aleksandr',
  lastname: 'Belous',
  username: 'conarti',
});
</script>

<template>
  <q-page padding>
    <h6 class="text-center q-mt-md q-mb-none">
      {{ userProfile?.firstname }} {{ userProfile?.lastname }}
    </h6>
    <p class="text-center text-caption">
      {{ userProfile?.username }}
    </p>

    <q-list
      padding
      bordered
    >
      <q-item-label header>
        Settings
      </q-item-label>

      <q-item
        v-ripple
        clickable
      >
        <q-item-section
          avatar
          top
        >
          <q-avatar
            icon="sym_r_badge"
            text-color="grey"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label>Edit Name</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        v-ripple
        clickable
      >
        <q-item-section
          avatar
          top
        >
          <q-avatar
            icon="sym_r_password"
            text-color="grey"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label>Change password</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
