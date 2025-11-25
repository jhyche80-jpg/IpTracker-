export default class Location {
    constructor(ip, city, region, postalCode, isp, timezone,lat,lng ) {
        this.ip = ip;
        this.location = {
            city: city,
            postalCode: postalCode,
            region: region,
            timezone: timezone,
            lat: lat,
            lng: lng

        };
        this.isp = isp;
  
    }
}