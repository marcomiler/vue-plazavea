<template>
  <!--Payment Methods-->
    <v-card
        flat
        outlined
        max-width="100%"
        class="card-payment py-3 px-3"
    >
      <v-row class="d-flex flex-column">
        <v-col class="pb-0"><h5>Vendido y despachado por:</h5></v-col>
        <v-col class="pb-0"><h5 class="text-uppercase">blackbull shoop</h5></v-col>
        <v-col class="pt-1"><a href="#" class="text-terms">Términos y condiciones</a></v-col>
        <v-divider class="mx-2"></v-divider>
        <v-col class="pb-0"><h5>Tipo de entrega disponible</h5></v-col>

        <v-row class="d-flex">
          <v-col cols="3">
            <v-img
                width="50"
                height="50"
                contain
                src="https://plazavea.vteximg.com.br/arquivos/zona_reparto_ficha.png"
            >
            </v-img>
          </v-col>
          <v-col cols="9" class="d-flex flex-column">
            <span class="text-delivery">Delivery programado</span>
            <a href="#" class="text-distrits font-weight-bold">Ver distritos</a>
          </v-col>
        </v-row>
        <v-col class="pb-0"><v-divider class="mx-2"></v-divider></v-col>
        <v-col><h5>Métodos de pago</h5></v-col>
        <v-col class="pb-0 d-flex justify-start">
          <span class="text-delivery">Págalo online con</span>

          <v-img
              width="50"
              height="20"
              contain
              src="https://plazavea.vteximg.com.br/arquivos/pagoweb-logo.png?v=637660202772630000"
          >
          </v-img>
          <v-spacer></v-spacer>
        </v-col>
        <v-col>
          <v-img
              contain
              max-width="200"
              src="https://plazavea.vteximg.com.br/arquivos/medios-de-pago-ficha.png?v=637656833186800000"                    ></v-img>
        </v-col>
        <v-col><v-divider class="mx-2"></v-divider></v-col>

        <v-col class="pb-0"><h5>Producto con envío internacional</h5></v-col>
        <v-col>
          <p class="text-envio pb-0">Impuestos incluidos. No tendrás cobros extras.</p>
          <p class="text-envio">Cuenta con garantía de satisfacción.</p>
          <a href="#" class="text-terms-black">Ver Términos y condiciones</a>
        </v-col>
      </v-row>
    </v-card>
  <!--End Payment Methods-->
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "MarketPlaceCard",
  setup(){

  }

});
</script>

<style scoped>
.text-terms,
.text-distrits,
.text-delivery,
.text-terms-black{
  font-size: 0.8rem !important;
}

.text-envio{
  font-size: 0.75rem;
}

.text-terms{
  color: #9d1e23;
}

.text-terms-black{
  color: #000000;
}

.text-distrits{
  color: #000000;
}

.card-payment{
  border-bottom: 0.3rem solid;
  border-bottom-color: #cc292e;
}
</style>