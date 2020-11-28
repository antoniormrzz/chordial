<template>
  <div class="resolvers">
    <div class="resolvers__top">
      <h2 class="p-text">Resolvers</h2>
      <Button icon="pi pi-plus" class="p-button-raised p-button-rounded" />
    </div>
    <div class="resolvers__list p-p-3">
      <DataTable :value="resolvers">
        <Column field="name" header="Name"></Column>
        <Column field="type" header="Operation Type"></Column>
        <Column header="Actions">
          <template #body="slotProps">
            <Button :label="slotProps.data.name" />
          </template>
        </Column>
      </DataTable>
    </div>
    <div class="resolvers__paginations"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const resolvers = [
      { name: 'res1', type: 'query' },
      { name: 'res2', type: 'mutation' },
      { name: 'res4', type: 'query' },
      { name: 'res3', type: 'mutation' },
      { name: 'res5', type: 'mutation' },
      { name: 'res6', type: 'query' }
    ];

    return { resolvers };
  }
});
</script>

<style lang="stylus" scoped>
@import '../assets/styles/colors.styl'
@import '../assets/styles/variables.styl'
@import '../assets/styles/mixins.styl'

.resolvers
  &__top
    page-top()
</style>
