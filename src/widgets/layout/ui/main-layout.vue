<script setup lang="ts">
import { AppLink } from '@/shared/ui/app-link';
</script>

<template>
  <header>
    <nav>
      <app-link to="/">
        Home
      </app-link>
      <app-link to="/about">
        About
      </app-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>
