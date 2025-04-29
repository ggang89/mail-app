const API_KEY = process.env.WEATHER_API;

export async function getWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=35.1799528&lon=129.0752365&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();
  return data;
}

// export async function GET() {
//   try {
//     const res = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=35.1799528&lon=129.0752365&appid=${API_KEY}&units=metric`
//     );

//     const data = await res.json();

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }

export type WeatherProps = {
  weather: [
    {
      main: string;
      id: number;
    },
  ];
  main: {
    temp: number;
  };
};
