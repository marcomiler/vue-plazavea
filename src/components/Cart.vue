<template>
  <v-container fluid>
    <v-row class="ma-1 d-flex justify-center">
      <h1 class="text-h5 text-sm-h3 font-weight-bold">
        Descuentos en todas nuestras categorias
      </h1>
    </v-row>
    <v-row 
      d-flex 
      class="justify-center"
    >
      <v-col 
        sm="3"
        cols="6"
        :key="categorie.getIdCategory()"
        v-for="(categorie) in categoriesArray.getCategories()"
      >
        <v-card
            width="250"
            height="350"
            elevation="6"
        >
          <v-img
              contain
              width="150"
              height="150"
              class="mx-auto"
              :src="categorie.getImagen()"
          >
          </v-img>

          <v-card-text class="font-weight-bold">
            {{ categorie.getNomProduct() }}
          </v-card-text>

          <v-card-actions>
            <v-btn
                dark
                block
                rounded
                outlined
                color="#9d1e23"
                class="btn-cart pa-4 mb-3"
            >
              Agregar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Ref, ref, onMounted, defineComponent} from '@vue/composition-api';

import { serviceCategories } from "@/services/categories/ServiceCategories";
import CategoriesModel from '@/models/categories/CategoriesModel';

export default defineComponent({
  name: 'Cart',
  setup(){
    const categoriesArray: Ref<CategoriesModel|null> = ref(null);

    const loadData = async () => {
      try {
        const response = await serviceCategories.getCategories();
        //console.log("response: " + response);
        categoriesArray.value = new CategoriesModel(response);
      }catch (e) {
        //console.log('error Cart: ', e);
      }

    }

    onMounted(() => {
      loadData();
    });

    return {
      categoriesArray,
    }
  }
});
</script>

<style scoped>
.btn-cart:hover{
  background-color: #9d1e23;
  color: #fff !important;
}
</style>