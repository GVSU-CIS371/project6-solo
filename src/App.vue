<template>
  <v-app>
    <v-app-bar class="bg-blue-darken-4">
      <v-toolbar-title>My Online Store</v-toolbar-title>
      <v-btn class="mx-5" v-for="link in links" :key="link.text" :to="link.to">
        <v-icon>{{ link.icon }}</v-icon>
        {{ link.text }}
      </v-btn>
      <v-btn @click="showDialog()">Create</v-btn>

      <v-dialog v-model="dialog" max-width="600">
        <v-card title="Create New Product">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field 
                label="Product Name" 
                required 
                v-model="newProd.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-text-field 
                label="Description" 
                required 
                v-model="newProd.description"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                label="Price"
                required
                v-model="newProd.price"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                label="Rating"
                required
                v-model="newProd.rating"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                label="Stock"
                required
                v-model="newProd.stock"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                label="Image Link"
                required
                v-model="newProd.image"
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
                v-model="newProd.category"
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
        Confirm Selection?
        </v-card-text>
        <v-btn text="Cancel" variant="plain" @click="confirmDialog = false"></v-btn>

          <v-btn
            color="primary"
            text="Yes"
            variant="tonal"
            @click="productStore.createProduct(newProd); dialog = false; confirmDialog = false"
          ></v-btn>
        </v-card>
      </v-dialog>
      



    </v-app-bar>
    <v-main class="bg-blue-lighten-5">
      <router-view v-slot="{ Component }">
        <transition name="shrink-explode">
          <component :is="Component"/>
        </transition>
      </router-view>
    </v-main>

    <v-footer color="primary" app>
      © 2023 My Online Store. All rights reserved.
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Product } from "./types/product";
import { useProductStore } from "./stores/ProductStore";

const productStore = useProductStore()

const newProd = ref<Product>({
  name: "",
  description: "",
  price: 0,
  rating: 0,
  stock: 0,
  image: "",
  category: "", 
});

const dialog = ref(false);
const confirmDialog = ref(false);
const links = ref([
  { text: "Home", to: "/", icon: "mdi-home" },
  { text: "Electronics", to: "/electronics", icon: "mdi-laptop" },
  { text: "Clothing", to: "/clothing", icon: "mdi-tshirt-crew" },
  { text: "Groceries", to: "/groceries", icon: "mdi-cart" },
  { text: "Best Seller", to: "/bestseller", icon: "mdi-cash-register" },
]);

function showDialog(){
  dialog.value =  true
}


</script>
