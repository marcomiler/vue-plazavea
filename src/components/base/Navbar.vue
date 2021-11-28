<template>
  <v-container fluid>
    <v-row class="pb-3">
      <v-app-bar
          color="red accent-4"
      >

      <v-toolbar-title class="mr-5">
        <v-img class="d-none d-md-block" src="https://plazavea.vteximg.com.br/arquivos/LogoPlazaVea.svg"></v-img>

        <v-img class="d-block d-md-none" src="https://plazavea.vteximg.com.br/arquivos/IconLogo.svg"></v-img>
      </v-toolbar-title>

        <v-text-field
            hide-details
            rounded
            solo
            color="black"
            @keyup.enter="onSearch"
            append-icon="mdi-magnify"
            v-model="txtSearchProduct"
            v-on:keyup="getSuggestions()"
            label="Hola,¿Qué estás buscando?"
        >
          <template slot="append">
            <v-btn
                class="search-btn"
                @click="onSearch"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>

        </v-text-field>

      <v-spacer></v-spacer>

        <v-chip-group
            dark
            color="white"
            mandatory
        >
          <v-chip
           color="red accent-4"
           label
           class="d-none d-md-block"
          >
            <v-icon color="white accent-4">mdi-heart</v-icon>{{$t('label_orders')}}
          </v-chip>

          <v-chip
              color="red accent-4"
              label
          >
            <v-icon color="white accent-4">mdi-account</v-icon> <span class="d-none d-sm-block">Mi Cuenta</span>
          </v-chip>

            <v-chip
                color="red accent-4"
                label
            >
              <v-icon>mdi-cart</v-icon>
            </v-chip>

        </v-chip-group>
    </v-app-bar>
    </v-row>

    <!-- List of Suggestion -->
    <div v-if="productsArr && txtSearchProduct.length > 0">
      <v-card
          class="suggestions-list mx-auto"
      >
        <v-list shaped>
          <v-list-item-group
              color="primary"
          >
            <v-list-item
                v-for="(product, i) in productsArr.getProducts()"
                :key="i"
                @click="onClick(product.getIdProduct())"
            >
              <v-list-item-content>
                <v-list-item-title class="d-flex">
                  {{product.getNomProduct()}}
                  <v-img
                      contain
                      width="50"
                      height="50"
                      :src="product.getImagen()"
                  ></v-img>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>

    <div v-else>
      <div class="d-none"></div>
    </div>
<!--     End List of Suggestion -->

    <v-row>
        <v-app-bar
            color="red accent-4"
            dark
        >
          <v-chip
              @click.stop="drawer = !drawer"
              color="red accent-4"
              label
          >
            <v-app-bar-nav-icon color="white accent-4"></v-app-bar-nav-icon>
            Comprar por categoría
          </v-chip>

          <v-spacer></v-spacer>

          <div class="categories d-md-flex d-sm-none d-none">
            <div>
              <v-icon>mdi-magnify</v-icon>
              <span>Internacional</span>
            </div>

            <div>
              <v-icon>mdi-account</v-icon>
              <span>Novedades</span>
            </div>

            <div>
              <span>Ofertas Oh</span>
            </div>
            <div>
              <span>Lista Vea</span>
            </div>
            <div>
              <span>Catalogos Vea</span>
            </div>
          </div>
            <v-select
              solo
              dense
              class="ml-2"
              item-text="id"
              :items="languages"
              v-model="default_language"
              @change="selectLanguage($event)"
            >
            </v-select>

        </v-app-bar>

        <v-navigation-drawer
            class="drawer"
            v-model="drawer"
            absolute
            temporary
        >
          <v-list
              nav
          >
            <v-list-item-group
                active-class="deep-red--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title>Supermercado</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Calzado y moda</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Tecnología</v-list-item-title>
              </v-list-item>

            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Ref, ref, defineComponent, SetupContext } from "@vue/composition-api";

  import i18n from "@/plugins/i18n";
  import { WebPages } from "@/contants";
  import ProductsModel from "@/models/product/ProductsModel";
  import { serviceProducts } from '@/services/product/ServiceProducts';

  export default defineComponent({
    name: 'Navbar',
    setup(_, context: SetupContext){
        const drawer = false;
        const default_language = "es";
        const txtSearchProduct = ref('');
        const productsArr: Ref<ProductsModel|null> = ref(null);

        const items: Ref<Array<any>> = ref([
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ])

        const languages: Array<any> = [
          { id: 'en', title: 'Ingles' },
          { id: 'es', title: 'Español' },
        ];

        function selectLanguage(language: any) {
          i18n.locale = language;
        }

        const getSuggestions = async () => {

          if(txtSearchProduct.value.trim().length <= 0) {
            productsArr.value = null;
            return;
          }

          const resp = await serviceProducts.getProductByName( txtSearchProduct.value.toLowerCase().toString() );

          productsArr.value = new ProductsModel( resp );
          console.log(txtSearchProduct.value);

        }

      const onClick = (idProduct: any) => {
        txtSearchProduct.value = '';
        context.root.$router.push({
          name: WebPages.PRODUCTDETAIL,
          params: { id: idProduct }
        }).catch(e => console.log('Error-ProductCard: ', e));

      }

        const onSearch = ()  => {
          if(txtSearchProduct.value.trim().length <= 0 ) return;
          productsArr.value = null;
          context.root.$router.push({
            name: WebPages.PRODUCT,
            query: {
              q: txtSearchProduct.value
            }
          }).catch(e => console.log("Error-Navbar: ",e));
        }

        return {
          drawer,
          languages,
          selectLanguage,
          txtSearchProduct,
          default_language,

          items,
          onClick,
          onSearch,
          productsArr,
          getSuggestions
        }
    }    
  });
</script>

<style scoped>
.categories {
  gap: 1.5rem;
}
.v-input{
  padding: 0;
  width: 30px !important;
  display: flex !important;
  align-self: center !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-items: center !important;
  align-content: center !important;
}

.v-input__control{

  width: 50px;
}

.v-btn__content{
  padding: 0px !important;
}

.v-input__slot{
  margin-right: 0 !important;
  width: 50px;
}

.theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {
    background: none !important; 
    font-weight: 500 !important;
    color: #fff !important;
}

.v-select__selections.input{
  color: #fff !important;
}

.search-btn{
  box-shadow: none;
  border-radius: 50rem;
  padding: 0 !important;
  background-color: white !important;
}

.search-btn:hover{
  background-color: white !important;
}

.suggestions-list{
  z-index: 1;
  width: 97.5%;
  margin-right: 1rem !important;
  position: absolute !important;
}

</style>

