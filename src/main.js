import fetchData from "./components/fetchData.js";
import Location from "./models/Location.js";
const search = document.getElementById("Search");
const ipAddress = document.getElementById("InputIP");
const ipAddresstext = document.getElementById('IPcontainer');
const Loccontainertext = document.getElementById("Loccontainertext");
const TimezoneText = document.getElementById('Timezonecontainer');
const ISPtext = document.getElementById("ISPcontainer");
const ErrorBox = document.getElementById("ErrorBox")


const map = L.map("map").setView([0, 0], 2);

async function findLocation(location) {
    const lat = location.location.lat;
    const long = location.location.lng;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    L.marker([lat, long])
        .addTo(map)
        .bindPopup(`Your IP: ${location.ip}`)
        .openPopup();

    map.setView([lat, long], 13);
}

async function main() {
    try {
        const ipadd = ipAddress.value;
        const data = await fetchData(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_gVUsSTkKk92EIOWG2E52Gu4c34zw6&ipAddress=${ipadd}`
        );

        const location = new Location(
            data.ip,
            data.location.city,
            data.location.region,
            data.location.postalCode,
            data.isp,
            data.location.timezone,
            data.location.lat,
            data.location.lng
        );

        // UI updates
        ipAddresstext.textContent = location.ip;
        TimezoneText.textContent = "UTC" + location.location.timezone;
        ISPtext.textContent = location.isp;

        if (location.location.postalCode === "") {
            Loccontainertext.textContent =
                location.location.city + ", " + location.location.region;
        } else {
            Loccontainertext.textContent =
                location.location.city +
                ", " +
                location.location.region +
                ", " +
                location.location.postalCode;
        }

        // 🔹 Pass the location to findLocation
        await findLocation(location);

    } catch (error) {
        console.error(error);}
        
}
function HandleSearch(){
    ErrorBox.innerHTML = "";
    ErrorBox.style.display = "none";
    const Ip = ipAddress.value
    if (Ip=== "") {
        ErrorBox.innerHTML = `
        <p><strong>Please enter an IP address: No Address entered!</strong></p>`;
        ErrorBox.style.display = "inline";
        return;
    }

    main();
}
main();
window.addEventListener('keydown',function (event){
    if(event.key ==='Enter')HandleSearch()

})

search.addEventListener("click", HandleSearch);