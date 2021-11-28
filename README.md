# my-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

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
        :key="product.id_product"
        v-for="(product) in data"
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
              :src="model.getImageProduct(product.id_product)"
          >
          </v-img>

          <v-card-text class="font-weight-bold">
            {{product.nom_product}}
          </v-card-text>

          <v-card-text class="font-weight-normal">
            <div>S/ {{product.pre_uni}} un</div>
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

<script lang="js">

import { ref, onMounted, defineComponent} from '@vue/composition-api';
import { serviceProducts } from "@/services/product/ServiceProducts";

export default defineComponent({
  name: 'Cart',
  setup(){
    const data = ref(new Array());

    async function loadData(){
      data.value = await serviceProducts.getProducts();
    }

    onMounted(() => {
      loadData();
    });

    return {
      data,
      model: serviceProducts
    }
  }
});
</script>

<style>
.btn-cart:hover{
  background-color: #9d1e23;
  color: #fff !important;
}
</style>