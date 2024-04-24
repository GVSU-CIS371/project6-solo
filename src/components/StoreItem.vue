<template>
  <!-- your answer -->
  <v-sheet 
    class="d-flex flex-column align-center justify-space-evenlys text-center pa-4"
    :rounded="true"
    elevation="15"
    height="450"
  >
    
      <h2 class="text-h5">{{ curProduct.product.data.name }}</h2>

      <div class="d-flex justify-space-between align-center">
        <div class="d-flex justify-left">
          <div v-for="n in 5">
            <v-icon v-if="n <= curProduct.product.data.rating"
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
          {{ curProduct.product.data.price }}
        </div>
        <div>
          <v-icon 
            icon="mdi-package-variant"
            color="orange-darken-2">
          </v-icon>
          {{ curProduct.product.data.stock }}
        </div>
      </div>
      <v-img :src="curProduct.product.data.image" :width="200" :height="200"></v-img>
      <p class="text-body-2">
        {{ curProduct.product.data.description }}
      </p>
      <div class="d-flex justify-space-between">
        <v-btn color="secondary" text="Delete" @click="confirmDialogDel = true"></v-btn>
        <v-btn color="primary" text="update" @click="displayModifyWindow();"></v-btn>
      </div>
    
    
  </v-sheet>

  <v-dialog v-model="confirmDialogDel" max-width="600">
        <v-card title="Confirm selection">
        <v-card-text>
        Confirm Selection? This will delete existing product information.
        </v-card-text>
          <v-btn
            color="primary"
            text="Yes"
            variant="tonal"
            @click="productStore.deleteProduct(curProduct.product.id); confirmDialogDel = false"
          ></v-btn>
          <v-btn text="Cancel" variant="plain" @click="confirmDialog = false"></v-btn>  
        </v-card>
      </v-dialog>

  <v-dialog v-model="dialog" max-width="600">
        <v-card title="Update Selected Product">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field 
                label="Product Name" 
                required 
                v-model="newProdData.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-text-field 
                label="Description" 
                required 
                v-model="newProdData.description"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                label="Price"
                required
                v-model="newProdData.price"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                label="Rating"
                required
                v-model="newProdData.rating"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                label="Stock"
                required
                v-model="newProdData.stock"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                label="Image Link"
                required
                v-model="newProdData.image"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="[
                  'Electronics',
                  'Clothing',
                  'Groceries',
                ]"
                label="Category"
                auto-select-first
                v-model="newProdData.category"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="confirmDialog = true"
          ></v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
      <v-dialog v-model="confirmDialog" max-width="600">
        <v-card title="Confirm selection">
        <v-card-text>
        Confirm Selection? This will overwrite existing product information.
        </v-card-text>
          <v-btn
            color="primary"
            text="Yes"
            variant="tonal"
            @click="productStore.modifyProduct(curProduct.product.id, newProdData); dialog = false; confirmDialog = false"
          ></v-btn>
          <v-btn text="Cancel" variant="plain" @click="confirmDialog = false"></v-btn>  
        </v-card>
      </v-dialog>
</template>

<script lang="ts" setup>  
import { Product, ProductDoc } from "../types/product";
import { ref } from "vue";
import { useProductStore } from "../stores/ProductStore";

const productStore = useProductStore()

type Prop = {
  product: ProductDoc
}
const curProduct = defineProps<Prop>()
const dialog = ref(false);
const confirmDialog = ref(false);
const confirmDialogDel = ref(false);

const newProdData = ref<Product>({
  name: curProduct.product.data.name,
  description: curProduct.product.data.description,
  price: curProduct.product.data.price,
  rating: curProduct.product.data.rating,
  stock: curProduct.product.data.stock,
  image: curProduct.product.data.image,
  category: curProduct.product.data.category, 
});

function displayModifyWindow(){
  dialog.value = true;
}

</script>
