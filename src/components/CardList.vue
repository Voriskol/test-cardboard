<script setup lang="ts">
import { useCardsStore } from "../store/cardStore";

const { cards } = storeToRefs(useCardsStore());
</script>
<template>
  <section class="flex flex-wrap gap-4">
    <AppCard
      v-for="card in cards"
      :key="card.id"
      :id="card.id"
      v-model="card.text"
      :isEdit="card.isEdit"
    />
  </section>
</template>
