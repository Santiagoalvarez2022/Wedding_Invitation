# Project: Mobile-Only Wedding Website

## Description
This project is a mobile-only website designed for a couple who were getting married. With their consent, I have included this work in my portfolio. The site allows guests to RSVP and choose gifts they wish to give to the couple.

## Features
- **RSVP:** Guests can indicate whether they will attend the wedding or not.
- **Gift Selection:** Guests can view a list of desired gifts and select those they wish to give.
- **Spreadsheet-Based Management:** To reduce implementation costs, the site is designed to directly modify a spreadsheet. This way, the couple can see real-time information on attendance and gifts without the need for an API.

## Benefits
- **Cost Reduction:** By not requiring an API and directly modifying a spreadsheet, hosting and maintenance costs are significantly reduced.
- **Easy Access:** Designed to be accessible from any mobile device, making it easy for all guests to use.

## Technologies Used
- **Frontend:** Vite-React
  - **Dependencies:**
    ```json
    {
      "@fortawesome/fontawesome-svg-core": "^6.5.2",
      "@fortawesome/free-brands-svg-icons": "^6.5.2",
      "@fortawesome/free-regular-svg-icons": "^6.5.2",
      "@fortawesome/free-solid-svg-icons": "^6.5.2",
      "@fortawesome/react-fontawesome": "^0.2.1",
      "axios": "^1.7.1",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-router-dom": "^6.23.0",
      
    }
    ```
- **Backend/Integration:** Utilization of scripts for direct integration with spreadsheets (e.g., Google Sheets API).

## Example Code for Spreadsheet Integration
### Fetching Gift List
```javascript
//OBTENER LISTA
export const get_gifts = async (setGift, navigate) => {
    // setGift es una función que modifica el estado del componente
    try {
        const { data } = await axios("https://sheet.best/api/sheets/2e1557ad-0033-4eb1-a2ea-ff0205dfe987?_raw=1");
        
        // Solo enviaremos aquellos elementos cuyo status sea igual a "no" es decir que aún falta elegir.
        const gift_list = data.filter((g) => g.selected === "no" && g);

        setGift(gift_list);
    } catch (error) {
        // Validar y arrojar error
        console.log("Error en la petición de lista de regalos", { error: error.message });
        navigate("/Error");
        throw new Error("Ocurrió un error");
    }
};

## Lessons Learned
This project allowed me to deepen my understanding of integrating web applications with spreadsheets, optimizing for mobile devices, and the importance of creating cost-effective solutions for clients.
