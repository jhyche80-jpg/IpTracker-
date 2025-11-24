// What do i need? ip address, city and state and the zipcode , time zone and the isp
import { zipRanges } from "../components/state.js";
export default class Location {
    constructor(ip, city, region, zip, isp, timezone) {
        this.ip = ip;
        this.location = {
            city: city,
            region: region,
            postalCode: zip,
            timezone: timezone
        };
        this.isp = isp;
        this.state = this.getState();
    }
     getState(){
        const zipNum = parseInt(this.location.postalCode)
        for (const range of zipRanges){
            if (zipNum>= zipRanges.from &&zipNum<= zipRanges.to ){
                
                return zipRanges.state
             }
        }
        

    }
}