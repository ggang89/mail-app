export default async function getWeather() {
  const res = await fetch(process.env.WEATHER_URL);
  const data = await res.json();
  return data;
}
