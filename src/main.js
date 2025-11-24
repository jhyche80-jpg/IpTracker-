import fetchData from "./components/fetchData.js";
import Location from "./models/Location.js";
const search = document.getElementById("Search")
const ipAddress = document.getElementById("InputIP")
const ipAddresstext = document.getElementById('IPcontainer')
async function main() {
    try{
    const ipadd =  ipAddress.textContent
    const data = await fetchData(`https://geo.ipify.org/api/v2/country,city?apiKey=at_gVUsSTkKk92EIOWG2E52Gu4c34zw6&ipAddress=${ipadd}`)
    const location = new Location(data.ip, data.city,data.region,data.zip, data.isp, data.timezone)
    ipAddresstext.value = location.ip
    console.log("Done")
    }catch(error){
        console.log(error)

    }finally{
        console.log("done!")
    }
}
search.addEventListener('click',()=>{
    
    console.log("Button clicked ")
    main()
})