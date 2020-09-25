class AppLogic{
    async getUserLocationFromHERE(lat,log){
      const response = await fetch(
          `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${log}&apiKey=GSD3NW4vKzP7noIdGGjUf-CQ9WsisTNYGHvv_jiWaOU&lang=en`,
        //   {
        //     method:"GET",
            
        //     headers:{
        //       "Host": "config.data.api.platform.here.com",
        //       "Cache-Control": "no-cache",
        //     "Authorization": "Bearer GSD3NW4vKzP7noIdGGjUf-CQ9WsisTNYGHvv_jiWaOU"
        //   }
        // }
        );
        const data = await response.json();
        console.log(data);  
    }
      
    
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    getLocation() {
        const that = this
        console.log("get location")
        return new Promise((resolve,reject)=>{

           async function showPosition(position) {
                console.log(position.coords)
                that.getUserLocationFromHERE(position.coords.latitude,position.coords.longitude)
            //    await that.getAddressFromLogandLat(`${position.coords.latitude},${position.coords.longitude}`)
              const data = await that.getUserLocation()
                resolve(`${data.city}, ${data.region}`)
                // resolve(`${position.coords.latitude} ${position.coords.longitude}`)
              
            }
            if (navigator.geolocation) {
                console.log(navigator.geolocation.getCurrentPosition(showPosition))
              } else { 
              //   x.innerHTML = "Geolocation is not supported by this browser.";
              }
            
        })
        
        

    }
      async getAddressFromLogandLat(loglat){
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${loglat}&key=AIzaSyA6IQym2fkTeMNvka0UX10ExMCCfMP__EI`
          );
          const data = await response.json();
          console.log(data);  
      }
      async getUserLocation() {
        const response = await fetch(
          "https://ipinfo.io/json?token=a5a87172fe538f"
        );
        const data = await response.json();
        console.log(data);
        return data
      }

}
const appLogic = new AppLogic()
export default appLogic