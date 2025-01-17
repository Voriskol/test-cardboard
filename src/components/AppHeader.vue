<template>
  <header class="header">
    <h1 class="header__title">Stickerboard</h1>
    <nav class="navigation">
      <ul>
        <li><NuxtLink to="/">Главная</NuxtLink></li>
        <li><NuxtLink to="/settings">Настройки</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: rgb(33, 31, 31);
  color: white;
  -webkit-box-shadow: 0px 4px 8px 0px rgb(26, 25, 28);
  -moz-box-shadow: 0px 4px 8px 0px rgb(26, 25, 28);
  box-shadow: 0px 4px 8px 0px rgb(26, 25, 28);

  .header__title {
    font-weight: bold;
    font-size: 36px;
  }
}

.navigation {
  ul {
    display: flex;
    gap: 30px;
  }

  li {
    font-size: 24px;
    font-weight: 500;
    padding: 5px;
    transition: all 0.3s;
    border-radius: 10px;

    &:hover {
      background-color: rgb(68, 68, 175);
    }
  }
}
</style>
