import WelcomeEmail from "@/emails/welcome-email";
import { Resend } from "resend";
//import getWeather from "../weather/route";
//import { sendMail } from "@/app/actions/send-mail";
//import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { weather, name } = await request.json();
 
  try {
  

    const {data,error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["ggang89@gmail.com"],
      subject: "test",
      text:`weather는 ${weather}이고 name은 ${name}이다`,
      react: WelcomeEmail({ weather, name }),
    });
    console.log("이메일 전송 응답", data); //여기 결과가 왜 id 이지?

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ data }, { status: 200 });

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
