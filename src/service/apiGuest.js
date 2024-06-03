import axios from "axios"
const API_GUEST = import.meta.env.VITE_URL_GUESTS
//OBTENER LISTA
export const get_guest = async(setGuest) =>{
    //setGuest es una funcion que modifica el estado del componente 
    try {
        const {data} = await axios(`${API_GUEST}?_raw=1`);
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
        const data = await axios.patch(`${API_GUEST}/${id}`,{Asiste:"SI"})
        console.log(data);
        return data

    } catch (error) {
        console.log("Error en la modificacion de lista de invitados ", {error:error.message})
      
    }
}