<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div>
    <NuxtLayout>
      <section class="flex items-center justify-center flex-col">
        <h1 class="text-[108px] font-bold text-white">
          {{ error!.statusCode }}
        </h1>
        <button
          class="rounded p-3 bg-gray-500 hover:bg-gray-300 transition-colors"
        >
          <NuxtLink to="/">Go back home</NuxtLink>
        </button>
      </section>
    </NuxtLayout>
  </div>
</template>
