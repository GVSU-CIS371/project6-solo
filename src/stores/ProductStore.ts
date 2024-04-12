import { defineStore } from "pinia";
import { ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

export const useProductStore = defineStore("ProductStore", {
  // your answer
  state: () => {
      return{ products: [] as ProductDoc[] }
  },
  actions: {
      init() : void{
        this.$reset()
        for(var product of initProducts)
          this.products.push(product)
      },
      filterByCategory(category:string) : void{
        this.init();
        const filteredProducts: ProductDoc[] = this.products.filter((a:ProductDoc) => 
        {return a.data.category.includes(category)})
        this.$reset();
        for(var product of filteredProducts){
          this.products.push(product)
        }
      },
      filterByRating(minRating:number) : void{
        this.init();
        const ratedProducts: ProductDoc[] = this.products.filter((a:ProductDoc) => 
        {return a.data.rating > minRating})
        this.$reset();
        for(var product of ratedProducts){
          this.products.push(product)
        }
      },
  }
});
