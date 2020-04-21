using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WeatherService.Controllers
{
    [ApiController]
    [EnableCors("AllowAll")]
    [Route("/api/forecast")]
    public class ForecastController : ControllerBase
    {
        private readonly ILogger<ForecastController> _logger;

        public ForecastController(ILogger<ForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public Forecast Get(string location)
        {
            var rng = new Random();

            var foreCast = new Forecast
            {
                Currently = new Currently(),
                Daily = new Daily()
            };
            foreCast.Daily.Data = new Data[8];

            foreCast.FakeData = true;
            foreCast.Latitude = 0;
            foreCast.Longitude = 0;
            foreCast.TimeZone = "America/New_York";
            foreCast.Currently.Time = 0;
            foreCast.Currently.Summary = "Clear";
            foreCast.Currently.Icon = "clear-day";
            foreCast.Currently.Temperature = rng.Next(10, 45);
            foreCast.Currently.Humidity = rng.NextDouble();
            foreCast.Currently.WindSpeed = 3.62;
            foreCast.Currently.WindBearing = 208;

            foreCast.Daily.Data[0] = new Data
            {
                Time = 0,
                Icon = "partly-cloudy-night",
                SunriseTime = 1553079633,
                SunsetTime = 1553123320,
                TemperatureHigh = rng.Next(10, 45),
                TemperatureLow = rng.Next(-10, 9)
            };

            foreCast.Daily.Data[1] = new Data
            {
                Time = 86400,
                Icon = "rain",
                SunriseTime = 1553079633,
                SunsetTime = 1553123320,
                TemperatureHigh = rng.Next(10, 45),
                TemperatureLow = rng.Next(-10, 9)
            };

            foreCast.Daily.Data[2] = new Data
            {
                Time = 172800,
                Icon = "rain",
                SunriseTime = 1553079633,
                SunsetTime = 1553123320,
                TemperatureHigh = rng.Next(10, 45),
                TemperatureLow = rng.Next(-10, 9)
            };

            foreCast.Daily.Data[3] = new Data
            {
                Time = 259200,
                Icon = "partly-cloudy-night",
                SunriseTime = 1553079633,
                SunsetTime = 1553123320,
                TemperatureHigh = rng.Next(10, 45),
                TemperatureLow = rng.Next(-10, 9)
            };

            foreCast.Daily.Data[4] = new Data
            {
                Time = 345600,
                Icon = "partly-cloudy-night",
                SunriseTime = 1553079633,
                SunsetTime = 1553123320,
                TemperatureHigh = rng.Next(10, 45),
                TemperatureLow = rng.Next(-10, 9)
            };

            foreCast.Daily.Data[5] = new Data
            {
                Time = 432000,
                Icon = "rain",
                SunriseTime = 1553079633,
                SunsetTime = 1553123320,
                TemperatureHigh = rng.Next(10, 45),
                TemperatureLow = rng.Next(-10, 9)
            };

            foreCast.Daily.Data[6] = new Data
            {
                Time = 518400,
                Icon = "rain",
                SunriseTime = 1553079633,
                SunsetTime = 1553123320,
                TemperatureHigh = rng.Next(10, 45),
                TemperatureLow = rng.Next(-10, 9)
            };

            foreCast.Daily.Data[7] = new Data
            {
                Time = 604800,
                Icon = "snow",
                SunriseTime = 1553079633,
                SunsetTime = 1553123320,
                TemperatureHigh = rng.Next(10, 45),
                TemperatureLow = rng.Next(-10, 9)
            };

            return foreCast;
        }
    }
}
