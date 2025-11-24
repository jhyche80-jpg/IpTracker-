// What do i need? ip address, city and state and the zipcode , time zone and the isp
import { zipRanges } from "../components/state";
export class Location{
    constructor(ip, city , region,zip, isp,timezone) {
        this.ip = ip;
        this.location.city= city
        this.location.region= region
        this.location.postalCode =zip
        this.location.timezone = timezone
        this.isp =isp
}
     getState(){
        const zipNum = parseInt(this.location.postalCode)
        let state 
        for (const range of zipRanges){
            if (zipNum>= zipRanges.from &&zipNum<= zipRanges.to ){
                
                return zipRanges.state
             }
        }
        

    }
}