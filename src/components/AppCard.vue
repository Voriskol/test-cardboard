<template>
  <article class="stickerCard">
    <p>Задача организации, в особенности же</p>
  </article>
</template>

<style scoped lang="scss">
.stickerCard {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  padding: 20px 10px;
  border-radius: 5px;
  background-color: rgb(143, 134, 134);
  overflow: auto;
  overflow-wrap: anywhere;
  -webkit-box-shadow: 0px 4px 6px 2px rgb(30, 29, 33);
  -moz-box-shadow: 0px 4px 6px 2px rgb(30, 29, 33);
  box-shadow: 0px 4px 6px 2px rgb(30, 29, 33);

  p {
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
