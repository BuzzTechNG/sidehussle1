class AppLogic{
    userId = ""

    convertDate(date) {
      return new Date(date)
    }

    convertDateToNow(dateX, withTime){
      const date = this.convertDate(dateX)
      return `${withTime ? date?.toLocaleTimeString() : ''} ${date?.toLocaleString('default', { month: 'long' })} ${date?.getFullYear()}.`
    }
    convertToDateWithRecentCapability(dateX,showTime){
      
      const date = this.convertDate(dateX)
      const dateNow = Date.now()
      const dateDifference = this.convertDate(dateNow) - date
      console.log(dateDifference)
      if(dateDifference < 1800000){
        if(dateDifference < 60000){
          return `${Math.floor(dateDifference/1000)} seconds ago`
        }
        return `${Math.floor(dateDifference/60000)} minutes ago`
      }else{
       return this.convertDateToNow(dateX,showTime)
      }
    }


    paystackCharge(money){
      const NIGERIA_DECIMAL_FEE = 1.5/100
      const GHANA_DECIMAL_FEE = 1.95/100
      const FLAT_FEE = 100
      money = parseInt(money)
      let Total;
      if(isNaN(money))return 0
      if (money <= 2500 ){
        Total = (money) / (1-NIGERIA_DECIMAL_FEE)
      }else{
        Total = (money + FLAT_FEE) / (1-NIGERIA_DECIMAL_FEE)
      }
      if(parseFloat(Total - money).toFixed(2) > 2000) return 2000
      return parseFloat(Total - money).toFixed(2)
    }
    async getUserLocationFromHERE(lat,log){
      const response = await fetch(
          `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${log}&apiKey=GSD3NW4vKzP7noIdGGjUf-CQ9WsisTNYGHvv_jiWaOU&lang=en`);
        const data = await response.json();
        console.log(data);  
    }
      
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    getLocationLatLog() {
      const that = this
      console.log("get location")
      return new Promise((resolve,reject)=>{

         async function showPosition(position) {
              console.log(position.coords)
              
              resolve(`${position.coords.latitude} ${position.coords.longitude}`)
            
          }
          if (navigator.geolocation) {
              console.log(navigator.geolocation.getCurrentPosition(showPosition))
            } else { 
            //   x.innerHTML = "Geolocation is not supported by this browser.";
            }
          
      })
      
  
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