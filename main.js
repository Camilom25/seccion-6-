const formulario = document.querySelector("#form")

if (formulario) {
    formulario.addEventListener("submit",
        (event) =>{
            event.preventDefault()

            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correo").value;
            const mensaje = document.getElementById("mensaje").value;


            console.log("nombre" , nombre);
            console.log("correo" , correo);
            console.log("mensaje" , mensaje);
           

            alert("hola"+nombre+
                "tu correo es "+correo+
               " tu motivo de mensaje es",mensaje


            )
            



          



    })
    }else{
     console.error ( " error al  enviar el formulario #contacto")
}