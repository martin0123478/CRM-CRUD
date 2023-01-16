import {obtenerCliente,editarCliente} from './API.js'
import {mostrarAlerta,validar} from './funciones.js'
(function(){

    //campos
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const empresaInput = document.querySelector('#empresa')
    const telefonoInput = document.querySelector('#telefono')
    const idInput = document.querySelector('#id')
    document.addEventListener('DOMContentLoaded',async ()=>{
        const paramrtrosUrl = new URLSearchParams(window.location.search)

        const idCliente = parseInt(paramrtrosUrl.get('id'))

      const cliente = await obtenerCliente(idCliente)
     mostrarCliente(cliente)

     const formulario = document.querySelector('#formulario')
     formulario.addEventListener('submit',validarCliente)
    })

    function mostrarCliente(cliente){
        const {nombre,empresa,email,id,telefono} =cliente
        nombreInput.value = nombre
        idInput.value = id
        emailInput.value = email
        empresaInput.value = empresa
        telefonoInput.value = telefono
    }

    function validarCliente(e){
        e.preventDefault()

        const cliente = {
            nombre:nombreInput.value,
            email:emailInput.value,
            telefono:telefonoInput.value,
            empresa:empresaInput.value,
            id: parseInt(idInput.value)
        }
        if(validar(cliente)){
            //Mostrar mensaje
            mostrarAlerta('todos los campos son obligatorio')
            return
        }
        //rescribe el objeto
        editarCliente(cliente)
        
       
    }

    
    
})()