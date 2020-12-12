<template>
  <div class="resolvers">
    <div class="resolvers__top">
      <h2 class="p-text">Resolvers</h2>
      <Button
        icon="pi pi-plus"
        class="p-button-raised p-button-rounded"
        @click="goNewResolver"
      />
    </div>
    <div class="resolvers__list p-p-3">
      <DataTable
        :value="resolvers"
        :paginator="true"
        :rows="10"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 20]"
        currentPageReportTemplate="Showing
        {first} to {last} of {totalRecords}"
      >
        <Column header="Name">
          <template #body="slotProps">
            <span
              :style="{
                textDecoration: slotProps.data.paused ? 'line-through' : 'none',
                color: slotProps.data.paused ? 'red' : 'white'
              }"
              >{{ slotProps.data.name }}</span
            >
          </template></Column
        >
        <Column header="Operation Type">
          <template #body="slotProps">
            <span
              :style="{
                color: slotProps.data.type === 'query' ? 'turquoise' : 'tomato'
              }"
              >{{ slotProps.data.type }}</span
            >
          </template>
        </Column>
        <Column header="Actions">
          <template #body="slotProps" class="p-d-flex">
            <Button
              v-tooltip.top="'pause/resume'"
              :icon="slotProps.data.paused ? 'pi pi-play' : 'pi pi-pause'"
              class="p-m-1 p-button-success p-button-rounded"
              @click="
                handleAction(
                  slotProps.data.name,
                  slotProps.data.type,
                  actionTypes.pause
                )
              "
            />
            <Button
              v-tooltip.top="'edit'"
              icon="pi pi-pencil"
              class="p-m-1 p-button-warning p-button-rounded"
              @click="
                handleAction(
                  slotProps.data.name,
                  slotProps.data.type,
                  actionTypes.edit
                )
              "
            />
            <Button
              v-tooltip.top="'remove'"
              icon="pi pi-trash"
              class="p-m-1 p-button-danger p-button-rounded"
              @click="
                handleAction(
                  slotProps.data.name,
                  slotProps.data.type,
                  actionTypes.remove
                )
              "
            />
          </template>
        </Column>
      </DataTable>
    </div>
    <div class="resolvers__paginations"></div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const actionTypes = {
      pause: 'pause',
      edit: 'edit',
      remove: 'remove'
    };
    const router = useRouter();
    const resolvers = reactive([
      { name: 'res1', type: 'query', paused: false },
      { name: 'res2', type: 'mutation', paused: false },
      { name: 'res4', type: 'query', paused: true },
      { name: 'res3', type: 'mutation', paused: false },
      { name: 'res5', type: 'mutation', paused: false },
      { name: 'res6', type: 'query', paused: false },
      { name: 'res7', type: 'query', paused: false },
      { name: 'res8', type: 'query', paused: false },
      { name: 'res9', type: 'query', paused: false },
      { name: 'res6', type: 'mutation', paused: false }
    ]);
    const goNewResolver = () => {
      router.push('/resolvers/new');
    };
    const handleAction = (name, type, action) => {
      console.log(name, type, action);
    };

    return { resolvers, goNewResolver, handleAction, actionTypes };
  }
});
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/colors.styl'
@import '../../assets/styles/variables.styl'
@import '../../assets/styles/mixins.styl'

.resolvers
  &__top
    page-top()

  &__list >>> .p-datatable.p-component
    table
      td
        padding-top 5px
        padding-bottom 5px
</style>
