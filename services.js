// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days) {
        // JSON_CALLBACK using JSONP, API will let browser know that the request is safe     
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=862f919a08213fa8ab817c7dab8643ff", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherResult = weatherAPI.get({ q: city, cnt: days });
    };
    
}]);