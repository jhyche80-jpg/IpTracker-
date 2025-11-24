import { DataError, NetworkError } from "../models/ErrorHandler/ErrorHandler.js";

export  default async function fetchData(url){
    try{
        const response = await fetch(url)
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json()
        
        return data
    }catch(error){
        if (error instanceof NetworkError){
            console.error(` Network error: ${error.message}`)
        } else if (error instanceof DataError){
            console.error(` Data error: ${error.message}`)
        } else if (error instanceof Error){
            console.error(` Unkown error: ${error.message}`)
        }
    }finally{
        console.log("opperation Complete")
    }

}