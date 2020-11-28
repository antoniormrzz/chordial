<template>
  <div class="home">
    <div class="home__top">
      <h2 class="p-text">this project</h2>
      <Button icon="pi pi-cog" class="p-button-raised p-button-rounded" />
    </div>
    <div class="home__infocuts p-grid p-m-0 p-p-3">
      <Button class="p-mr-1 p-mb-1" icon="pi pi-compass" label="Resolvers" />
      <Button class="p-mr-1 p-mb-1" icon="pi pi-sitemap" label="Types" />
      <Button class="p-mr-1 p-mb-1" icon="pi pi-sitemap" label="Collections" />
      <Button
        class="p-mr-1 p-mb-1"
        icon="pi pi-tags"
        label="Named Operations"
      />
      <Button class="p-mr-1 p-mb-1" icon="pi pi-comment" label="Responses" />
      <Button class="p-mr-1 p-mb-1" icon="pi pi-eye" label="Logs" />
    </div>
    <div class="p-p-3 home__server">
      <Card class="p-px-2 p-py-2">
        <template v-slot:header>
          <div class="p-d-flex p-ai-center p-jc-between">
            <h3 class="p-my-0 p-ml-1">Server</h3>
            <div class="p-d-flex">
              <Button
                icon="pi pi-play"
                class="p-button-raised p-button-rounded p-mx-1"
              />
              <Button
                icon="pi pi-pause"
                class="p-button-raised p-button-rounded p-mx-1"
              />
              <Button
                icon="pi pi-replay"
                class="p-button-raised p-button-rounded p-mx-1"
              />
            </div>
          </div>
          <div class="home__server-ip p-ml-1 p-mt-1 p-d-inline p-p-1">192.168.1.2:3000</div>
        </template>
        <template v-slot:content>
          <div>
            dfault server is graphql-express, currently there is only one server
            blah blah blah blah, and then some more blah blah blah
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>

<style lang="stylus" scoped>
@import '../assets/styles/colors.styl'
@import '../assets/styles/variables.styl'
@import '../assets/styles/mixins.styl'

.home
  &__top
    page-top()

  &__server
    &-ip
      background darkgreen
      border-radius 5px
</style>
