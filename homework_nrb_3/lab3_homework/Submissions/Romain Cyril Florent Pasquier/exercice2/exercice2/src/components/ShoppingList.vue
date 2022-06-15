<template>
  <p v-if="tot == 0">There is nothing in your basket</p>
  <p v-else>Your Basket got : {{tot}} products<br>Total price is : {{totalprice}}</p>

  <h1 v-if="tot != 0">
  <li v-for="product in this.products" :key="product">
      <p v-if="product.numbercom != 0">name : {{product.name}}, number of command : {{product.numbercom}}, total price : {{product.pricecom}}</p>
  </li>
  </h1>
</template>

<script>
class ProductShop {
  constructor(name, numbercom, pricecom) {
    this.name = name;
    this.numbercom = numbercom;
    this.pricecom = pricecom;
  }
}
export default {
  name: "ShoppingList",
  props:['name0', 'numcom0', 'pricecom0',
         'name1', 'numcom1', 'pricecom1',
         'name2', 'numcom2', 'pricecom2',
         'name3', 'numcom3', 'pricecom3',
         'name4', 'numcom4', 'pricecom4',
         'name5', 'numcom5', 'pricecom5',
         'name6', 'numcom6', 'pricecom6',
         'name7', 'numcom7', 'pricecom7',
         'name8', 'numcom8', 'pricecom8',
         'name9', 'numcom9', 'pricecom9',
  ],
  data() {
    return {
      products: [new ProductShop(this.name0, this.numcom0, this.pricecom0),
                 new ProductShop(this.name1, this.numcom1, this.pricecom1),
                 new ProductShop(this.name2, this.numcom2, this.pricecom2),
                 new ProductShop(this.name3, this.numcom3, this.pricecom3),
                 new ProductShop(this.name4, this.numcom4, this.pricecom4),
                 new ProductShop(this.name5, this.numcom5, this.pricecom5),
                 new ProductShop(this.name6, this.numcom6, this.pricecom6),
                 new ProductShop(this.name7, this.numcom7, this.pricecom7),
                 new ProductShop(this.name8, this.numcom8, this.pricecom8),
                 new ProductShop(this.name9, this.numcom9, this.pricecom9),
      ],
      tot: new Number(0),
      totalprice:0,
    }
  },
  methods:{
    counttotalprod(){
      this.products.forEach((product) => {
        this.tot += parseInt(product.numbercom);
      })
    },
    counttotalprice(){
      this.products.forEach((product) => {
        this.totalprice += parseInt(product.pricecom);
      })
    }
  },
  mounted() {this.counttotalprod(), this.counttotalprice()
  }
}
</script>

<style scoped>
li{
  list-style-type: none;
}
</style>