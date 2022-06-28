<template>
  <RouterView />
</template>

<style lang="scss">
@import 'normalize.css';

.debug {
  outline: 1px solid gold;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: visible;
  overflow-x: hidden;
  text-size-adjust: 100%;
}

#app {
  color: #222;
}
</style>
