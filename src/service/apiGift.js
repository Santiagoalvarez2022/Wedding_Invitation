import axios from "axios"
const API_GIFT = import.meta.env.VITE_URL_GIFTS

//OBTENER LISTA
export const get_gifts = async(setGift,navigate) =>{
    //setGift es una funcion que modifica el estado del componente 
    try {
        const {data} = await axios(`${API_GIFT}?_raw=1`);
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
 

 
