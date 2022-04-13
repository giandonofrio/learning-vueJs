<template>
  <v-app>
    
    <tabla-felinos/>
  
  </v-app>
</template>

<script>
import TablaFelinos from './components/TablaFelinos.vue';

export default {
  name: 'App',

  components: {
    TablaFelinos,
  },

  data: () => ({
    //
  }),
};
</script>
