import axios from "axios"


//OBTENER LISTA
export const get_guest = async(setGuest) =>{
  
    //setGuest es una funcion que modifica el estado del componente 
    try {
        const {data} = await axios("https://sheet.best/api/sheets/e86d7859-5c14-4bd3-81f4-8fbc09a1b2bd?_raw=1");
        setGuest(data)
    } catch (error) {
        //validar y arrojar error
        console.log("Error en la peticion de lista de invitados ", {error:error.message})
        
    
    }
}



//MODIFICAR LISTA

export const confirm_guest = async(id) =>{
   
    try {

        //ACEPTO LA INVITACION DEL INVITADO CON EL ID PSADO POR PARAMETRO 
        const data = await axios.patch(`https://sheet.best/api/sheets/e86d7859-5c14-4bd3-81f4-8fbc09a1b2bd/${id}`,{Asiste:"SI"})
        return data

    } catch (error) {
        console.log("Error en la modificacion de lista de invitados ", {error:error.message})
      
    }
}