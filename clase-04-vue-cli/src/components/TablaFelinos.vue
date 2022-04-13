<template>
  <v-data-table
    :headers="headers"
    :items="felinosData"
    class="elevation-1"
    hide-default-footer dark
  >
  </v-data-table>

</template>

<script>
import felinosData from './felinos.json';

export default {
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Felino", value: "title" },
        { text: "Descripcion", value: "description" },
        { text: "Imagen", value: "imgUrl" },
      ],
      felinosData
    };
  },
};
</script>

<style>
</style>