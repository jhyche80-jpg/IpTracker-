import fetchData from "./components/fetchData.js";
import Location from "./models/Location.js";
const search = document.getElementById("Search")
const ipAddress = document.getElementById("InputIP")
const ipAddresstext = document.getElementById('IPcontainer')
const Loccontainertext = document.getElementById("Loccontainertext")
const TimezoneText = document.getElementById('Timezonecontainer')
const ISPtext = document.getElementById("ISPcontainer")

async function main() {
    try {
        const ipadd = ipAddress.value
        const data = await fetchData(`https://geo.ipify.org/api/v2/country,city?apiKey=at_gVUsSTkKk92EIOWG2E52Gu4c34zw6&ipAddress=${ipadd}`)
        console.log(data)
        const location = new Location(
            data.ip,
            data.location.city,
            data.location.region,
            data.location.postalCode,
            data.isp,
            data.location.timezone
        );
        console.log(location.location.postalCode);
        console.log(location)
        ipAddresstext.textContent = location.ip
        TimezoneText.textContent = "UTC"+location.location.timezone  
        ISPtext.textContent = location.isp
        if(location.location.postalCode===""){
             Loccontainertext.textContent = location.location.city+", "+  location.location.region
        }else{
             Loccontainertext.textContent = location.location.city + ", " + location.state+", "+location.location.postalCode
        }
       
    } catch (error) {
        console.error(error)

    } finally {
        console.log("done!")
    }
}
main()
search.addEventListener('click', () => {
    main()
    console.log("Button clicked ")

})