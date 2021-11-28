<template>
    <v-container class="pr-0 pl-0" fluid>
      <v-slide-group
        show-arrows="mobile"
      >
        <v-slide-item
          :key="banner.id"
          v-for="(banner) in banners"
        >
          <v-card
            class="ma-2"
            width="280"
          >
            <v-img
              contain
              :src="banner.link"
            >
            </v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>    
</template>

<script>
    export default {
        name: 'Banners',
        components: {
        },
        methods : {
          resize(){
            this.$refs.carousel.update();
          }
        },
        data: () => ({
          banners: [
            { id: 1, link: "https://plazavea.vteximg.com.br/arquivos/BANNER-BENEFICIO-HOME-%20PRINCIPAL-DELIVERY-GRATIS-V3.png" },
            { id: 2, link: "https://plazavea.vteximg.com.br/arquivos/AGORA-SHOP-HP-30-11.png" },
            { id: 3, link: "https://plazavea.vteximg.com.br/arquivos/DESPACHO-GRATIS-HP-HE-06-14NOV.png" },
            { id: 4, link: "https://plazavea.vteximg.com.br/arquivos/NF-2-BENEFICIOS-RETIRO-TIENDA-HP-06-14NOV.png" },],
          hooperSettings: {
            playSpeed: 3500,
            rtl: true,
            trimWhiteSpace: true,
            wheelControl: false,
            breakpoints: {
              0: {
                itemsToShow: 1.1
              },
              300: {
                itemsToShow: 1.09
              },
              600: {
                itemsToShow: 2.4
              },
              1100: {
                itemsToShow: 3.5
              },
              1500: {
                itemsToShow: 3.8
              },
              1600: {
                itemsToShow: 4
              }
            }
          }
        })
      }
</script>

<style>
  .banners{
    top: -1.5rem;
  }
  
  .v-slide-group__content{
    justify-content: space-between;
  }

  .v-slide-group__content div{
    margin-left: 0px !important;
    margin-right: 0px !important;
  }

  .v-slide-group__prev
  {
    top: 20%;
    z-index: 1;
    right: 1rem;
    padding: 0.8rem;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0.1rem 0.2rem #888888;
  }

  .v-slide-group__next
  {
    top: 50%;
    z-index: 1;
    right: 1rem;
    padding: 0.8rem;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0.1rem 0.2rem #888888;
  }

  .v-slide-group__prev:hover,
  .v-slide-group__next:hover {
    box-shadow: none; 
    background-color: #000;
  }

  .v-slide-group__next:hover .theme--light.v-icon,
  .v-slide-group__prev:hover .theme--light.v-icon{
    color: #fff;
  }


</style>