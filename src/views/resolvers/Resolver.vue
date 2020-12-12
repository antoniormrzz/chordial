<template>
  <div class="resolver">
    <div class="resolver__top">
      <h2 class="p-text"></h2>
      <Button icon="pi pi-save" class="p-button-raised" label="save" />
    </div>
    <div class="resolver__form">
      <div class="p-field p-d-flex p-flex-column">
        <label for="username2">Name</label>
        <InputText
          id="username2"
          type="username"
          aria-describedby="username2-help"
          class="p-invalid"
        />
        <small id="username2-help" class="p-invalid">
          Invalid Name (/[_A-Za-z][_0-9A-Za-z]*/ and unique)
        </small>
      </div>
      <div class="p-field p-d-flex p-flex-column">
        <label for="username3">Operation</label>
        <Dropdown
          id="username3"
          v-model="selectedResolverType"
          :options="resTypes"
          optionLabel="name"
        />
      </div>
      <div class="p-field p-mb-0 p-d-flex p-flex-column">
        <label for="returnauto">Return Type</label>
        <span class="p-fluid">
          <AutoComplete
            id="returnauto"
            v-model="selectedCountry"
            :suggestions="filteredCountries"
            @complete="searchCountry($event)"
            field="name"
            :dropdown="true"
          />
        </span>
        <div class="p-grid">
          <div class="p-m-1 p-col">
            <RadioButton id="rd1" name="city" value="X" v-model="returnType" />
            <label for="rd1">{{ ' ' }}X</label>
          </div>
          <div class="p-m-1 p-col">
            <RadioButton id="rd2" name="city" value="X!" v-model="returnType" />
            <label for="rd2">{{ ' ' }}X!</label>
          </div>
          <div class="p-m-1 p-col">
            <RadioButton
              id="rd3"
              name="city"
              value="[X]"
              v-model="returnType"
            />
            <label for="rd3">{{ ' ' }}[X]</label>
          </div>
          <div class="p-m-1 p-col">
            <RadioButton
              id="rd4"
              name="city"
              value="[X]!"
              v-model="returnType"
            />
            <label for="rd4">{{ ' ' }}[X]!</label>
          </div>
          <div class="p-m-1 p-col">
            <RadioButton
              id="rd5"
              name="city"
              value="[X!]"
              v-model="returnType"
            />
            <label for="rd5">{{ ' ' }}[X!]</label>
          </div>
          <div class="p-m-1 p-col">
            <RadioButton
              id="rd6"
              name="city"
              value="[X!]!"
              v-model="returnType"
            />
            <label for="rd6">{{ ' ' }}[X!]!</label>
          </div>
        </div>
      </div>
      <Divider align="left">
        <div class="p-d-inline-flex p-ai-center">
          <b>Arguments</b>
        </div>
      </Divider>
      <div class="resolver__form__arguments">
        <div class="resolver__form__arguments__top p-d-flex p-flex-row">
          <InputText
            id="username2"
            type="username"
            placeholder="name"
            aria-describedby="username2-help"
            class="p-invalid p-mb-0"
          />
          <AutoComplete
            id="returnauto"
            class="resolver__form__arguments__top__type p-ml-2"
            v-model="selectedCountry"
            :suggestions="filteredCountries"
            @complete="searchCountry($event)"
            field="name"
            :dropdown="true"
          />
          <Button
            icon="pi pi-plus"
            class="p-button-raised p-ml-2"
            label="Add"
          />
        </div>
        <div>
          <div class="p-grid">
            <div class="p-m-1 p-col">
              <RadioButton
                id="rd1"
                name="city"
                value="X"
                v-model="returnType"
              />
              <label for="rd1">{{ ' ' }}X</label>
            </div>
            <div class="p-m-1 p-col">
              <RadioButton
                id="rd2"
                name="city"
                value="X!"
                v-model="returnType"
              />
              <label for="rd2">{{ ' ' }}X!</label>
            </div>
            <div class="p-m-1 p-col">
              <RadioButton
                id="rd3"
                name="city"
                value="[X]"
                v-model="returnType"
              />
              <label for="rd3">{{ ' ' }}[X]</label>
            </div>
            <div class="p-m-1 p-col">
              <RadioButton
                id="rd4"
                name="city"
                value="[X]!"
                v-model="returnType"
              />
              <label for="rd4">{{ ' ' }}[X]!</label>
            </div>
            <div class="p-m-1 p-col">
              <RadioButton
                id="rd5"
                name="city"
                value="[X!]"
                v-model="returnType"
              />
              <label for="rd5">{{ ' ' }}[X!]</label>
            </div>
            <div class="p-m-1 p-col">
              <RadioButton
                id="rd6"
                name="city"
                value="[X!]!"
                v-model="returnType"
              />
              <label for="rd6">{{ ' ' }}[X!]!</label>
            </div>
          </div>
        </div>
        <div>
          <small id="username2-help" class="p-invalid">
            Invalid Name (/[_A-Za-z][_0-9A-Za-z]*/ and unique)
          </small>
        </div>
      </div>
    </div>
    <div class="resolver__bottom">
      <ScrollPanel class="resolver__bottom__scroll">
        <Card class="p-my-1">
          <template v-slot:content>
            <div class="p-d-flex p-flex-row p-ai-center">
              <div class="resolver__bottom__card__name">sd</div>
              <div class="resolver__bottom__card__type">[X!]!</div>
              <div class="resolver__bottom__card__actions">
                <Button
                  icon="pi pi-trash"
                  class="p-button-raised p-m-0 p-button-danger p-ml-2"
                />
              </div>
            </div>
          </template>
        </Card>
        <Card class="p-my-1">
          <template v-slot:content>
            <div class="p-d-flex p-flex-row p-ai-center">
              <div class="resolver__bottom__card__name">sd</div>
              <div class="resolver__bottom__card__type">[X!]!</div>
              <div class="resolver__bottom__card__actions">
                <Button
                  icon="pi pi-trash"
                  class="p-button-raised p-m-0 p-button-danger p-ml-2"
                />
              </div>
            </div>
          </template>
        </Card>
        <Card class="p-my-1">
          <template v-slot:content>
            <div class="p-d-flex p-flex-row p-ai-center">
              <div class="resolver__bottom__card__name">sd</div>
              <div class="resolver__bottom__card__type">[X!]!</div>
              <div class="resolver__bottom__card__actions">
                <Button
                  icon="pi pi-trash"
                  class="p-button-raised p-m-0 p-button-danger p-ml-2"
                />
              </div>
            </div>
          </template>
        </Card>
        <Card class="p-my-1">
          <template v-slot:content>
            <div class="p-d-flex p-flex-row p-ai-center">
              <div class="resolver__bottom__card__name">sd</div>
              <div class="resolver__bottom__card__type">[X!]!</div>
              <div class="resolver__bottom__card__actions">
                <Button
                  icon="pi pi-trash"
                  class="p-button-raised p-m-0 p-button-danger p-ml-2"
                />
              </div>
            </div>
          </template>
        </Card>
      </ScrollPanel>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectedResolverType = ref({ name: 'Query', code: 'Q' });
    const resTypes = [
      { name: 'Query', code: 'Q' },
      { name: 'Mutation', code: 'M' }
    ];
    const returnType = ref('X!');
    const countries = ref([
      { name: 'string' },
      { name: 'boolean' },
      { name: 'number' },
      { name: 'sdasa' }
    ]);
    const selectedCountry = ref(null);
    const filteredCountries = ref([]);
    function searchCountry(event) {
      if (!event.query.trim().length) {
        filteredCountries.value = [...countries.value];
      } else {
        filteredCountries.value = countries.value.filter((country) => {
          return country.name.toLowerCase().includes(event.query.toLowerCase());
        });
      }
    }

    return {
      selectedResolverType,
      resTypes,
      returnType,
      selectedCountry,
      filteredCountries,
      searchCountry
    };
  }
});
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/colors.styl'
@import '../../assets/styles/variables.styl'
@import '../../assets/styles/mixins.styl'

.resolver
  height 100vh
  display flex
  flex-direction column
  max-height 100vh
  overflow hidden

  &__top
    page-top()

  &__form
    padding 10px
    display flex
    flex-direction column
    flex-grow 1

    &__arguments
      flex-grow 1
      display flex
      flex-direction column

      &__top
        &__type
          flex-grow 1

  &__bottom
    padding 10px
    flex-grow 1
    overflow hidden

    >>> .p-card-content
      padding 0
      align-items center

    &__card__name
      flex-grow 1
      display flex
      flex-direction row
      justify-content flex-start

    &__card__type
      flex-grow 1
      display flex
      flex-direction row
      justify-content flex-start

    &__card__actions
      display flex
      flex-direction row
      justify-content flex-end

    &__scroll
      height 100%
      max-height 100%
      width 100%
</style>
