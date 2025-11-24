import { NetworkError } from "./ErrorHandler/ErrorHandler"
import { DataError } from "./ErrorHandler/ErrorHandler"
export  async function fetchData(url){
    try{
        const response = await fetch(url)
        data = await response.json()
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