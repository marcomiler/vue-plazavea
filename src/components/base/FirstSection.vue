<template>

  <v-container class="container-cards d-sm-flex d-block flex-nowrap" fluid>
    <v-card
    class="cards"
    elevation="5"
    :key="item.code"
    :width="cardWidth"
    :height="cardHeight"
    :color="item.color"
    v-for="(item) in card"
    >

    <v-row class="cards-row ml-1 mr-1 mt-1 pb-2">
      <v-col class="pb-0" cols="12">
          <span class="text-md-h5 text-subtitle font-weight-black" v-text="item.title"></span>
      </v-col>
      <v-col cols="9" md="12">
        <v-card-text class="text-body-1 pa-0" v-text="item.subtitle"></v-card-text>
      </v-col>

      <v-col class="order-md-1 pa-0"  cols="3" md="3">
        <v-img
            class="card-img"
            alt=""
            contain
            max-width="100px"
            max-height="100px"
            min-width="50px"
            min-height="50px"
            :src="item.img"
        >
        </v-img>
      </v-col>
      <v-col class="d-md-none pa-1 ma-0">
        <v-divider></v-divider>
      </v-col>
      <v-col class="pa-sm-2 pa-0" cols="12" md="9">
        <v-btn
            dark
            rounded
            outlined
            color="#9d1e23"
            class="order-md-2 btn-cards"
            v-text="item.text_button"
        >
        </v-btn>
      </v-col>
    </v-row>

    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'FirstSection',
  computed: {
    cardWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'md': return '350px'
      }
    },
    cardHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'md': return ''
      }
    },
  },
  data: () => ({
    card: [
      {
        code: '1',
        color: '#fff',
        title: 'Supermercado',
        subtitle: "Entregas desde 24 horas! Compra de todo a precios bajos.",
        text_button: "Conoce lo mejor",
        img: "https://plazavea.vteximg.com.br/arquivos/home-nav-expressVea.png"
      },
      {
        code: '2',
        color: '#fff',
        title: 'Electro, Hogar y más',
        subtitle: "Lo último en tecnología, electrohogar," +
            "deportes, moda, infantil y más.",
        text_button: "Descubre todo",
        img: "https://plazavea.vteximg.com.br/arquivos/home-nav-expressVea.png"
      },
      {
        code: '3',
        color: '#fddf99',
        title: 'Delivery Express',
        subtitle: "¡Entrega en 90 minutos! " +
            "Compra un máximo de 15 productos.",
        text_button: "Haz tu pedido",
        img: "https://plazavea.vteximg.com.br/arquivos/home-nav-expressVea.png"
      },
    ],
  })
}
</script>

<style>
  .container-cards{
    gap: 1.2rem;
  }
  .cards {
    border-radius: 0.8rem !important;
    margin-bottom: 1rem;
    top: -4rem;
  }

  .btn-cards:hover{
    color: #fff !important;
    background-color: #9d1e23;
    border-color: #9d1e23 !important;
  }
</style>