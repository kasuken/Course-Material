using System;

namespace WeatherService
{
    public class Forecast
    {
        public bool FakeData { get; set; }

        public int Latitude { get; set; }

        public int Longitude { get; set; }

        public string TimeZone { get; set; }

        public Currently Currently { get; set; }

        public Daily Daily { get; set; }
    }

    public class Currently
    {
        public int Time { get; set; }

        public string Summary { get; set; }

        public string Icon { get; set; }

        public double Temperature { get; set; }

        public double Humidity { get; set; }

        public double WindSpeed { get; set; }

        public double WindBearing { get; set; }
    }

    public class Daily
    {
        public Data[] Data { get; set; }
    }

    public class Data
    {
        public int Time { get; set; }

        public string Icon { get; set; }

        public double TemperatureHigh { get; set; }

        public double TemperatureLow { get; set; }

        public double SunriseTime { get; set; }

        public double SunsetTime { get; set; }
    }
}