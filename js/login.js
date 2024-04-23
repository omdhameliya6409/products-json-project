// import navbar from "../components/nav.js";

// document.getElementById("navbar").innerHTML=navbar()

const postdata= (email,Password) =>{
    try{
        fetch(`http://localhost:3000/users?email=${email}&Password=${Password}`,{

        })
        .then((response)=> response.json())
        .then((response)=>{
            if (response.length == 0) {
                alert("please enter valid email or password")
                postdata(users);
               
            } else {
                alert("login successfully");
            }
         })
       } catch (error) {
        console.log(error.message);
       }
}
const singup = (e)=>{
    e.preventDefault()

   let users = {
    email:document.getElementById("email").value,
    Password:document.getElementById("Password").value
  
   }
   postdata(users.email , users.Password)
}





document.getElementById("form").addEventListener("submit",singup)