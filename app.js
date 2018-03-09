const request = require("request");
const weather=require('./weather')
const yargs = require("yargs");
const geocode=require('./geocode')
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Addresss to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;
// console.log('---->',argv.a);
geocode.geocodeAddress(argv.a,(errorMessage,result)=>{
   if(errorMessage){
       console.log(errorMaessage);
   }else{
       console.log(result.address);
       weather.getWeather(result.Lat,result.Lng,(errorMessage,resultWeather)=>{
        if(errorMessage){
            console.log(errorMessage);
        }else{
            console.log(resultWeather)
            console.log(resultWeather)
            console.log(resultWeather)
        }
    });
   }
})


