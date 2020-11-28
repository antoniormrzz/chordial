<template>
  <div class="nav">
    <div class="nav__project">
      <Dropdown
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        class="nav__project-dropdown"
      />
      <Button icon="pi pi-plus" class="p-button-sm nav__project-add" />
    </div>
    <div class="nav__menu">
      <ScrollPanel class="nav__menu-scroll">
        <Menu :model="menuItems" class="nav__menu-element" />
      </ScrollPanel>
    </div>
    <div class="nav__credits">
      <img src="@/assets/cw.png" alt="chordial" />
      <span>CHORDIAL</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'NavMenu',
  setup() {
    const router = useRouter();
    const menuItems = ref([
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: () => {
          router.push('/');
        }
      },
      {
        label: 'Resolvers',
        icon: 'pi pi-fw pi-compass',
        command: () => {
          router.push('/resolvers');
        }
      },
      {
        label: 'Subscriptions',
        icon: 'pi pi-fw pi-fast-forward',
        command: () => {}
      },
      {
        label: 'Data',
        items: [
          { label: 'Types', icon: 'pi pi-fw pi-sitemap', command: () => {} },
          {
            label: 'Collections',
            icon: 'pi pi-fw pi-sitemap',
            url: 'https://www.primetek.com.tr'
          },
          {
            label: 'Pools',
            icon: 'pi pi-fw pi-sitemap',
            url: 'https://www.primetek.com.tr'
          }
        ]
      },
      {
        label: 'Specials',
        items: [
          {
            label: 'Responses & Errors',
            icon: 'pi pi-fw pi-comment',
            command: () => {}
          },
          {
            label: 'Named Operations',
            icon: 'pi pi-fw pi-tags',
            url: 'https://www.primetek.com.tr'
          }
        ]
      },
      { label: '  ', items: [] },
      {
        label: 'Visualization',
        icon: 'pi pi-fw pi-chart-bar',
        command: () => {}
      },
      { label: 'Logs', icon: 'pi pi-fw pi-eye', command: () => {} },
      { label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => {} },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info-circle',
        command: () => {
          router.push('/about');
        }
      },
      { label: 'Donate', icon: 'pi pi-fw pi-money-bill', command: () => {} }
    ]);
    const selectedCity = ref({ name: 'this project', code: 'pr3' });
    const cities = ref([
      { name: 'other project', code: 'pr2' },
      { name: 'this project', code: 'pr3' },
      { name: 'London', code: 'pr4' },
      { name: 'Istanbul', code: 'pr5' },
      { name: 'Paris', code: 'pr6' }
    ]);

    return { cities, selectedCity, menuItems };
  }
});
</script>

<style scoped lang="stylus">
@import '../assets/styles/variables.styl'

.nav
  display flex
  flex-direction column
  height 100vh

.nav__menu
  flex-grow 1
  overflow hidden

  &-scroll
    padding 5px
    height 100%
    max-width 100%

    >>> .p-scrollpanel-content
      padding-right 0

  &-element
    width 100%
    max-width (menu-width - 13)

.nav__credits
  justify-self end
  display flex
  justify-content center
  padding 3px
  align-items center

  img
    width 40px
    margin-right 10px
    margin-bottom 2px

  span
    color white
    font-weight bold
    font-size 1.5rem

.nav__project
  display flex
  padding 5px

.nav__project-dropdown
  flex-grow 1
  margin-right 5px

  >>> .p-inputtext
    padding 10px
</style>
