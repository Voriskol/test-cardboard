import { defineStore } from "pinia";
import type { ICard } from "~/interfaces/ICard";

export const useCardsStore = defineStore(
  "cards",
  () => {
    const cards = ref<Array<ICard>>([]);
    const addCard = () => {
      const card = {
        id: self.crypto.randomUUID(),
        text: "",
        isEdit: false,
      };
      cards.value.push(card);
    };

    const editCard = (id: string) => {
      const card = cards.value.find((item) => item.id == id);
      if (card) {
        card.isEdit = !card.isEdit;
      }
    };

    const deleteCard = (id: string) => {
      cards.value = cards.value.filter((item) => item.id !== id);
    };

    return { cards, addCard, editCard, deleteCard };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
);
