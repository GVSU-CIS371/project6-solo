<template>
  <v-container class="pa-0 my-5" >
    <v-row class="d-flex">
      <v-col v-for="products in productStore.products" cols="3">
        <StoreItem :product="products.data"></StoreItem>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
// your answer
import { useProductStore } from "../stores/ProductStore";
import StoreItem from "./StoreItem.vue";

const productStore = useProductStore();
productStore.filterByRating(4.5);
</script>
