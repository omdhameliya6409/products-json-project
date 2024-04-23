// import navbar from "../components/nav.js";

// document.getElementById("navbar").innerHTML=navbar()

const postdata= (data) =>{
    try{
        fetch("http://localhost:3000/users",{
            method:"post",
            headers:{"content-type" : "application/json"},
            body:JSON.stringify(data)
        })
    }catch(error){
        console.log(error.message);
    }
}

const isuserexists = (users)=>{
   try {
     fetch(`http://localhost:3000/users?email=${users.email}`)
     .then((response)=>response.json())
     .then((response)=>{
        if (response.length == 0) {
            postdata(users);
        } else {
            alert("User already exists");
        }
     })
   } catch (error) {
    console.log(error.message);
   }
}
const singup = (e)=>{
    e.preventDefault()

   let users = {
    username:document.getElementById("username").value,
    email:document.getElementById("email").value,
    Password:document.getElementById("Password").value
  
   }
   isuserexists(users)
}





document.getElementById("form").addEventListener("submit",singup)