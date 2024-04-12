<template>
  <!-- your answer -->
  <v-sheet 
    class="d-flex flex-column align-center justify-center flex-wrap text-center pa-4"
    :rounded="true"
    elevation="15"
    height="400"
  >
    <div>
      <h2 class="text-h5">{{ curProduct.product.name }}</h2>

      <div class="d-flex justify-space-between align-center">
        <div class="d-flex justify-left">
          <div v-for="n in 5">
            <v-icon v-if="n <= curProduct.product.rating"
              icon="mdi-star"
              color="yellow-darken-2"></v-icon>
            <v-icon v-else
              icon="mdi-star-outline"
              color="yellow-darken-2"></v-icon>
          </div>
        </div>
        <div>
          <v-icon 
            icon="mdi-currency-usd"
            color="green-darken-2">
          </v-icon>
          {{ curProduct.product.price }}
        </div>
        <div>
          <v-icon 
            icon="mdi-package-variant"
            color="orange-darken-2">
          </v-icon>
          {{ curProduct.product.stock }}
        </div>
      </div>

      <v-img :src="curProduct.product.image"
        :height="200"
      ></v-img>

      <p class="text-body-2">
        {{ curProduct.product.description }}
      </p>
    </div>
    
  </v-sheet>
</template>

<script lang="ts" setup>
// your answer
import { Product } from "../types/product";
type Prop = {
  product: Product
}
const curProduct = defineProps<Prop>()

</script>
