<script setup lang="ts">
import { useCardsStore } from "../store/cardStore";

const { editCard, deleteCard } = useCardsStore();
defineProps<{
  id: string;
  isEdit: boolean;
}>();

const text = defineModel<string>();
</script>

<template>
  <article class="stickerCard">
    <div v-if="$route.name == 'settings'" class="flex justify-between">
      <button @click="deleteCard(id)">
        <Icon name="mdi:bucket" size="20px" style="color: rgb(33, 31, 31)" />
      </button>
      <button @click="editCard(id)">
        <Icon
          :name="isEdit ? 'mdi:checkbox-marked' : 'mdi:pencil'"
          size="20px"
          style="color: rgb(33, 31, 31)"
        />
      </button>
    </div>
    <div class="flex flex-grow items-center justify-center">
      <textarea
        v-if="isEdit && $route.name == 'settings'"
        class="stickerCard__text"
        :disabled="!isEdit"
        placeholder="Напишите что-нибудь"
        v-model="text"
      ></textarea>
      <p v-else>{{ text }}</p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.stickerCard {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: rgb(143, 134, 134);
  overflow: auto;
  -webkit-box-shadow: 0px 4px 6px 2px rgb(30, 29, 33);
  -moz-box-shadow: 0px 4px 6px 2px rgb(30, 29, 33);
  box-shadow: 0px 4px 6px 2px rgb(30, 29, 33);

  &__text {
    width: 100%;
    height: 100%;
    background-color: rgb(128, 120, 120);
    border-radius: 10px;
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: 700;
  }
  p {
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: 700;
  }
}

::-webkit-scrollbar {
  width: 3px;
}
/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background-color: rgb(68, 68, 175);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>
