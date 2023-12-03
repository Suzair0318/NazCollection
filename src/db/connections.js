const  mongoose = require('mongoose');


 const DatabaseConnection  = mongoose.connect( `mongodb+srv://Nazcollection_api:${process.env.PASSWORD}@cluster0.hpy8te0.mongodb.net/` 
  ).then(() => {
   console.log("Mongo_DB Connection");
}).catch((e) =>{
    console.log(e);
})

module.exports = DatabaseConnection ; 