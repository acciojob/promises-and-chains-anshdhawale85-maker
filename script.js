//your JS code here. If required.

const age = document.getElementById("age");
const name = document.getElementById("name");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(event) {
    event.preventDefault()

    let userAge = age.value;
    let userName = name.value.trim()

    if(userAge === "" || userName === "") {
       alert("Please enter valid details.");
       return
    }

   let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Number(userAge) > 18) {
            resolve("Welcome, . You can vote.")
        } else {
            reject("Oh sorry . You aren't old enough.")
        }
    }, 4000);
   })


   promise
   .then((message) => {
      alert(message)
   })
   .catch((error) => {
      alert(error)
   })
})