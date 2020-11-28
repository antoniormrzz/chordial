<template>
  <div class="p-d-flex p-reset chordial">
    <div class="chordial-menu">
      <NavMenu />
    </div>
    <div class="chordial-main-content">
      <router-view />
    </div>
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
   -->
</template>

<script>
import { defineComponent } from 'vue';
import NavMenu from '@/components/NavMenu';

export default defineComponent({
  components: {
    NavMenu
  }
});
</script>

<style lang="stylus">
@import './assets/styles/colors.styl'
@import './assets/styles/variables.styl'

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color c-text

.chordial
  min-height 100vh

  &-menu
    width menu-width
    height 100vh
    position fixed
    background-color c-background
    border-right 1px solid c-gray

  &-main-content
    margin-left menu-width
    min-height 100%
    flex-grow 1
    background c-background
</style>
