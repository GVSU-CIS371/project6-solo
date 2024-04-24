import { defineStore } from "pinia";
import { Product, ProductDoc } from "../types/product";
import { db } from "../FireStore";
import { initProducts } from "../data-init";
import { 
  CollectionReference,
  doc,
  setDoc,
  getDocs,
  collection,
  QuerySnapshot,
  QueryDocumentSnapshot,
  deleteDoc,
  updateDoc,
  getCountFromServer,
} from "firebase/firestore";
import { getCurrentInstance } from "vue"; 



export const useProductStore = defineStore("ProductStore", {
  // your answer
  state: () => {
    return{ products: [] as ProductDoc[] }
},
actions: {
    async init() : Promise<void>{
      this.$reset()

      const productList: CollectionReference = collection(db, "productCollection");
      const docCount = await getCountFromServer(productList)

      if (docCount.data().count === 0){
        initProducts.forEach( async (prod: ProductDoc) =>{
          const productDoc = doc(db, "productCollection", prod.id);
          await setDoc(productDoc, {id: prod.id, data: prod.data})
        })
      }

      getDocs(productList).then((qs: QuerySnapshot) => {
        qs.forEach((qd: QueryDocumentSnapshot) => {
          const productData = qd.data() as ProductDoc;
          this.products.push(productData)
          })
        })
    },
    filterByCategory(category:string){
      const filteredProducts: ProductDoc[] = this.products.filter((a:ProductDoc) => 
      {return a.data.category.includes(category)})
      return filteredProducts;
    },
    filterByRating(minRating:number){
      const ratedProducts: ProductDoc[] = this.products.filter((a:ProductDoc) => 
      {return a.data.rating > minRating})
      return ratedProducts;
    },
    async createProduct(prod: Product){
      const productList: CollectionReference = collection(db, "productCollection");
      const docCount = await getCountFromServer(productList)
      const newID = String(docCount.data().count)
      const newProdDoc : ProductDoc = {
        id: newID,
        data: prod
      }
      const productDoc = doc(db, "productCollection", newProdDoc.id);
      setDoc(productDoc, {id: newProdDoc.id, data: newProdDoc.data})
      this.init();
      this.refreshComponent();

    },
    async modifyProduct(id: string, prod: Product){
      const updatedProd = doc(db, "productCollection", id);
      await updateDoc(updatedProd, { 
        "data.name" : prod.name,
        "data.category" : prod.category,
        "data.image" : prod.image,
        "data.description" : prod.description,
        "data.price" : prod.price,
        "data.rating" : prod.rating,
        "data.stock" : prod.stock,
      }).catch((e:any) =>{
        console.log("error" + e)
      })
      this.init();
      this.refreshComponent();  

    },
    
    deleteProduct(id: string){
      const deletedProd =  doc(db, "productCollection", id)
      deleteDoc(deletedProd);
      this.init();
      this.refreshComponent();
    },
    refreshComponent(){
      const instance = getCurrentInstance();
      instance?.proxy?.$forceUpdate;
    }
}
});
