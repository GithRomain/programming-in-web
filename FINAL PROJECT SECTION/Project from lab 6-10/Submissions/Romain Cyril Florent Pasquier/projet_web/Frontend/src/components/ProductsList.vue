<template>
  <br>
  <div class="enplus">
    <div class="search">
      <input type="text" v-model="filter" placeholder="Search by ..." @keyup.enter="filtered" />
    <div class="symbol">
      <svg class="cloud">
        <use xlink:href="#cloud" />
      </svg>
      <svg class="lens">
        <use xlink:href="#lens" />
      </svg>
    </div>
  </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="cloud">
      <path d="M31.714,25.543c3.335-2.17,4.27-6.612,2.084-9.922c-1.247-1.884-3.31-3.077-5.575-3.223h-0.021
	C27.148,6.68,21.624,2.89,15.862,3.931c-3.308,0.597-6.134,2.715-7.618,5.708c-4.763,0.2-8.46,4.194-8.257,8.919
	c0.202,4.726,4.227,8.392,8.991,8.192h4.873h13.934C27.784,26.751,30.252,26.54,31.714,25.543z" />
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="lens">
      <path d="M15.656,13.692l-3.257-3.229c2.087-3.079,1.261-7.252-1.845-9.321c-3.106-2.068-7.315-1.25-9.402,1.83
	s-1.261,7.252,1.845,9.32c1.123,0.748,2.446,1.146,3.799,1.142c1.273-0.016,2.515-0.39,3.583-1.076l3.257,3.229
	c0.531,0.541,1.404,0.553,1.95,0.025c0.009-0.008,0.018-0.017,0.026-0.025C16.112,15.059,16.131,14.242,15.656,13.692z M2.845,6.631
	c0.023-2.188,1.832-3.942,4.039-3.918c2.206,0.024,3.976,1.816,3.951,4.004c-0.023,2.171-1.805,3.918-3.995,3.918
	C4.622,10.623,2.833,8.831,2.845,6.631L2.845,6.631z" />
    </symbol>
  </svg>

  <div class="big-container" v-if="!notFound">
    <div class="card__container" v-for="(product, index) in (client.role === 'admin' ? productsFiltered : productFilteredOther)" :key="index">
      <div class="card__top__section" :class="{'card__top__section_orange' : product.category === 'Pastis','card__top__section_violet' : product.category === 'Cider', 'card__top__section_bleu' : product.category === 'Beer', 'card__top__section_rouge' : product.category === 'Wine', 'card__top__section_gris' : product.category === 'Spirit'}">
        <img :src=product.image>
        <div class="card__top__section__icons" v-if="product.name !== 'ADD'">
          <div v-on:click="addProductBasket(product)" v-if="!client.banned && client.role === 'user'">
            <a>🛒</a>
          </div>
          <div v-if="client.role === 'admin'">
            <router-link style="text-decoration: none; color: inherit" to="/FormProduct"><span v-on:click="test(product)">✏️</span></router-link>
          </div>
          <div v-if="client.role === 'admin'" v-on:click="deleteProduct(product); deleteHere(index)">
            <a>❌</a>
          </div>
        </div>
      </div>
      <div class="card__body__section">
        <p>{{product.name}}</p>
        <span v-if="product.name !== 'ADD'">Alcool volume : {{product.description}} %</span>
      </div>
      <div>
        <div class="rating-section rating" v-if="product.name !== 'ADD'">
          <div class="stars-rating stars">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 48" class="etoile" v-on:click="rated(product, 1)">
              <path class="etoilePath" :class="{'jaune' : product.rating === 1 || product.rating === 2 || product.rating === 3 || product.rating === 4 || product.rating === 5}" id="star" fill="#000" stroke="#FFF" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 48" class="etoile" v-on:click="rated(product, 2)">
              <path class="etoilePath" :class="{'jaune' : product.rating === 2 || product.rating === 3 || product.rating === 4 || product.rating === 5}" id="star" fill="#000" stroke="#FFF" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 48" class="etoile" v-on:click="rated(product, 3)">
              <path class="etoilePath" :class="{'jaune' : product.rating === 3 || product.rating === 4 || product.rating === 5}" id="star" fill="#000" stroke="#FFF" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 48" class="etoile" v-on:click="rated(product, 4)">
              <path class="etoilePath" :class="{'jaune' : product.rating === 4 || product.rating === 5}" id="star" fill="#000" stroke="#FFF" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 48" class="etoile" v-on:click="rated(product, 5)">
              <path class="etoilePath" :class="{'jaune' : product.rating === 5}" id="star" fill="#000" stroke="#FFF" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
            </svg>
            <span>{{product.rating}} out of 5</span>
          </div>
          <div class="c-price">
            <span>$ {{product.price}}</span>
          </div>
        </div>

        <router-link class="add" v-else to="/FormProduct"><span v-on:click="test2">Click to add a new Product to your shop</span></router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <br>
    <h1>Filter not match...</h1>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "ProductsList",
  data() {
    return {
      filter: "",
      notFound: false,
      categories: [],
      names: []
    };
  },
  computed: {
    ...mapState(['products', 'client', 'updateProduct', 'productsFiltered', 'productFilteredOther']),
  },
  methods:{
    ...mapActions(['showProducts', 'addProductBasket', 'deleteProduct']),
    deleteHere(index)
    {
      this.products.splice(index, 1);
    },
    test(product)
    {
      this.$store.state.updateProduct = true;
      this.$store.state.productUpdate = product;
    },
    test2()
    {
      this.$store.state.updateProduct = false;
    },
    rated(product, note){
      if (!this.$store.state.connected)
      {
        alert("You can't vote if you are not connected")
      }
      if (this.$store.state.client.banned)
      {
        alert("You can't vote if you are blocked")
      }
      else {
        product.rating = note;
        this.$store.dispatch("updateProductGrade", product);
    }
    },
    filtered()
    {
      this.$store.state.productsFiltered = this.$store.state.products;
      this.$store.state.productFilteredOther = this.$store.state.products.slice(0, this.$store.state.products.length-1);

      this.$store.state.products.forEach(product => this.categories.push(product.category));
      this.$store.state.products.forEach(product => this.names.push(product.name));

        if (this.filter === ''){
          this.notFound = false;
        }
        else if (this.names.includes(this.filter))
        {
          console.log("ok")
          this.$store.state.productsFiltered = this.$store.state.productsFiltered.filter(product => product.name === this.filter);
          this.$store.state.productFilteredOther = this.$store.state.productFilteredOther.filter(product => product.name === this.filter);
          this.notFound = false;
        }
        else if (this.categories.includes(this.filter))
        {
          this.$store.state.productsFiltered = this.$store.state.productsFiltered.filter(product => product.category === this.filter);
          this.$store.state.productFilteredOther = this.$store.state.productFilteredOther.filter(product => product.category === this.filter);
          this.notFound = false;
        }

        else {
          this.notFound = true;
        }
    },
  },
  mounted: function(){
    this.$nextTick(this.showProducts);
  }

}
</script>

