const bcrypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10); 
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

helpers.matchPassword = async (password, savedPassword) => {
   try {
      return await bcrypt.compare(password, savedPassword);
      
   } catch (e) {
       console.log(e);     
   }
};

helpers.filterItems = (arr, query) => {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

helpers.obtain = (obj,name) =>{
    var result = null;
    var value  = null;
    for(var key in obj){        
        value = obj[key];
        if(key == name){
          let split = value.split(",")
          if (split.includes("OU=Laika") || split.includes("OU=RPA")){
            // console.log(split)
            split2 = helpers.filterItems(split, 'CN')
            let nombre = (split2[0].split("="))[1]
            var result = {
              nombre: nombre,
              grupo: true,
            };
            return result;
          }else{  
            var result = {
              nombre: "N/A",
              grupo: true,
            };
            return result;  
          }        
    } else {
        if( typeof value == "object" ){
        result = helpers.obtain(value,name);
        }
    }
  }
  return result;
  };

module.exports = helpers;