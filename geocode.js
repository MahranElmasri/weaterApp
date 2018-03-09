const request =require('request');

var geocodeAddress=(address,callback)=>{
    const geoaddress = encodeURIComponent(address);
    request(
        {
          url: `http://maps.googleapis.com/maps/api/geocode/json?address=${geoaddress}`,
          json: true
        },
        function(error, response, body) {
          // console.log('error: ',error);
          // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          //console.log('body:',JSON.stringify(body,undefined,2));
          if (error) {
            callback("Gooogle Mao Can not be able to connect this address");
          } else if (body.status === "ZERO_RESULTS") {
            callback("Google map can not find this address");
          } else if (body.status === "OK") {
              callback(undefined,{
                  address:body.results[0].formatted_address,
                  Lat:body.results[0].geometry.location.lat,
                  Lng:body.results[0].geometry.location.lng
              })
       
          }
        }
      );
}
module.exports.geocodeAddress=geocodeAddress;
  