<template>
  <v-container class="pa-0 my-5" >
    <v-row class="d-flex">
      <v-col  v-for="electronic in electronics" cols="3">
        <StoreItem :product="electronic"></StoreItem>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup >
// your answer
import { useProductStore } from "../stores/ProductStore";
import StoreItem from "./StoreItem.vue";

const productStore = useProductStore();
const electronics = productStore.filterByCategory("Electronics");
productStore.init();
</script>
