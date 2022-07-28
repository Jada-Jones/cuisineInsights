
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success= document.querySelector("#success");
const errorNodes = document.querySelector(".error");



function validateForm(){

    //  clearMessages();

    if(nameInput.value.length < 1){
        alert("Name cannot be blank")
       
    } else if (email.value.length<1) {
        alert("Email cannot be blank")
    } else if (message.value.length<1){
        alert("Message cannot be blank")
    } else {
        if (email.value.includes("@")){
            alert(`Thank you for your message ${nameInput.value}`)
        }else{
            alert(`Your email is not in the correct format :  ${email.value}`)
        }
    }


    
    
}

// function clearMessages() {
//     for(let i=0; i < errorNodes.length; i++) {
//         errorNodes[i].innerText="";

//     }
//     nameInput.classList.remove("error-border");
// }
