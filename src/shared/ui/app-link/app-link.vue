<!--<script setup lang="ts">-->
<!--import { RouterLink, useLink } from 'vue-router';-->

<!--const props = defineProps({ ...RouterLink.props });-->

<!--const { navigate, href, isActive } = useLink(props)-->
<!--</script>-->

<!--<template>-->
<!--  <router-link custom>-->
<!--    <el-link-->
<!--      v-bind="$attrs"-->
<!--      :href="href"-->
<!--      :type="isActive ? 'primary' : 'default'"-->
<!--      @click="navigate"-->
<!--    >-->
<!--      <slot />-->
<!--    </el-link>-->
<!--  </router-link>-->
<!--</template>-->


<template>
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :href="to"
    target="_blank"
  >
    <slot />
  </a>
  <router-link
    v-else
    v-slot="{ href, navigate, isExactActive }"
    v-bind="$props"
    custom
  >
    <el-link
      v-bind="$attrs"
      :href="href"
      :type="isExactActive ? 'primary' : 'default'"
      @click="navigate"
    >
      <slot />
    </el-link>
  </router-link>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'AppLink',
  inheritAttrs: false,

  props: {
    ...RouterLink.props,
  },

  computed: {
    isExternalLink() {
      return typeof this.to === 'string' && this.to.startsWith('http');
    },
  },
};
</script>
