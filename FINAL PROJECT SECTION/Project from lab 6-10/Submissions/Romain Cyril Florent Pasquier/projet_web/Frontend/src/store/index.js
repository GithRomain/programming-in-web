// store/index.js
import { createStore } from 'vuex'
import http from "../http-common";

export default createStore({
    state: {
        productsFiltered: [],
        productFilteredOther: [],
        products: [],
        users: [],

        connected: false,
        client: {},
        commands: [],

        name: "",
        mail: "",
        password: "",

        emailLog: "",
        passwordLog: "",

        category: "",
        nameproduct: "",
        price: "",
        acount: "",
        description: "",
        image: "",

        updateProduct: false,
        productUpdate: {},
    },
    getters: {},
    mutations: {
        //Products

        //Show all products
        SHOW_PRODUCTS(state){
            http
                .get("/products")
                .then(response => {
                    state.products = response.data; // JSON are parsed automatically.
                    state.products.forEach(p => {
                        if (p.name === 'ADD')
                        {
                            const fromIndex = state.products.indexOf(p);
                            state.products.splice(fromIndex, 1);
                            state.products.splice(state.products.length, 0, p);

                            state.productsFiltered = state.products;
                            state.productFilteredOther = state.products.slice(0, state.products.length-1);
                        }
                    })
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        //Add product in the basket
        ADD_PRODUCT_BASKET(state, command) {
            let bool = false;
            if (!state.connected)
            {
                alert("Please LogIn")
            }
            state.client.commands.forEach(c => {
                if (c._id === command._id){
                    c.acount+=1;
                    state.client.total += c.price;
                    bool = true;
                }
            })
            if (!bool){
                command.acount = 1;
                state.client.commands.push(command)
                state.client.total += command.acount * command.price;
            }
            if (state.client.commands.length === 0){
                command.acount = 1;
                state.client.commands.push(command)
                state.client.total += command.acount * command.price;
            }
            http
                .put("/user", state.client)
                .then(response => {
                    state.commands = response.data.commands; // JSON are parsed automatically.
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        //Delete product in the basket
        DELETE_PRODUCT_BASKET(state, index) {
            state.client.total -= state.client.commands[index].acount * state.client.commands[index].price;
            state.client.commands.splice(index, 1);
            http
                .put("/user", state.client)
                .then(response => {
                    state.commands = response.data.commands; // JSON are parsed automatically.
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        //Delete product
        DELETE_PRODUCT(state, product) {
            http
                .delete("/product/" + product._id)
                .then(response => {

                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        //Add product
        ADD_PRODUCT(state) {
            const newProduct = {
                category: state.category,
                name: state.nameproduct,
                price: state.price,
                acount: state.acount,
                description: state.description,
                image: state.image
            };
            http
                .post("/product", newProduct)
                .then(response => {
                    alert("Product add correctly")
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        //Update product
        UPDATE_PRODUCT(state, product){
            console.log(product)
            http
                .put("/productUpdate", product)
                .then(response => {
                    alert("Product update with suceed")
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        //Update product grade
        UPDATE_PRODUCT_GRADE(state, product){
            console.log(product)
            http
                .put("/productUpdateGrade", product)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        //Users

        //Show all users
        SHOW_USERS(state) {
            http
                .get("/users")
                .then(response => {
                    state.users = response.data; // JSON are parsed automatically.
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        //Register an user
        REGISTER_USER(state) {
            const newUser = {
                fullName: state.name,
                email: state.mail,
                hash_password: state.password,
            };
            console.log(newUser);
            http
                .post("/user", newUser)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    if (e.response.status === 500){
                        alert("This email is already used")
                    }
                    console.log(e);
                });
        },
        //Login as User with mail
        LOG_IN(state) {
            const User = {
                email: state.emailLog,
                hash_password: state.passwordLog,
            };
            http
                .post("/users", User)
                .then(response => {
                        state.connected = true;
                        state.client = response.data;
                        state.commands = state.client.commands
                        alert("You are now logIn")
                })
                .catch(e => {
                    console.log(e);
                    alert("Wrong password or email")
                });
        },
        //Logout as user
        LOG_OUT(state){
            state.connected = false;
            state.client = {};
            state.commands = [];
        },
        //Delete user
        BANNED_USER(state, user) {
            if (user.banned){
                user.banned = false;
            }
            else {
                user.banned = true;
            }
            console.log(user)
            http
                .put("/users", user)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    actions: {
        async showProducts({commit}, payload){
            commit("SHOW_PRODUCTS", payload)
        },
        async registerUser({commit}, payload){
            commit("REGISTER_USER", payload)
        },
        async logIn({commit}, payload){
            commit("LOG_IN", payload)
        },
        async addProductBasket({commit}, payload){
            commit("ADD_PRODUCT_BASKET", payload)
        },
        async deleteProductBasket({commit}, payload){
            commit("DELETE_PRODUCT_BASKET", payload)
        },
        async logOut({commit}, payload){
            commit("LOG_OUT", payload)
        },
        async showUsers({commit}, payload){
            commit("SHOW_USERS", payload)
        },
        async deleteProduct({commit}, payload){
            commit("DELETE_PRODUCT", payload)
        },
        async addProduct({commit}, payload){
            commit("ADD_PRODUCT", payload)
        },
        async bannedUser({commit}, payload){
            commit("BANNED_USER", payload)
        },
        async updateProductMeth({commit}, payload){
            commit("UPDATE_PRODUCT", payload)
        },
        async updateProductGrade({commit}, payload){
            commit("UPDATE_PRODUCT_GRADE", payload)
        },
    }
})
