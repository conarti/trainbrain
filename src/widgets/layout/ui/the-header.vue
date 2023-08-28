<script setup lang="ts">
import { BrandLogo } from '@/shared/ui/brand-logo';
import { APP_TITLE } from '../config';
</script>

<template>
  <q-header>
    <q-toolbar>
      <BrandLogo size="32" />
      <q-toolbar-title shrink>
        {{ APP_TITLE }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
