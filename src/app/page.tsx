// app/page.tsx
//import { Props } from "@/emails/welcome-email";
import FormComponent from "./components/FormComponent";
//import getWeather from "./api/weather/route";


export default async function Page() {
 //const data:Props = await getWeather();
  //console.log(data);
  return (
    <div className="p-50">
     {/* <div>{data.main.temp}</div>
      <div>{data.weather.map(w => <div key={w.id }>{w.main}</div>) }</div> */}
      <FormComponent  />
    </div>
  );
}
