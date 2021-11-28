<template>
  <ProductCard :products="productsArr" :error-message="errorMessage" />
</template>

<script lang="ts">
import { ref, Ref, defineComponent, onMounted, SetupContext } from "@vue/composition-api";

import ProductCard from '@/components/product/ProductCard.vue';
import ProductsModel from "@/models/product/ProductsModel";
import { serviceProducts } from "@/services/product/ServiceProducts";

    export default defineComponent({
        name: "ProductsView",
        components: {
            ProductCard
        },
        setup(_, context: SetupContext){

            const productsArr:Ref<ProductsModel|null> = ref(null);
            const errorMessage: Ref<string> = ref('');

            const findProducts = async () => {
                try {
                    const productSearch = (context.root.$route.query.q).toString();

                    const response = await serviceProducts.getProductByName( productSearch );
                    productsArr.value = new ProductsModel( response );

                    if(response.length <= 0){
                      errorMessage.value = `No se encontraron resultados para: ${ productSearch }`;
                    }

                } catch (e) {
                    console.log("Error: ",e);
                }
            }

            onMounted(() => {
                findProducts();
            })

            return {
              productsArr,
              errorMessage
            }

        }
    });
</script>