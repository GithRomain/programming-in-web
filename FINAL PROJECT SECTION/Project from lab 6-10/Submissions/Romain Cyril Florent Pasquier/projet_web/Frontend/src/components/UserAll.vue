<template>
  <br>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="main-box clearfix">
          <div class="table-responsive">
            <table class="table user-list">
              <thead>
              <tr>
                <th><span>User</span></th>
                <th><span>Created</span></th>

                <th><span>Email</span></th>
                <th class="text-center"><span>Banned</span></th>

                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(user, index) in users" :key="index">
                <td class="premier">
                  <img src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png" v-if="user.role === 'admin'" alt="">
                  <img class="image-user" src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" v-else alt="">
                  <a href="#" class="user-link">{{user.fullName}}</a>
                  <span class="user-subhead">{{user.role}}</span>
                </td>
                <td class="text-align deuxieme">
                  {{user.date}}
                </td>
                <td class="text-align troisieme">
                  <a href="#">{{user.email}}</a>
                </td>
                <td class="quatrieme">
                  <a href="#"></a>
                  <div class="demo" >
                    <label class="toggle">
                      <input type="checkbox" class="toggle__input" id="uniqueID" v-if="user.role === 'user'" v-on:click="bannedUser(user)" v-model="user.banned"/>
                      <span class="toggle-track" :class="{'bloc' : user.role === 'admin'}">
                                                      <span class="toggle-indicator">
                                                          <span class="checkMark">
                                                              <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                                  <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                              </svg>
                                                          </span>
                                                      </span>
                                                  </span>
                    </label>
                  </div>
                </td>

              </tr>

              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "UserAll",
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["users"])
  },
  methods: {
    ...mapActions(['showUsers', 'bannedUser']),
    // deleteAndShow(user){
    //   this.$store.dispatch("deleteUser", user);
    //   this.$store.dispatch("showUsers")
    // }
  },
    mounted: function() {
      this.$nextTick(this.showUsers)
  }
}
</script>

<style scoped>
/* USER LIST TABLE */
.user-list tbody td {
  width: 28%;
  align-self: center;
}
.user-list tbody td > img {
  position: relative;
  width: 50px;
  float: left;
  margin-right: 15px;
}

.user-list tbody td .user-link {
  display: flex;
  font-size: 1.25em;
  padding-top: 3px;
  justify-content: center;
}
.user-list tbody td .user-subhead {
  font-size: 0.875em;
  font-style: italic;
  margin-left: 40%;
}

/* TABLES */
.table {
  border-collapse: separate;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: #eee;
}
.table thead > tr > th {
  border-bottom: 1px solid #C2C2C2;
  padding-bottom: 0;
}
.table tbody > tr > td {
  font-size: 0.875em;
  background: #f5f5f5;
  border-top: 10px solid #fff;
  vertical-align: middle;
  padding: 12px 8px;
}
.table tbody > tr > td:first-child,
.table thead > tr > th:first-child {
  padding-left: 20px;
}
.table thead > tr > th span {
  border-bottom: 2px solid #C2C2C2;
  display: inline-block;
  padding: 0 5px;
  padding-bottom: 5px;
  font-weight: normal;
}
.table thead > tr > th > a span {
  color: #344644;
}
.table thead > tr > th > a span:after {
  content: "\f0dc";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  margin-left: 5px;
  font-size: 0.75em;
}
.table thead > tr > th > a.asc span:after {
  content: "\f0dd";
}
.table thead > tr > th > a.desc span:after {
  content: "\f0de";
}
.table thead > tr > th > a:hover span {
  text-decoration: none;
  color: #2bb6a3;
  border-color: #2bb6a3;
}
.table.table-hover tbody > tr > td {
  -webkit-transition: background-color 0.15s ease-in-out 0s;
  transition: background-color 0.15s ease-in-out 0s;
}

.table tbody tr td .first-line span {
  font-size: 0.875em;
  color: #969696;
  font-weight: 300;
}

.table-products tbody > tr > td {
  background: none;
  border: none;
  border-bottom: 1px solid #ebebeb;
  -webkit-transition: background-color 0.15s ease-in-out 0s;
  transition: background-color 0.15s ease-in-out 0s;
  position: relative;
}
.table-products tbody > tr:hover > td {
  text-decoration: none;
  background-color: #f6f6f6;
}
.table-products .warranty > i {
  color: #f1c40f;
}
.table tbody > tr.table-line-fb > td {
  background-color: #9daccb;
  color: #262525;
}
.table tbody > tr.table-line-twitter > td {
  background-color: #9fccff;
  color: #262525;
}
.table tbody > tr.table-line-plus > td {
  background-color: #eea59c;
  color: #262525;
}

@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

code {
  background: #e5efe9;
  border: 5px solid #5a72b5;
  border-radius: 4px;
  padding: 2px 4px;
}

.toggle {
  align-items: center;
  border-radius: 100px;
  display: flex;
  font-weight: 700;
  margin-bottom: 16px;
}
.toggle:last-of-type {
  margin: 0;
}

.toggle__input {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.toggle__input:not([disabled]):active + .toggle-track, .toggle__input:not([disabled]):focus + .toggle-track {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 2px #121943;
}
.toggle__input:disabled + .toggle-track {
  cursor: not-allowed;
  opacity: 0.7;
}

.toggle-track {
  background: #e5efe9;
  border: 1px solid #5a72b5;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 30px;
  margin-right: 12px;
  position: relative;
  width: 60px;
}

.toggle-indicator {
  align-items: center;
  background: #121943;
  border-radius: 24px;
  bottom: 2px;
  display: flex;
  height: 24px;
  justify-content: center;
  left: 2px;
  outline: solid 2px transparent;
  position: absolute;
  transition: 0.25s;
  width: 24px;
}

.checkMark {
  fill: #fff;
  height: 20px;
  width: 20px;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
}

.toggle__input:checked + .toggle-track .toggle-indicator {
  background: darkred;
  transform: translateX(30px);
}
.toggle__input:checked + .toggle-track .toggle-indicator .checkMark {
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
}

@media screen and (-ms-high-contrast: active) {
  .toggle-track {
    border-radius: 0;
  }
}

.demo{
  top: 0px;
  left: 0px;
  position:relative;
  display: flex;
  justify-content: center;
}

.row{
  width: 99%;
  align-self: center;

  flex-direction: row;
  align-content: flex-end;
}

.text-align {
  text-align: center;
}

.bloc{
  cursor: not-allowed;
}

</style>