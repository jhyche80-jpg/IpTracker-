export  async function fetchData(url){
    try{
        const response = await fetch(url)
        data = await response.json()
        return data
    }catch(error){
        console.error("An error Has occured :",error.message)
    }finally{
        console.log("opperation Complete")
    }

}