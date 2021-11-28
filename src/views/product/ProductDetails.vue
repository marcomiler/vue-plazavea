<template>

  <v-container fluid class="pa-10">

    <div v-if="!product" class="loader"></div>

    <div v-else>

      <div v-if="!existProduct">
        <v-alert
            text
            prominent
            type="warning"
        >
          No se encontró ningún producto con ese ID, intente nuevamente
        </v-alert>
      </div>

      <div v-else>

        <v-row>
          <!--Image product-->
          <v-col cols="12" sm="4" class="pr-md-10 pr-0">
            <v-img
              contain
              width="360"
              height="360"
              :src="product.getImagen()"
            >
            </v-img>
          </v-col>
          <!--End Image product-->

          <v-col cols="12" sm="8">

              <v-row class="d-flex flex-column pr-md-10">
                <v-col class="pa-0">{{ product.getMarca() }}</v-col>
                <v-col class="pa-0"><h2>{{ product.getNomProduct() }}</h2></v-col>
                <v-divider class="divider-cards"></v-divider>
              </v-row>

              <v-row>
                <!--Details Product-->
                <v-col cols="12" md="8">

                  <v-row class="d-flex flex-column">
                    <v-col class="d-flex justify-space-between pl-0 pr-15">
                        <span>Precio Regular</span>
                        <span class="font-weight-bold text-decoration-line-through">S/ {{ product.getPrecUni() }}</span>
                    </v-col>
                    <v-col class="d-flex justify-space-between align-center pl-0 pr-15">
                      <span class="online-price">Precio Online</span>
                      <h3 class="online-price font-weight-bold">S/ 3,739.00</h3>
                      <v-chip
                          dark
                          label
                          small
                          color="#EE3037"
                          class="ma-1 font-weight-bold"
                          id="pointer"
                      >
                        -23%
                      </v-chip>
                    </v-col>
                    <v-col class="pb-0">
                      <p class="text-quota text--disabled mb-0">*El valor de la cuota podría variar en función a la fecha de facturación y pago del cliente.</p>
                    </v-col>
                    <v-col><v-divider></v-divider></v-col>
                    <v-col class="d-flex align-baseline pr-md-10">
                      <v-btn
                          dark
                          rounded
                          color="#9d1e23"
                          class="px-15 mr-2"
                      >
                        Agregar
                      </v-btn>
                      <p class="font-weight-bold text-stock">{{ product.getStock() }}+ unidades disponibles</p>
                    </v-col>
                  </v-row>
                </v-col>
                <!-- End Details Product-->

                <v-col cols="12" md="4">
                  <MarketPlaceCard />
                </v-col>

              </v-row>
          </v-col>

        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { onMounted, defineComponent, Ref, ref,  SetupContext } from "@vue/composition-api";

import MarketPlaceCard from '@/components/cart/MarketPlaceCard';
import ProductItemModel from "@/models/product/ProductItemModel";
import { serviceProducts } from "@/services/product/ServiceProducts";

  export default defineComponent({
    name: "ProductDetails",
    components: {
      MarketPlaceCard
    },

    setup(_, context: SetupContext){

      const product: Ref<ProductItemModel|null> = ref(null);
      const existProduct: Ref<Boolean> = ref(true);

      const findProduct = async () => {
        try {
          const idProduct = Number.parseInt( context.root.$route.params.id );

          const response = await serviceProducts.getProductById( idProduct );
          product.value = new ProductItemModel( response );

          if(product.value?.getIdProduct() == null){
            existProduct.value = false;
          }

        }catch (e) {
          console.log('Error-ProductDetails: ', e);
        }
      }

      onMounted(() => {
        findProduct();
      })

      return {
        product,
        existProduct
      }
    }

  });

</script>

<style scoped>
.online-price{
  color: #EE3037;
}

#pointer {
  height: 30px;
}
#pointer:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-right: 15px solid transparent;
  border-top: 15px solid white;
  border-bottom: 15px solid white;
}

.divider-cards{
  width: 22rem;
}

.text-stock{
  font-size: 0.8rem !important;
}

.text-quota{
  font-size: 0.6rem;
}

</style>