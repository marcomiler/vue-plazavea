<template>
  <v-container fluid class="footer">
    <v-list color="#f6f6f6">
      <v-list-group
          v-for="item in items"
          :key="item.title"
          color="red accent-4"
          v-model="item.active"
          no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
            v-for="child in item.items"
            :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    items: [
      {
        items: [
          { title: 'Conócenos' },
          { title: 'Vea Club' },
          { title: 'Trabaja con nosotros' },
        ],
        title: 'Nosotros',
      },
      {
        items: [
          { title: 'Tarjeta Oh' },
          { title: 'Concursos' },
          { title: 'Vende con nosotros' },
        ],
        title: 'Te informamos',
      },
      {
        items: [
          { title: 'Tutorial de compra' },
          { title: 'Horarios de atención telefónica' },
          { title: 'Preguntas frecuentes' },
          { title: 'Cambios y devoluciones' },
        ],
        title: 'Atención al cliente',
      },
      {
        items: [
          { title: 'Política de datos personales' },
          { title: 'Derecho ARCO y privacidad' },
          { title: 'Condiciones de promociones' },
          { title: 'Términos y condiciones' },
        ],
        title: 'Políticas y condiciones',
      }
    ],
  })
}
</script>

<style>
  .footer {
    background-color: #f6f6f6;
  }
</style>