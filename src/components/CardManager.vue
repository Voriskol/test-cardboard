<script setup lang="ts">
import { useCardsStore } from "../store/cardStore";

const { addCard } = useCardsStore();
</script>

<template>
  <section class="cardManager">
    <button class="cardManager__button" @click="addCard">
      Добавить новую карточку
    </button>
  </section>
</template>

<style scoped lang="scss">
.cardManager {
  margin-bottom: 30px;
}
.cardManager__button {
  background-color: rgb(68, 68, 175);
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  transition: all 0.3s;
  &:hover {
    background-color: rgb(86, 86, 181);
  }
}
</style>
