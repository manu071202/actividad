export function cantidadDeCaracteres(input){
    if(input.value.length >= 3 && input.value.length <=50){
        console.log("dato correcto")
     input.className ="form-control is-valid"
    }else{
        console.log("dato INCORRECTO")
        input.className ="form-control is-invalid"
    }

}

export function validarNumeros(input){
    //validar con expresiones regulares
    let patron = /^[0-9]{1,3}$/

    if(patron.test(input.value)){
        input.className = "form-control is-valid"
    }else{
        input.className = "form-control is-invalid"
    }

}

export function validarDni(input){
    //validar con expresiones regulares
    let patron = /^[\d]{1,2}[\d]{6}$/

    if(patron.test(input.value)){
        input.className = "form-control is-valid"
    }else{
        input.className = "form-control is-invalid"
    }
}

export function ValidarPeso(input){
    //validar peso
    let patron = /^[\d]{1,3}(\,[\d]{1,2})?$/
  
    if(patron.test(input.value)){
        input.className = "form-control is-valid"
    }else{
        input.className = "form-control is-invalid"
    }
}

export function ValidarAltura(input){
    //validar peso
    let patron = /^[\d]{0,1}(\,[\d]{1,2})$/
  
    if(patron.test(input.value)){
        input.className = "form-control is-valid"
    }else{
        input.className = "form-control is-invalid"
    }
}


export function ValidarAnioNaciemto(input){
    //validar fecha
    let patron = /^[\d]{1,4}$/
  console.log(input.value)
    if( patron.test(input.value) && input.value >= 1930 ){
        input.className = "form-control is-valid"
    }else{
        input.className = "form-control is-invalid"
    }
}