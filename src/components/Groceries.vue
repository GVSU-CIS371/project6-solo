<template>
  <v-container class="pa-0 my-5" >
    <v-row class="d-flex">
      <v-col v-for="product in groceries" cols="3">
        <StoreItem :product="product"></StoreItem>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
// your answer
import { useProductStore } from "../stores/ProductStore";
import StoreItem from "./StoreItem.vue";

const productStore = useProductStore();
const groceries = productStore.filterByCategory("Groceries");
productStore.init();
</script>
