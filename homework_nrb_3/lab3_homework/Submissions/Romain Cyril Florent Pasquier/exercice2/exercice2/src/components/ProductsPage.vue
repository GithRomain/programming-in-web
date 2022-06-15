<template>

  <router-link class="root" :to="{name: 'ShoppingList', params:{'name0': products[0].name, 'numcom0': products[0].numbercom, 'pricecom0': products[0].pricecom,
                                                   'name1': products[1].name, 'numcom1': products[1].numbercom, 'pricecom1': products[1].pricecom,
                                                   'name2': products[2].name, 'numcom2': products[2].numbercom, 'pricecom2': products[2].pricecom,
                                                   'name3': products[3].name, 'numcom3': products[3].numbercom, 'pricecom3': products[3].pricecom,
                                                   'name4': products[4].name, 'numcom4': products[4].numbercom, 'pricecom4': products[4].pricecom,
                                                   'name5': products[5].name, 'numcom5': products[5].numbercom, 'pricecom5': products[5].pricecom,
                                                   'name6': products[6].name, 'numcom6': products[6].numbercom, 'pricecom6': products[6].pricecom,
                                                   'name7': products[7].name, 'numcom7': products[7].numbercom, 'pricecom7': products[7].pricecom,
                                                   'name8': products[8].name, 'numcom8': products[8].numbercom, 'pricecom8': products[8].pricecom,
                                                   'name9': products[9].name, 'numcom9': products[9].numbercom, 'pricecom9': products[9].pricecom,}}">Shopping List</router-link>

<div class="container" v-for="(product) in products" :key="product">
  <head>
    <title>Harvest vase</title>
  </head>
  <div class="wrapper">
    <div class="product-img">
      <img :src="require(`@/assets/${product.url}`)" height="420" width="327">
    </div>
    <div class="product-info" :class="{'warningcolor' : product.warning, 'okcolor' : product.number >= 10, 'nonokcolor :' : product.number < 10}">
      <div class="product-text">
        <h1>{{ product.name }}</h1>
        <h2>by Romain Production</h2>
        <br>
        <p>Number of item :<br>{{product.number}}<br></p>
        <p :class="{'lowprice' : product.price === 1, 'hightprice' : product.price === 12}"><span>Price : {{product.price}}</span>$</p>
      </div>
      <div class="product-price-btn">
        <button type="button" class="btnred" @click="remove(product)">-</button>
        <p>{{product.numbercom}}</p>
        <button type="button" class="btnyel" v-if="product.number > 0" @click="add(product)">+</button>
        <button type="button" class="btnred" style="background-color: gray" v-else>#</button>
      </div>
      <div class="totalpriceprod">Total price : {{product.pricecom}} $</div>
    </div>
  </div>

</div>
  <ShoppingList items="items"></ShoppingList>
</template>

<script>
class Product {
  constructor(name, number, price, url, numbercom, pricecom, warning) {
    this.name = name;
    this.number = number;
    this.price = price;
    this.url = url;
    this.numbercom = numbercom;
    this.pricecom = pricecom;
    this.warning = warning;
  }
}
export default {
  name: "ProductsPage",
  data() {
    return {
      products: [
          new Product("Leeks", 15, 3, 'leeks.jpg', 0, 0, false),
          new Product("Oinions", 3, 1, "oinions.jpg", 0, 0,false),
          new Product("Broccoli", 45, 5, "brocoli.jpg", 0, 0,false),
          new Product("Fennel", 14, 7, "fennel.jpg", 0, 0, false),
          new Product("Garlic", 5, 2, "garlic.jpg", 0, 0,false),
          new Product("Pickcle", 12, 4, "pickle.jpg", 0, 0,false),
          new Product("Melons", 24, 8, "melons.jpg", 0, 0,false),
          new Product("Pumpkin", 5, 12, "pumpkin.jpg", 0, 0,false),
          new Product("Tomato", 10, 5, "tomato.jpg", 0, 0,false),
          new Product("Lettuce", 5, 6, "lettuce.jpg", 0, 0,false),
      ],
    }
  },
  methods: {
    add(product){
      if (product.number > 0)
      {
        product.numbercom ++;
        product.number --;
        product.pricecom = product.numbercom * product.price;
        if (product.number < 3)
        {
          product.warning = true;
        }
        console.log(product);
      }
    },
    remove(product){
      if (product.numbercom > 0)
      {
        product.numbercom --;
        product.number ++;
        product.pricecom = product.numbercom * product.price
      }
      if (product.number >= 3)
      {
        product.warning = false;
      }
    },
  }
}
</script>

<style scoped>

.root{
  text-decoration: none;
  font-size: 20px;
  border: 3px solid blue;
  padding: 10px;
  background-color: #3ec7e0;
  color: white;
  border-radius: 20px;
}

.totalpriceprod{
  font-size: 20px;
}

.basket{
  font-size: 50px;
}

.container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.wrapper {
  height: 420px;
  width: 654px;
  margin: 50px auto;
  border-radius: 7px 7px 7px 7px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
}

.product-img {
  float: left;
  height: 420px;
  width: 327px;
}

.product-img img {
  border-radius: 7px 0 0 7px;
}

.product-info {
  float: left;
  height: 420px;
  width: 327px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
}

.product-text {
  height: 300px;
  width: 327px;
}

.product-text h1 {
  margin: 0 0 0 38px;
  padding-top: 52px;
  font-size: 34px;
  color: #474747;
}

.product-text h1,
.product-price-btn p {
  font-family: 'Bentham', serif;
}

.product-text h2 {
  margin: 0 0 0px 38px;
  font-size: 13px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #d2d2d2;
  letter-spacing: 0.2em;
}

.product-text p {
  height: 125px;
  margin: 0 0 0 38px;
  font-family: 'Playfair Display', serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 20px;
  font-weight: lighter;
  overflow: hidden;
}

.product-price-btn {
  height: 103px;
  width: 327px;
  margin-top: -5px;
  position: relative;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.product-price-btn p {
  display: inline-block;
  position: absolute;
  top: 35%;
  right: 51%;
  height: 50px;
  font-family: 'Trocchi', serif;
  margin: 0 0 0 -120px;
  font-size: 28px;
  font-weight: lighter;
  color: #474747;
}

span {
  display: inline-block;
  height: 50px;
  font-family: 'Suranna', serif;
  font-size: 34px;
}

.product-price-btn button {
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  width: 75px;
  margin: 0 40px 0 16px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: 'Raleway', sans-serif;
  font-size: 50px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  outline: none;
}

.btnred{
  background-color: red;
}

.btnyel{
  background-color: #17C96C;
}

.btnyel:hover {
  background-color: #79b0a1;
}

.btnred:hover{
  background-color: darkred;
}

.okcolor{
  background-color: green;
}

.nonokcolor{
  background-color: orangered;
}

.warningcolor{
  background-color: yellowgreen;
}

.lowprice{
  color: blue;
}

.hightprice{
  color: purple;
}
</style>