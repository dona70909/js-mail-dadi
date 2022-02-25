const arrayEmail = ["ciao@gmail.com", "st546hdg@gmail", "12top@gmail.com"];
const inputUserEmail = document.getElementById("my-email").value;

const outputCheckEmail  = document.getElementById("output-email-check");

for(i = 0; i<arrayEmail.length; i++){
    if(arrayEmail[i] == inputUserEmail){
        outputCheckEmail.innerHTML = "yes";
    } else{
        outputCheckEmail.innerHTML = "nope";
    }
}