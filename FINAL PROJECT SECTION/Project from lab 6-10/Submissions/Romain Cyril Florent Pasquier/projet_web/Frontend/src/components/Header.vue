<template>
<header>
  <nav class="nav-area">
    <div class="gauche">
      <router-link to="/ProductList" class="hover">Product List</router-link>
      <router-link to="/UserAll" v-if="client.role === 'admin'" class="hover">User Edit</router-link>
      <a class="user-type" v-if="connected && !client.banned">{{client.role}} Mode</a>
      <a class="user-type" v-else-if="connected && client.banned">{{client.role}} Mode Blocked</a>
      <a class="user-type" v-else>Guest Mode</a>
    </div>

    <div class="droite">
      <a class="Hello" v-if="connected">Hello {{$store.state.client.fullName}}</a>
      <span v-if="client.role === 'user'">{{Math.round((client.total) * 100) / 100}} $</span>
      <router-link to="/BasketList" v-if="client.role === 'user'" class="hover">My Basket</router-link>
      <router-link to="/LoginForm" class="btn-area btn-area-notconnected hover" v-if="!connected">Login</router-link>
      <a class="btn-area btn-area-connected" v-if="connected" v-on:click="logOut" type="submit">Log Out</a>
    </div>
  </nav>
  <br>

  <div class="ligne"></div>
</header>
  <router-view/>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Header",
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['connected', 'client']),
  },
  methods:{
    ...mapActions(['logOut', 'showProducts'])
  },
  mounted: function(){
    this.$nextTick(this.calculTotal)
  }
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");


*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
body{
  background-position: center center;
  height: 100vh;
  font-family: poppins;
  font-weight: 600;
  font-size: 30px;
}
a{
  text-decoration: none;

}

nav
{
}

.droite
{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  position: relative;

}

.gauche
{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  position: absolute;
  z-index: 50;
}

.btn-area{
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px 30px;
  border-radius: 5px;
  background: #5469d4;
  color: #fff;
}

.btn-area-connected{
  background-color: red;
}

.btn-area-connected:hover{
  color: #fff;
  background-color: darkred;
}

.btn-area-notconnected:hover{
  color: #fff;
  background-color: darkblue;
}

.Hello{
  color: #212d63;
  letter-spacing: 2px;
  padding: 10px 30px;
  border-radius: 5px;
}

.user-type{
  color: #7fd3ed;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px 30px;
  border-radius: 5px;
}

.hover:hover
{
  color: #1c57b5;
}

.ligne
{
  width: 100%;
  background-color: black;
  height: 2px;
}

</style>