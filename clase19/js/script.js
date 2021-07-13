window.addEventListener("load", function() {

    let formulario = document.querySelector("form");
    
    let inputName = document.querySelector("#name");
    let inputJob = document.querySelector("#job");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let datos = {
            name: inputName.value,
            job: inputJob.value
        }

        fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(noTengoIdeaQueEs) {
            console.log(noTengoIdeaQueEs)
        })

    })

})