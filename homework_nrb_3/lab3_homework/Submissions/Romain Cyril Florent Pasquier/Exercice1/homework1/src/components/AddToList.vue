<template>
  <section id="cadre">
    <div class="tab1" v-if="inputVisible">
    <div class="header">
      <h1>{{msg}}</h1>
      <button class="cancel-button" @click="remove">Cancel</button>
    </div>
    <div class="adding-line">
      <input class="input-text" type="text" placeholder="Add an item" v-model="NewItem" @keyup.enter="addItem"/>
      <div class="int-box">
      <div class="check-box">
        <input class="check" type="checkbox" @click="toogleRed()">
        <p>High Priority</p>
      </div>
      <button class="save-button" @click ="changeVisibility">Save Item</button>
    </div>
    </div>
    </div>
    <div class="tab1" v-else>
      <div class="header">
        <h1>{{msg}}</h1>
        <button class="add-item" @click="changeVisibility">Add Item</button>
      </div>
    </div>
    <li v-for="item in ListItems" :key="item">
      <p :class="{'red' : item[1]}">{{item[0]}}</p>
    </li>
  </section>
</template>

<script>
export default {
  name: 'AddToList',
  props: {
    msg: String
  },

  data() {
    return {
      NewItem: '',
      ListItems: [],
      ifred: false,
      inputVisible: true
    }
  },
  methods: {
    addItem() {
      this.ListItems.push([this.NewItem, this.ifred]);
    },
    toogleRed() {
      this.ifred = !this.ifred;
    },
    changeVisibility() {
      this.inputVisible = !this.inputVisible;
    },
    remove(){
      this.ListItems.pop();
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.red
{
  color: red;
}

section{
  width: 75vh;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

}

.adding-line{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.int-box{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
}

.check-box{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.input-text {
  width: 65%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  -webkit-transition: font-size .35s ease-in-out;
  transition: font-size .35s ease-in-out;
}

.input-text:focus{
  font-size: 102%;
  animation-delay: 2s;
}

button{
  padding: 5px;
  color: white;
  border: none;
  border-radius: 5px;
}

.cancel-button{
  background-color: red;
}

.save-button{
  background-color: cornflowerblue;
}

li
{
  list-style-type: none;
}

.add-item
{
  color: black;
}

</style>
