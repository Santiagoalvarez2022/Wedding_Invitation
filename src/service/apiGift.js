import axios from "axios"


//OBTENER LISTA
export const get_gifts = async(setGift,navigate) =>{
    //setGift es una funcion que modifica el estado del componente 
    try {
        const {data} = await axios("https://sheet.best/api/sheets/2e1557ad-0033-4eb1-a2ea-ff0205dfe987?_raw=1");
        // setGift(data)

        //solo enviaremos aquellos elementos cuyo status sea igual a "no" es decir que aun falta elegir.
        const  gift_list = data.filter((g)=> g.selected === "no" && g)

        setGift(gift_list)

    } catch (error) {
        //validar y arrojar error
        console.log("Error en la peticion de lista de regalos", {error:error.message})
        navigate("/Error");
        throw Error("Ocurrio un error")
    }
}

/*
input
- agregar botton para que el invitado pueda seleccionar que cantd de elemento quu quiera regalar .
- modificar la cantidad en el sheets 

- validar que "status" sea = a true, si es false es que ya esta seleccionado y no hace falta ponerlo en la lista.
- solo enviar al componente los que sean true y con la cantidad correcta 


escribir el invitado entre  " - " para diferenciarlo  
*/

export const update_gift = async({id,guestName}) =>{
     //setGift es una funcion que modifica el estado del componente 
     try {

        //busco el elemnento
        //modifico la cantd actual
        //si es igual  cero dejo el status en "SI" si es diferente solo resto uno a la cantidad
        
        
        
        const {data} = await axios.patch(`https://sheet.best/api/sheets/2e1557ad-0033-4eb1-a2ea-ff0205dfe987/${id}`,{})
        console.log(data);
        return data


    } catch (error) {
        //validar y arrojar error
        console.log("Error en la peticion de lista de invitados ", {error:error.message})
    }
}

// update_gift({id:1,amount:5,guestName:"santiago"})

