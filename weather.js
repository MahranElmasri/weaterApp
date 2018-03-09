const request = require("request");
var getWeather = (lat,lng,callback) => {
  request(
    {
      url:
        `https://api.darksky.net/forecast/4be4268985939e103089d8fc89aee83e/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect forecast.io Server");
      } else if (response.statusCode === 400) {
        callback("Unable to fetch weather");
      } else if (response.statusCode === 200) {
        callback(undefined,{
            Temp : body.currently.temperature
        });
      }

      // console.log(JSON.stringify(body,undefined,2));
    }
  );
};
module.exports.getWeather=getWeather;
