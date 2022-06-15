<template>
  <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
  <div class="error" v-if="commands.length === 0">
    There is no product in your basket actually...
  </div>
  <div class="container bootstrap snippets bootdey" v-else>
    <div class="row">
      <div class="col-lg-12">
        <div class="main-box no-header clearfix">
          <div class="main-box-body clearfix">
            <div class="table-responsive">
              <table class="table user-list">
                <thead>
                <tr>
                  <th><span>Picture</span></th>
                  <th><span>Category</span></th>
                  <th class="text-center"><span>Name</span></th>
                  <th><span>Price</span></th>
                  <th><span>Quantity</span></th>
                  <th><span>Total</span></th>
                  <th><span>Delete</span></th>
                  <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(command, index) in commands" :key="index">
                  <td>
                    <a><img :src="command.image" alt="" style="max-width:70px"></a>
                  </td>
                  <td>
                    <a>{{command.category}}</a>
                  </td>
                  <td>
                    <a>{{ command.name }}</a>
                  </td>
                  <td>
                    <a>$ {{command.price}}</a>
                  </td>
                  <td>
                    <a> {{command.acount}} </a>
                  </td>
                  <td>
                    <a> $ {{Math.round((command.price * command.acount) * 100) / 100}} </a>
                  </td>
                  <td style="width: 30%;">

                    <a href="#" class="table-link danger" v-on:click="deleteProductBasket(index)">
                                                <span class="fa-stack">
                                                    <i class="fa fa-square fa-stack-2x"></i>
                                                    <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                </span>
                    </a>
                  </td>
                </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "BasketList",
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['commands']),
  },
  methods:{
    ...mapActions(['deleteProductBasket']),
    deleteHere(index)
    {
      this.products.splice(index, 1);
    },
  },
}
</script>

<style scoped>
body{
  background:#eee;
}
.main-box.no-header {
  padding-top: 20px;
}
.main-box {
  background: #FFFFFF;
  -webkit-box-shadow: 1px 1px 2px 0 #CCCCCC;
  -moz-box-shadow: 1px 1px 2px 0 #CCCCCC;
  -o-box-shadow: 1px 1px 2px 0 #CCCCCC;
  -ms-box-shadow: 1px 1px 2px 0 #CCCCCC;
  box-shadow: 1px 1px 2px 0 #CCCCCC;
  margin-bottom: 16px;
  -webikt-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.table a.table-link.danger {
  color: #e74c3c;
}

.user-list tbody td {
  width: 14%;
  align-self: center;
}
.user-list tbody td a{
  display: flex;
  color:black;
  justify-content: center;
}
a {
  color: #3498db;
  outline: none!important;
  font-size: 20px;
}
.user-list tbody td>img {
  position: relative;
  width: auto;
  max-width: 50px;
  max-height: 20px;
  float: left;
  margin-right: 15px;
}

.table thead tr th {
  text-transform: uppercase;
  font-size: 0.875em;
}
.table thead tr th {
  border-bottom: 2px solid #e7ebee;
}
.table tbody tr td:first-child {
  font-size: 1.125em;
  font-weight: 300;
}
.table tbody tr td {
  font-size: 0.875em;
  vertical-align: middle;
  border-top: 1px solid #e7ebee;
  padding: 12px 8px;
}
a:hover{
  text-decoration:none;
}

.error
{
  font-size: 40px;
  position: relative;
  text-align: center;
  margin-top: 15%;
}
</style>