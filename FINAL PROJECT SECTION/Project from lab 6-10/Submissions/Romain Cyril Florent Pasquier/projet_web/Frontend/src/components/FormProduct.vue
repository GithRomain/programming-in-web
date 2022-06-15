<template>
  <div class="loginbackground box-background--white padding-top--64">
    <div class="loginbackground-gridContainer">
      <div class="box-root flex-flex" style="grid-area: top / start / 8 / end;">
        <div class="box-root" style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;">
        </div>
      </div>
      <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
        <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style="flex-grow: 1;"></div>
      </div>
      <div class="box-root flex-flex" style="grid-area: 6 / start / auto / 2;">
        <div class="box-root box-background--blue800" style="flex-grow: 1;"></div>
      </div>
      <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
        <div class="box-root box-background--blue animationLeftRight" style="flex-grow: 1;"></div>
      </div>
      <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
        <div class="box-root box-background--gray100 animationLeftRight tans3s" style="flex-grow: 1;"></div>
      </div>
      <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
        <div class="box-root box-background--cyan200 animationRightLeft tans4s" style="flex-grow: 1;"></div>
      </div>
      <div class="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
        <div class="box-root box-background--blue animationRightLeft" style="flex-grow: 1;"></div>
      </div>
      <div class="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
        <div class="box-root box-background--gray100 animationRightLeft tans4s" style="flex-grow: 1;"></div>
      </div>
      <div class="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
        <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;"></div>
      </div>
    </div>
  </div>

  <div class="modal">
    <div class="modal__container">
      <div class="modal__featured">
        <button type="button" class="button--transparent button--close"><router-link to="/ProductList" class="hover"> ← </router-link>
        </button>
        <div class="modal__circle"></div>
        <img @keyup.enter="updateProductMeth($store.state.productUpdate)" v-if="$store.state.updateProduct" :src=$store.state.productUpdate.image class="modal__product" />
        <img v-else src="https://cdn-icons-png.flaticon.com/512/452/452682.png" class="modal__product" />
      </div>
      <div class="modal__content">
        <h2 @keyup.enter="updateProductMeth($store.state.productUpdate)" v-if="$store.state.updateProduct">Update a product</h2>
        <h2 v-else>Add a product</h2>

        <form>
          <ul class="form-list">
            <li class="form-list__row">
              <label>Name</label>
              <input @keyup.enter="updateProductMeth($store.state.productUpdate)" v-if="$store.state.updateProduct" type="text" v-model="$store.state.productUpdate.name" />
              <input v-else type="text" name="" required="" v-model="$store.state.nameproduct" />
            </li>
            <li class="form-list__row">
              <label>Category</label>
              <input @keyup.enter="updateProductMeth($store.state.productUpdate)" v-if="$store.state.updateProduct" type="text" name="" required="" v-model="$store.state.productUpdate.category" />
              <input v-else type="text" name="" required="" v-model="$store.state.category" />
            </li>
            <li class="form-list__row form-list__row--inline">
              <div>
                <label>Price</label>
                <div class="form-list__input-inline">
                  <input @keyup.enter="updateProductMeth($store.state.productUpdate)" v-if="$store.state.updateProduct" v-model="$store.state.productUpdate.price" name="price" placeholder="Price"  pattern="\\d*" minlength="3" maxlength="3" required="" />
                  <input v-else v-model="$store.state.price" name="price" placeholder="Price"  pattern="\\d*" minlength="3" maxlength="3" required="" />
                  <label class="stock-position">Stock</label>
                  <input @keyup.enter="updateProductMeth($store.state.productUpdate)" v-if="$store.state.updateProduct" v-model="$store.state.productUpdate.acount" name="stock" placeholder="Stock"  pattern="\\d*" minlength="3" maxlength="3" required="" />
                  <input v-else v-model="$store.state.acount" name="stock" placeholder="Stock"  pattern="\\d*" minlength="3" maxlength="3" required="" />
                </div>
              </div>
            </li>

            <li class="form-list__row">
              <label>Description</label>
              <input @keyup.enter="updateProductMeth($store.state.productUpdate)" v-if="$store.state.updateProduct" v-model="$store.state.productUpdate.description" type="text" name="" required="" />
              <input v-else v-model="$store.state.description" type="text" name="" required="" />
            </li>

            <li class="form-list__row">
              <label>URL of the picture</label>
              <input @keyup.enter="updateProductMeth($store.state.productUpdate)" v-if="$store.state.updateProduct" v-model="$store.state.productUpdate.image" type="text" name="" required="" />
              <input v-else v-model="$store.state.image" type="text" name="" required="" @keyup.enter="addProduct"/>
            </li>

            <li>
              <button v-if="$store.state.updateProduct" type="button" class="button" v-on:click="updateProductMeth($store.state.productUpdate)">Update the product</button>
              <button v-else type="button" class="button" v-on:click="addProduct">Add the product</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "FormProduct",
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['updateProduct']),
  },
  methods:{
    ...mapActions(['addProduct', 'updateProductMeth'])
  },
}
</script>

<style scoped>
* {
  color: #1a1f36;
  box-sizing: border-box;
  word-wrap: break-word;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
}

template
{
  overflow: hidden;
}

