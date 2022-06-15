// Export mongoose
const mongoose = require("mongoose");
//Assign MongoDB connection string to Uri and declare options settings
// Important!!! set your real login and passwd in connection string
const uri ="mongodb+srv://client:c0ll05u5@clusterefrei.t5fyv.mongodb.net/shop?retryWrites=true&w=majority";
// Declare a variable named option and assign optional settings
const options = {
useNewUrlParser: true,
useUnifiedTopology: true
};

mongoose.Promise = global.Promise;
// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
console.log("Successfully connected to Atlas MongoDB.");
},
err => {
{
console.log("Error connecting Database instance due to:", err);
}
})
.catch(err=>{
console.log(err);
console.log('Could not connect to MongoDB.');
});