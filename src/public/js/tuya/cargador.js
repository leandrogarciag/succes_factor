"use strict";

document.getElementById("containerLoader").classList.remove("hidden");

let btnRegistrarEXC = document.querySelector("#btnRegistrarEXC");
let inpFileEXC = document.querySelector("#inpFileEXC");
let textError = document.getElementById("errores")
let errorContainer = document.getElementById("errorContainer")
let successModalLabel = document.getElementById("successModalLabel")
// const {setTimeout} = require('timers/promises')

// async function delay(ms){
//   await setTimeout(ms)
// }

// -----------------------------------

btnRegistrarEXC.classList.add("d-none")
// errorContainer.classList.add("d-none")

inpFileEXC.addEventListener("change", async () => {
  btnRegistrarEXC.classList.remove("d-none")
})

btnRegistrarEXC.addEventListener("click", async () => {
  
  
  document.getElementById("containerLoader").classList.remove("hidden");
  // errorContainer.classList.add("d-none")

  if(inpFileEXC.files.length > 0){
    const file = inpFileEXC.files[0]
    const formData = new FormData()
    formData.append('archivos_excel', file)
    
    fetch('/cargar',{
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      try{
        
        let messageModal = data.message
        let employes = data.employes
      // console.log(messageModal.missingKeys.length)

      if(data.message.missingKeys && data.message.missingKeys.length){
        // errorContainer.classList.remove("d-none")
        let missingKeysArray = [];

        for(let i=0;i<data.message.missingKeys.length;i++){
          missingKeysArray.push(data.message.missingKeys[i])
          textError = missingKeysArray.join(", ")
           console.log(missingKeysArray[i])

           $(document).ready(function () {
        
            successModalLabel.textContent =`error en las columnas: ${textError}`
            $("#successModal").modal("show");
            $("#successModal").on("hidden.bs.modal", function () {
  
            });
        }); 
        }     
             
      }else{
        $(document).ready(function () {

          successModalLabel.textContent = `${messageModal}`
          $("#successModal").modal("show");
          $("#successModal").on("hidden.bs.modal", function () {

          });
      });        
      }
      document.getElementById("containerLoader").classList.add("hidden");
      }catch(err){
        console.error(err)
      }
    })
  }
  // await delay(1000);
  // location.reload();
});