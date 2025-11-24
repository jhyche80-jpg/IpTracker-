import { zipRanges } from "../components/state.js";

export default class Location {
    constructor(ip, city, region, postalCode, isp, timezone, state) {
        this.ip = ip;
        this.location = {
            city: city,
            postalCode: postalCode,
            region: region,
            timezone: timezone
        };
        this.isp = isp;
  
    }

    getState() {
        const zipNum = parseInt(this.location.postalCode, 10);
        console.log("zipNum:", zipNum, "postalCode:", this.location.postalCode);
        for (const range of zipRanges) {

            if (zipNum >= range.from && zipNum <= range.to) {

                return range.state;
            }
        }
        console.warn("No matching state for zip:", zipNum);
        return null;
    }
}