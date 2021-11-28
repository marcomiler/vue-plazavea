<template>
  <v-container fluid>
    <div v-if="!products" class="loader"></div>

    <div v-else>

      <v-row class="ma-1 d-flex justify-center">
        <h1 class="text-h5 text-sm-h3 font-weight-bold">
          Resultados de la búsqueda
        </h1>
      </v-row>

      <div v-if="errorMessage != '' ">
        <v-alert
            text
            prominent
            type="warning"
        >
          {{ errorMessage }}
        </v-alert>
      </div>

      <v-row
          d-flex
          class="justify-center"
      >
        <v-col
            sm="3"
            cols="10"
            :key="'key_'+i"
            v-for="(product, i) in products.getProducts()"
        >
          <v-card
              width="250"
              height="350"
              elevation="6"
              @click="onClick(product.getIdProduct())"
              class="product-card"
          >
            <v-img
                contain
                width="150"
                height="150"
                class="mx-auto"
                :src="product.getImagen()"
            >
            </v-img>

            <v-card-text class="font-weight-bold">
              {{product.getNomProduct()}}
            </v-card-text>

            <v-card-text class="font-weight-normal">
              <div>S/ {{product.getPrecUni()}} un</div>
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
    </div>
  </v-container>
</template>

<script lang="ts">

import { defineComponent, SetupContext } from '@vue/composition-api';
import ProductItemModel from '@/models/product/ProductItemModel';
import { WebPages } from "@/contants";

export default defineComponent({
  name: 'ProductCard',
  props: {
    products: {
      type: Object as () => Array<ProductItemModel>,
    },
    errorMessage: {
      type: String
    }
  },
  setup(_, context: SetupContext){

    const onClick = (idProduct: any) => {
      context.root.$router.push({
        name: WebPages.PRODUCTDETAIL,
        params: { id: idProduct }
      }).catch(e => console.log('Error-ProductCard: ', e));

    }

    return {
      onClick
    }
  }
});
</script>

<style>
.btn-cart:hover{
  background-color: #9d1e23;
  color: #fff !important;
}

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: loader 1.8s infinite ease-in-out;
}
.loader {
  color: #D50000;
  font-size: 10px;
  margin: 2rem auto 5rem;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
}

.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}

.product-card{
  cursor: pointer;
}

@keyframes loader {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>