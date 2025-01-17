<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCardsStore } from "../store/cardStore";
import type { ICard } from "../interfaces/ICard";
import { watch } from "vue";

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
