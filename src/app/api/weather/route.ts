const API_KEY = process.env.WEARHER_API;

export default async function getWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=35.1799528&lon=129.0752365&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();
  return data;
}
export type WeatherProps = {
  weather: [
    {
      main: "string";
      id: number;
    },
  ];
  main: {
    temp: number;
  };
};