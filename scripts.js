usuario = document.querySelector(".usuario");
password = document.querySelector(".password");
submit = document.querySelector(".submit");
h1 = document.querySelector("h1")

submit.addEventListener("click", (event)=>
{
    if(usuario.value == "" && password.value == "")
    {
        h1.textContent = "No ingresaste ningún dato";
        event.preventDefault();
    }
    else
    {
        if(usuario.value !== "titor" && password.value !== "titor")
        {
            h1.textContent = "No ingresaste datos válidos";
            event.preventDefault();
        }    
    }
});