body {
  overflow: hidden;
  background-color: #ffffff;
}
h1 {
  letter-spacing: -1px;
}
a {
  color: #5469d4;
  text-decoration: unset;
}
.loginbackground {
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 70px;
  z-index: -1;
  overflow: hidden;
}
.flex-flex {
  display: flex;
}
.box-root {
  box-sizing: border-box;
}
.loginbackground-gridContainer {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: [start] 1fr [left-gutter] (86.6px)[16] [left-gutter] 1fr [end];
  grid-template-columns: [start] 1fr [left-gutter] repeat(16,86.6px) [left-gutter] 1fr [end];
  -ms-grid-rows: [top] 1fr [top-gutter] (64px)[8] [bottom-gutter] 1fr [bottom];
  grid-template-rows: [top] 1fr [top-gutter] repeat(8,64px) [bottom-gutter] 1fr [bottom];
  justify-content: center;
  margin: 0 -2%;
  transform: rotate(-12deg) skew(-12deg);
}
.box-divider--light-all-2 {
  box-shadow: inset 0 0 0 2px #e3e8ee;
}
.box-background--blue {
  background-color: #5469d4;
}
.box-background--white {
  background-color: #ffffff;
}
.box-background--blue800 {
  background-color: #212d63;
}
.box-background--gray100 {
  background-color: #e3e8ee;
}
.box-background--cyan200 {
  background-color: #7fd3ed;
}
.padding-top--64 {
  padding-top: 64px;
}
span {
  display: block;
  font-size: 20px;
  line-height: 28px;
  color: #1a1f36;
}
label {
  margin-bottom: 10px;
}

.field input {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

input[name="submit"] {
  background-color: rgb(84, 105, 212);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
  rgb(84, 105, 212) 0px 0px 0px 1px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
}
.field-checkbox input {
  width: 20px;
  height: 15px;
  margin-right: 5px;
  box-shadow: unset;
  min-height: unset;
}
.field-checkbox label {
  display: flex;
  align-items: center;
  margin: 0;
}

.footer-link span {
  font-size: 14px;
  text-align: center;
}
.listing a {
  color: #697386;
  font-weight: 600;
  margin: 0 10px;
}

.animationRightLeft {
  animation: animationRightLeft 2s ease-in-out infinite;
}
.animationLeftRight {
  animation: animationLeftRight 2s ease-in-out infinite;
}
.tans3s {
  animation: animationLeftRight 3s ease-in-out infinite;
}
.tans4s {
  animation: animationLeftRight 4s ease-in-out infinite;
}

@keyframes animationLeftRight {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(1000px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes animationRightLeft {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0px);
  }
}

.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;

  width: 1px; }

template {
  font-family: 'Open Sans', sans-serif;
  color: #1a1a1a;
  overflow: hidden;
  background-color: #f0f0f0; }

html{
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-weight: 600; }

.button {
  color: #ffffff;
  background-color: #5469d4;
  padding: 12px 25px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0;
  border-radius: 2px;
  outline: 0;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
  transition: all .2s; }
.button:hover {
  -ms-transform: scale(1.1);
  transform: scale(1.1);
cursor: pointer}

.button--transparent {
  background: transparent;
  border: 0;
  outline: 0; }

.button--close {
  position: absolute;
  top: 10px;
  left: 10px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: #ffffff;
  border-radius: 50%;
  transition: all .25s;
  z-index: 10; }
.button--close svg {
  width: 20px;
  height: 20px; }
.button--close svg * {
  fill: currentColor; }
.button--close:hover {
  color: #212d63;
  background-color: #ffffff;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);
cursor: pointer}

.button--info {
  position: absolute;
  top: 0;
  right: 0; }

input {
  width: calc(100% - 10px);
  min-height: 30px;
  padding-left: 5px;
  padding-right: 5px;
  letter-spacing: .5px;
  border: 0;
  border-bottom: 2px solid #f0f0f0; }
input:valid {
  border-color: #212d63; }
input:focus {
  outline: none;
  border-color: #212d63; }

.form-list {
  padding-left: 0;
  list-style: none; }
.form-list__row {
  margin-bottom: 25px; }
.form-list__row label {
  position: relative;
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: .5px;
  color: #939393; }
.form-list__row--inline {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between; }
.form-list__row--inline > :first-child {
  -ms-flex: 2;
  flex: 2;
  padding-right: 20px; }
.form-list__row--inline > :nth-child(2n) {
  -ms-flex: 1;
  flex: 1; }
.form-list__input-inline {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between; }
.form-list__input-inline > * {
  width: calc(50% - 10px - 10px); }
.form-list__row--agree {
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 12px; }
.form-list__row--agree label {
  font-weight: 400;
  text-transform: none;
  color: #676767; }
.form-list__row--agree input {
  width: auto;
  margin-right: 5px; }

#category-container {
  position: relative;
  padding-top: 6px; }

#category-container:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 36px;
  height: 45px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 36px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%); }


.modal {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  height: 90vh;
  padding-top: 200px;
  z-index: 100;
  overflow-y: hidden;
}
.modal__container {
  display: -ms-flexbox;
  display: flex;
  max-width: 675px;
  min-height: 400px;
  margin-bottom: 125px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1); }
.modal__featured {
  position: relative;
  -ms-flex: 1;
  flex: 1;
  min-width: 230px;
  padding: 20px;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px; }
.modal__circle {
  position: absolute;
  top: 0;
  left: 0;
  height: 200%;
  width: 200%;
  background-color: #7fd3ed;
  border-radius: 50%;
  -ms-transform: translateX(-50%) translateY(-25%);
  transform: translateX(-50%) translateY(-25%); }
.modal__product {
  position: absolute;
  top: 30%;
  left: 50%;
  width: 300px;
  height: auto;
  -ms-transform: translateX(calc(-50% - 10px));
  transform: translateX(calc(-50% - 10px)); }
.modal__content {
  -ms-flex: 3;
  flex: 3;
  padding: 40px 30px; }

.stock-position{
  position: absolute;
  top:-13px;
  right:-118px;
}

.hover
{
  position: relative;
  font-size: 25px;
  top: -2px;
}
</style>
