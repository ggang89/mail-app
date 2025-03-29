export default async function getWeather() {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=35.1799528&lon=129.0752365&appid=686a73df8afa13ecc2c99704f6470090&units=metric"
  );
  const data = await res.json();
  return data;
}