<style scoped>
.big-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
}


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #444;
  background-color: red;
}

img {
  width: auto;
  height: auto;
  position: relative;
  top: -25px;
  display: block;
  border-radius: inherit;
}

.card__container {
  width: 320px;
  background-color: whitesmoke;
  -webkit-box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
  margin: 0 auto;
  border-radius: 8px;
  position: relative;
  top: 30px;
  margin-bottom: 60px;
}

.card__top__section {
  background: -webkit-gradient(linear, left top, right top, from(#1a1a1a), to(#969696));
  background: -o-linear-gradient(left, #1a1a1a, #969696);
  background: linear-gradient(to right, #1a1a1a, #969696);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  height: 410px;
  width: 100%;
  padding: 10px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
}

.card__top__section_bleu {
  background: -webkit-gradient(linear, left top, right top, from(#64c1ff), to(#0064b7));
  background: -o-linear-gradient(left, #64c1ff, #0064b7);
  background: linear-gradient(to right, #64c1ff, #0064b7);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  height: 410px;
  width: 100%;
  padding: 10px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
}

.card__top__section_orange {
  background: -webkit-gradient(linear, left top, right top, from(orangered), to(coral));
  background: -o-linear-gradient(left, orangered, coral);
  background: linear-gradient(to right, orangered, coral);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  height: 410px;
  width: 100%;
  padding: 10px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
}

.card__top__section_violet {
  background: -webkit-gradient(linear, left top, right top, from(rebeccapurple), to(mediumpurple));
  background: -o-linear-gradient(left, rebeccapurple, mediumpurple);
  background: linear-gradient(to right, rebeccapurple, mediumpurple);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  height: 410px;
  width: 100%;
  padding: 10px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
}

.card__top__section_rouge {
  background: -webkit-gradient(linear, left top, right top, from(#e74c3c), to(#eea59c));
  background: -o-linear-gradient(left, #e74c3c, #eea59c);
  background: linear-gradient(to right, #e74c3c, #eea59c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  height: 410px;
  width: 100%;
  padding: 10px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
}

.card__top__section_gris {
  background: -webkit-gradient(linear, left top, right top, from(#2bb6a3), to(#7fd3ed));
  background: -o-linear-gradient(left, #2bb6a3, #7fd3ed);
  background: linear-gradient(to right, #2bb6a3, #7fd3ed);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  height: 410px;
  width: 100%;
  padding: 10px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
}

.card__top__section:hover {
  background: -webkit-gradient(linear, left top, right top, from(#f1c40f), to(#DFF30B));
  background: -o-linear-gradient(left, #f1c40f, #DFF30B);
  background: linear-gradient(to right, #f1c40f, #DFF30B);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  height: 410px;
  width: 100%;
  padding: 10px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
}

.card__top__section__icons{
  position: absolute;
}

.card__top__section__icons > div {
  width: 38px;
  height: 38px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 100;
  margin-left: 250px;
  margin-bottom: 10px;
  display: table;
  justify-content: center;
  align-items: center;
}

.card__top__section__icons > div:hover {
  background-color: yellowgreen;
  cursor: pointer;
}

.card__top__section__icons > div > a {
  position: relative;
  font-size: 20px;
  top: 5.2px;
  right: -5px;
}

.card__body__section {
  text-align: center;
  padding: 8px 5px;
}

.card__body__section > p {
  font-weight: 700;
}

.rating-section {
  border-top: 1px solid #eee;
  padding: 8px 12px;
  margin-top: 5px;
  display: table;
  content: "";
  clear: both;
  width: 100%;
}

.stars-rating{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  float: left;
}

.stars-rating > span {
  position: relative;
  left: 20px;
}

.c-price{
  float: right;
}

@media screen and (max-width:       450px) {
  .card__container {
    width: 90% !important;
    position: fixed !important;
    left: 27px;
  }
}

.add{
  position: relative;
  top: 15px;
  justify-content: center;
  text-align: center;
  align-items: center;
  right: -25px;
}

.enplus
{
  display: flex;
  justify-content: center;
}

.search {
  --background: #ffffff;
  --text-color: #414856;
  --primary-color: #5469d4;
  --border-radius: 10px;
  background: var(--background);
  width: 25%;
  height: 75px;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
}
.search input[type=text] {
  position: relative;
  width: 100%;
  height: auto;
  font: 400 16px "Varela Round", sans-serif;
  color: var(--text-color);
  border: 0;
  box-sizing: border-box;
  outline: none;
  padding: 0 0 0 40px;
  transition: width 0.6s ease;
  z-index: 10;
  opacity: 0;
  cursor: pointer;
}
.search input[type=text]:focus {
  z-index: 0;
  opacity: 1;
  width: auto;
}
.search input[type=text]:focus ~ .symbol::before {
  width: 0%;
}
.search input[type=text]:focus ~ .symbol:after {
  -webkit-clip-path: inset(0% 0% 0% 100%);
  clip-path: inset(0% 0% 0% 100%);
  transition: -webkit-clip-path 0.04s linear 0.105s;
  transition: clip-path 0.04s linear 0.105s;
  transition: clip-path 0.04s linear 0.105s, -webkit-clip-path 0.04s linear 0.105s;
}
.search input[type=text]:focus ~ .symbol .cloud {
  top: -30px;
  transform: translate(0, 0);
  transition: all 0.6s ease;
}
.search input[type=text]:focus ~ .symbol .lens {

  left: -20px;
  transform: translate(0, 0);
  fill: var(--primary-color);
  transition: top 0.5s ease 0.1s, left 0.5s ease 0.1s, fill 0.3s ease;
}
.search .symbol {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search .symbol:before {
  content: "";
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
  z-index: -1;
  transition: width 0.6s ease;
}
.search .symbol:after {
  content: "";
  position: absolute;
  top: 21px;
  left: 21px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary-color);
  z-index: 1;
  -webkit-clip-path: inset(0% 0% 0% 0%);
  clip-path: inset(0% 0% 0% 0%);
  transition: -webkit-clip-path 0.04s linear 0.225s;
  transition: clip-path 0.04s linear 0.225s;
  transition: clip-path 0.04s linear 0.225s, -webkit-clip-path 0.04s linear 0.225s;
}
.search .symbol .cloud,
.search .symbol .lens {
  position: absolute;
  fill: #fff;
  stroke: none;
  top: 28%;
}
.search .symbol .cloud {
  width: 35px;
  height: 32px;
  transition: all 0.6s ease;
}
.search .symbol .lens {
  fill: #fff;
  width: 16px;
  height: 16px;
  z-index: 2;
  top: 36%;
  left: 6%;
  transition: top 0.3s ease, left 0.3s ease, fill 0.2s ease 0.2s;
}

body {
  background: #e8ebf3;
  height: 100vh;
  font: 400 16px "Varela Round", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body .socials > a {
  display: block;
  width: 30px;
  opacity: var(--backdrop-opacity, 0.2);
  transform: scale(var(--scale, 0.8));
  transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
}
body .socials > a:hover {
  --scale: 1;
}

.stars{
  display: inline-flex;
  justify-content: center;
}

.etoile{
  width: 22px;
  cursor: pointer;
}

.etoilePath{
  fill: #939393;
}

.stars:hover .etoilePath{
  fill: #f1c40f;
}

.jaune{
  fill: #f1c40f;
}

</style>